import { useState } from "react";
import "./App.css";
import Model from "./component/ui/Model";
import ProductCard from "./component/ui/ProductCard";
import { productList } from "./component/data";
import { Button } from "@headlessui/react";

function App() {
  /*-----State-----*/
  const [isOpen, setIsopen] = useState(false);

  /*-----Handler-----*/
  function closeModel(){
    setIsopen(false);
  }
  function openModel(){
    setIsopen(true);
  }

  /*-----Render-----*/
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <main className="container mx-auto">
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 rounded-md">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} closeModel={closeModel} title={"add New titel"}>
        <Button className={"bg-red-700 w-full rounded-md text-white font-bold"}>
          Submit
        </Button>
        <Button className={"bg-red-700 w-full rounded-md text-white font-bold"}>
          Cancel
        </Button>
      </Model>
    </main>
  );
}

export default App;
