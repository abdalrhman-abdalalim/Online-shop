import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import Model from "./component/ui/Model";
import ProductCard from "./component/ui/ProductCard";
import { formInputList, productList } from "./component/data";
import { Button } from "@headlessui/react";
import Input from "./component/ui/Input";
import { IKeyForm, IProduct } from "./component/interfaces/index";
import { producValidation } from "./component/validation";
import ErrorMsg from "./component/ui/ErrorMsg";
function App() {
  /*-----State-----*/
  const [isOpen, setIsopen] = useState(true);
  const defaultProduct:IProduct = {
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


  const [product, setProduct] = useState<IProduct>(defaultProduct);
  
  const [error,setError]=useState({
    title: "",
    description: "",
    imageURL: "",
    price: ""
})

  /*-----Handler-----*/
  const Validation: IKeyForm = {
    title: product.title,
    description: product.description,
    imageURL: product.imageURL,
    price: product.price,
  };
  const closeModel = () => setIsopen(false);
  const openModel = () => setIsopen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>):void => {
    const { value, name } = event.target;  

    setProduct({
      ...product,
      [name]: value,
    });

    setError({
      ...error,
      [name]:""
    })
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    const errors = producValidation(Validation);
    console.log(errors);

    const hasErrorMsg = Object.values(errors).every(val=>val==='');

    if(!hasErrorMsg){
      setError(errors);
      return;
    }

    console.log('successfuly submiting');
  };
  const onCancel=()=>{
    alert('Cancel');
    setProduct(defaultProduct);
  }

  /*-----Render-----*/
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
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
      <ErrorMsg msg={error[input.name]}/>
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button
        className={"bg-indigo-600 w-full p-3 text-white font-bold my-2"}
        onClick={openModel}
      >
        Add Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 rounded-md">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} closeModel={closeModel} title={"add New titel"}>
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

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
    </main>
  );
}

export default App;
