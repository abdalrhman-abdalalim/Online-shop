export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IKeyForm {
  title:string;
  description:string;
  price:string;
  imageURL:string;
}
export interface IFormInput {
  id: string;
  name: keyof IKeyForm;
  label: string;
  type: string;
}