import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      type="text"
      {...rest}
      className="border-2 border-gray-300 shadow-md rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-9 w-full text-md p-4"
    />
  );
};
export default Input;
