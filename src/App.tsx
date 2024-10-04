import { useState, ChangeEvent, FormEvent, useCallback } from "react";
import "./App.css";
import Model from "./component/ui/Model";
import ProductCard from "./component/ui/ProductCard";
import { categories, formInputList, productList } from "./component/data";
import { Button } from "@headlessui/react";
import Input from "./component/ui/Input";
import {
  IKeyForm,
  IProduct,
  IEditProdcutList,
} from "./component/interfaces/index";
import { producValidation } from "./component/validation";
import ErrorMsg from "./component/ui/ErrorMsg";
import CircleColor from "./component/ui/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./component/ui/Select";
import { colors } from "./component/data/index";
import toast, { Toaster } from "react-hot-toast";


function App(this: any) {
  const defaultProduct: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const defaultError = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  }

  /*-----State-----*/
  const [isOpen, setIsopen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [selected, setSelected] = useState(categories[0]);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [editProduct, setEditProduct] = useState<IProduct>(defaultProduct);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [error, setError] = useState(defaultError);

  /*-----Handler-----*/
  const Validation: IKeyForm = {
    title: product.title,
    description: product.description,
    imageURL: product.imageURL,
    price: product.price,
    colors: product.colors[0],
  };
  const ValidationEdit: IKeyForm = {
    title: editProduct.title,
    description: editProduct.description,
    imageURL: editProduct.imageURL,
    price: editProduct.price,
    colors: editProduct.colors[0],
  };
  const closeModel = useCallback( () => setIsopen(false),[]);
  const openModel = useCallback(() => setIsopen(true),[]);
  const closeEditModel = useCallback(() => setIsOpenEditModal(false),[]);
  const openEditModel = useCallback(() => setIsOpenEditModal(true),[]);
  const openConf = useCallback( () => setOpenConfirm(true),[]);
  const closeConf = () => setOpenConfirm(false);
  const onChangeHandler =useCallback( (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  },[]);
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = producValidation(Validation);
    if (tempColor.length == 0) {
      error.colors = "Enter Your Colors";
    } else {
      error.colors = "";
    }
    const hasErrorMsg = Object.values(errors).every((val) => val === "");
    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColor, category: selected },
      ...prev,
    ]);
    toast('Successfully added')
    setProduct(defaultProduct);
    setTempColor([]);
    closeModel();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = producValidation(ValidationEdit);
    if (tempColor.concat(editProduct.colors).length == 0) {
      error.colors = "Enter Your Colors";
    } else {
      error.colors = "";
    }
    const hasErrorMsg = Object.values(errors).every((val) => val === "");
    if (!hasErrorMsg) {
      setError(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...editProduct,
      colors: tempColor.concat(editProduct.colors),
    };
    setProducts(updatedProducts);

    setEditProduct(defaultProduct);
    setTempColor([]);
    closeEditModel();
  };
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };
  const onCancel = () => {
    closeModel();
    setProduct(defaultProduct);
    setError(defaultError)
    setTempColor([]);
  };
  const removeProductHandler = () =>{
    const filtered=products.filter(product=>product.id!==editProduct.id);
    setProducts(filtered);
    closeConf();
    toast("Product has been deleted", { icon: "👏" ,style:{
      backgroundColor:"black",
      color:"white"
    }});
  }
  const onCancelConfirm = () => {
    closeConf();
  };

  /*-----Render-----*/
  const renderProductList = products.map((product, index) => (
    <ProductCard
      product={product}
      key={product.id}
      setEditProduct={setEditProduct}
      OpenModal={openEditModel}
      index={index}
      setIndex={setIndex}
      openConfirm={openConf}
    />
  ));
  const renderColorCircle = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onChange={onChangeHandler}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((perv) => perv.filter((itme) => itme !== color));
          return;
        }
        if (editProduct.colors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
        } else {
          setTempColor((prev) => [...prev, color]);
        }
        error.colors = "";
      }}
    />
  ));
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label className="text-sm font-bold text-gray-700" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={error[input.name]} />
    </div>
  ));
  const renderEditModal = ({ id, Label, name }: IEditProdcutList) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm font-bold text-gray-700">
          {Label}
        </label>
        <Input
          type="text"
          id={id}
          value={editProduct[name]}
          name={name}
          onChange={onChangeEditHandler}
        />
        <ErrorMsg msg={error[name]} />
      </div>
    );
  };

  return (
    <main className="container mx-auto">
      <div className="flex justify-center items-center mt-3">
        <Button
          className="bg-indigo-600 w-40 rounded-md p-3 text-white font-bold my-2"
          onClick={openModel}
        >
          add Product
        </Button>
      </div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 rounded-md">
        {renderProductList}
      </div>
      {/* Add new Product */}
      <Model isOpen={isOpen} closeModel={closeModel} title={"add New Product"}>
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selected} setSelected={setSelected} />
          <div className="flex items-center space-x-1 mt-3 flex-wrap">
            {renderColorCircle}
            <ErrorMsg msg={error["colors"]} />
          </div>
          <div className="flex items-center space-x-1 mt-3 flex-wrap">
            {tempColor.map((color) => (
              <span
                className="rounded-md w-14 text-center p-1 text-white font-sans text-xs"
                key={color}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3 mt-3">
            <Button
              className={
                "bg-indigo-700 w-full rounded-md text-white font-bold hover:bg-indigo-600"
              }
              type="submit"
            >
              Submit
            </Button>
            <Button
              className={
                "bg-gray-400 w-full rounded-md text-white font-bold hover:bg-gray-700"
              }
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Model>
      {/* Edit Product */}
      <Model
        isOpen={isOpenEditModal}
        closeModel={closeEditModel}
        title={"Edit Product"}
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderEditModal({
            id: "title",
            Label: "Product Title",
            name: "title",
          })}
          {renderEditModal({
            id: "description",
            Label: "Product Description",
            name: "description",
          })}
          {renderEditModal({
            id: "imageURL",
            Label: "Product imageURL",
            name: "imageURL",
          })}
          {renderEditModal({
            id: "price",
            Label: "Product price",
            name: "price",
          })}
          <Select
            selected={editProduct.category}
            setSelected={(value) => {
              setEditProduct({ ...editProduct, category: value });
            }}
          />
          <div className="flex items-center space-x-1 mt-3 flex-wrap">
            {renderColorCircle}
            <ErrorMsg msg={error["colors"]} />
          </div>
          <div className="flex items-center space-x-1 mt-3 flex-wrap">
            {tempColor.map((color) => (
              <span
                className="rounded-md w-14 text-center p-1 text-white font-sans text-xs"
                key={color}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <Button
              className={
                "bg-indigo-700 w-full rounded-md text-white font-bold hover:bg-indigo-600"
              }
              type="submit"
            >
              Submit
            </Button>
            <Button
              className={
                "bg-gray-400 w-full rounded-md text-white font-bold hover:bg-gray-700"
              }
              onClick={closeEditModel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Model>
      {/* Delete Confirm */}
      <Model isOpen={openConfirm} closeModel={closeEditModel}>
        <div>
          <h1
            className="font-bold text-lg"
            style={{ marginBottom: 40, marginTop: -25 }}
          >
            Are you sure you want to remove this product from your strore ?
          </h1>
          <p className="text-sm text-gray-500" style={{ marginTop: -30 }}>
            Deleting this product will remove it permanently from your
            inventory. Any associated data, sales history, and other related
            information will also be deleted. Please make sure this is the
            intended action.
          </p>
          <div className="flex items-center space-x-3 mt-3">
            <Button
              className={
                "bg-indigo-700 w-full rounded-md p-2 text-white font-bold hover:bg-indigo-600"
              }
              type="submit"
              onClick={removeProductHandler}
            >
              Delete
            </Button>
            <Button
              className={
                "bg-gray-400 w-full rounded-md p-2 text-white font-bold hover:bg-gray-700"
              }
              onClick={onCancelConfirm}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Model>
      <Toaster />
    </main>
  );
}

export default App;
