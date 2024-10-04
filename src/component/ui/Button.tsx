import { ButtonHTMLAttributes, memo, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className:string;
    width?:"w-full"|"w-fit";
}
const Button = ({children,width='w-full',className,...rest}:IProps)=>{
  return(
    <button className={`${className} ${width} w-full rounded-md text-white font-bold`} {...rest}>
        {children}
    </button>
  )
}
export default memo(Button);