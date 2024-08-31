import { colors } from './../data/index';
import { Label } from '@headlessui/react';
import { ProductTypes } from '../../types';
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
  colors:string;
}
export interface IFormInput {
  id: string;
  name: keyof IKeyForm;
  label: string;
  type: string;
}

export interface ICategory {
  id:string;
  name:string;
  imageURL:string;
}

export interface IEditProdcutList{
  id:string;
  Label:string;
  name:ProductTypes;
}