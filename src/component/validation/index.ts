import { IKeyForm } from "../interfaces";
export const producValidation = (product: IKeyForm) => {
  const errors: IKeyForm = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const valid = /^(ftp|http|https):\/\/[^]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 charactrer!";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description = "Product description must be between 10 and 80 charactrer!";
  }

  if(!product.imageURL.trim() || !valid){  
    errors.imageURL="Valid image URL is required";
  }

  if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price="Valid price is required!";
  }

  return errors;
};
