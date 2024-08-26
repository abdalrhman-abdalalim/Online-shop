interface IProps{
msg:string;
}
const ErrorMsg = ({msg}:IProps)=>{
  return(
   msg&& <span className="text-red-600 font-bold text-xs block w-full">{msg}</span>
  )
}
export default ErrorMsg