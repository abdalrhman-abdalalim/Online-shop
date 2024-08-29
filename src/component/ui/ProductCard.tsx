import Image from "./Image";
import Button from "./Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functinos";
import { colors } from "../data";
import CircleColor from "./CircleColor";
interface IProps {
  product : IProduct;
}

const ProductCard = ({product}: IProps) => {
  const {title,description,imageURL, price,category,colors }=product;

  const renderColorCircle = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    />
  ));
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
        {renderColorCircle}
      </div>


      <div className="flex justify-between items-center">
        <span className="text-indigo-800 font-bold">${price}</span>
        <div className="flex items-center justify-between">
          <Image
            imgSrc={category.imageURL}
            alt="product name"
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>

      <div className="flex mt-2 items-center justify-between space-x-2">
        <Button
          className="bg-indigo-800 "
          onClick={() => {
            alert("hello");
          }}
        >
          EDIT
        </Button>
        <Button className="bg-red-700 w-full rounded-md text-white font-bold">
          DELETE
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
