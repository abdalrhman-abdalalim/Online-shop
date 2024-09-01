import Image from "./Image";
import Button from "./Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functinos";
import { colors } from "../data";
import CircleColor from "./CircleColor";
import { calcPrice } from "../utils/functinos";
interface IProps {
  product : IProduct;
  setEditProduct:(product:IProduct)=>void;
  OpenModal:()=>void;
  index:number;
  setIndex:(value:number)=>void;
  openConfirm:()=>void;
}

const ProductCard = ({OpenModal,index,setIndex,setEditProduct,product ,openConfirm}: IProps) => {
  const {title,description,imageURL, price,category,colors }=product;

  const renderColorCircle = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    />
  ));
  const onEdit = () =>{
    setEditProduct(product);
    OpenModal();
    setIndex(index);
  }
  const onConfirm = ()=>{
    setEditProduct(product);
    openConfirm();
  }
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imgSrc={imageURL}
        alt="product name"
        className="w-full h-52 rounded-md lg:object-cover"
      />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center space-x-1 mt-3 flex-wrap">
        {!colors.length?<p>Not available colors!</p>:renderColorCircle}
      </div>


      <div className="flex justify-between items-center">
        <span className="text-indigo-800 font-bold">{calcPrice(price)}</span>
        <div className="flex items-center justify-between">
          <span className="p-2 text-sm font-bold">{category.name}</span>
          <Image
            imgSrc={category.imageURL}
            alt="product name"
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>

      <div className="flex mt-2 items-center justify-between space-x-2">
        <Button
          className="bg-indigo-800 p-2"
          onClick={() => {
            onEdit();
          }}
        >
          EDIT
        </Button>
        <Button className="bg-red-700 w-full p-2 rounded-md text-white font-bold"
        onClick={()=>{
          onConfirm();
        }}>
          DELETE
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
