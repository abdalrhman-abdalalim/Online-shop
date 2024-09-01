import { v4 as uuid, v4 } from "uuid";
import {IProduct,IFormInput ,ICategory} from "../interfaces/index";

export const productList: IProduct[] = [
  {
    id: v4(),
    title: "Lancer Shark",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "data:image/jpeg;base64,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",
    price: "1442340",
    colors: ["#9f9b9b", "#574c4c"],
    category: {
      name: "Cars",
      imageURL:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg",
    },
  },
  {
    id: v4(),
    title: "NoteBook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "40",
    colors: ["#9f9b9b", "#574c4c"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "To-Do List",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/6192131/pexels-photo-6192131.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "23",
    colors: ["#9f9b9b", "#574c4c"],
    category: {
      name: "To-Do-List",
      imageURL:
        "https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "To-Do notes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "30",
    colors: [],
    category: {
      name: "To-Do-List",
      imageURL:
        "https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "Blue Pens",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "18",
    colors: ["#d71e1e", "#000000", "#219b21"],
    category: {
      name: "Pens",
      imageURL:
        "https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "Pineapple NoteBook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/947870/pexels-photo-947870.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "12",
    colors: ["#ff0076", "#ac5478", "#356787"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "Plans NoteBook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "60",
    colors: ["#c192a8", "#ac5478", "#356787", "#cf8d2a"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "BlackWhite NoteBook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/163166/coffee-envelopes-work-desk-notebook-163166.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "42",
    colors: ["#696262", "#ac5478", "#356787"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "Blue Pens",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.",
    imageURL:
      "https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "14",
    colors: ["#d71e1e", "#000000", "#219b21"],
    category: {
      name: "Pens",
      imageURL:
        "https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: v4(),
    title: "Leather Notebook",
    description:
      "A luxurious leather-bound notebook, perfect for your daily thoughts and plans. Crafted with care and precision to ensure durability and style.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTZR7foHP4CpQEVu84mj7uo-Jb9Ta_jDYyg&s",
    price: "120",
    colors: ["#3e2d2d", "#f2ebe3"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: v4(),
    title: "Eco-Friendly Notebook",
    description:
      "This notebook is made from recycled materials, perfect for the environmentally conscious individual. It offers a smooth writing experience with eco-friendly pages.",
    imageURL:
      "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "30",
    colors: ["#7f8c6a", "#cfcfc4"],
    category: {
      name: "Computers",
      imageURL:
        "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: v4(),
    title: "Hardcover Sketchbook",
    description:
      "A durable hardcover sketchbook ideal for artists and designers. It comes with thick, high-quality paper that’s perfect for sketches and drawings.",
    imageURL:
      "https://images.ctfassets.net/f1fikihmjtrp/7FYh39g7XLjtaV2UhFYibQ/f07e6709f46c477bbc99eb5425eb4d35/11808-group-4ww.jpg",
    price: "65",
    colors: ["#1f1f1f", "#ffffff"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: v4(),
    title: "Minimalist Journal",
    description:
      "A sleek, minimalist journal designed for those who love simplicity. It’s the perfect companion for jotting down your daily tasks or recording your thoughts.",
    imageURL:
      "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "35",
    colors: ["#a6a6a6", "#f0f0f0"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: v4(),
    title: "Classic Spiral Notebook",
    description:
      "A classic spiral-bound notebook that’s perfect for students and professionals alike. It’s lightweight and easy to carry, making it ideal for on-the-go note-taking.",
    imageURL:
      "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "20",
    colors: ["#4e5d6c", "#e3e3e3"],
    category: {
      name: "NoteBooks",
      imageURL:
        "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
];


export const formInputList: IFormInput[] = [
  {
    id: "titile",
    name: "title",
    label: "Product Titile",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];


export const colors: string[] = [
  "#ff0076",
  "#ac5478",
  "#356787",
  "#ab5797",
  "#652097",
  "#246790",
  "#cfc45d",
  "#af5252",
  "#219b21",
];

 export const categories: ICategory[] = [
   {
     id: uuid(),
     name: "NoteBooks",
     imageURL:
       "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
   {
     id: uuid(),
     name: "Cars",
     imageURL:
       "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg",
   },
   {
     id: uuid(),
     name: "pens",
     imageURL:
       "https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&w=600",
   },
   {
     id: uuid(),
     name: "Clothes",
     imageURL:
       "https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg",
   },
   {
     id: uuid(),
     name: "Computers",
     imageURL:
       "https://i5.walmartimages.com/asr/22b50342-15c5-4e52-83b8-6194af42fd16.3744fdd76aab16f2f17b18c53204c61c.jpeg",
   },
   {
     id: uuid(),
     name: "Phones",
     imageURL:
       "https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg",
   },
 ]; 