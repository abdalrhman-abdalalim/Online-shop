import { useState, ReactNode,Fragment } from "react";
import { Dialog, Description, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import Button from "./Button";

interface IProps {
    isOpen : boolean;
    closeModel: ()=>void;
    title?:string;
    children:ReactNode;
}


const Model = ({isOpen,closeModel,title,children}: IProps) => {
    
    


  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModel}
        transition
        className=" flex-col fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 backdrop-blur-md"
      >
        <DialogPanel className="max-w-lg space-y-4 bg-white p-4 rounded-md shadow-md w-96">
          {title && (
            <DialogTitle className="font-bold text-gray-700 text-center text-3xl ">
              {title}
            </DialogTitle>
          )}
          <div className="flex gap-4 justify-center p-5">{children}</div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default Model;
