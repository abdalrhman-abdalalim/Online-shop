interface IProps{
    imgSrc:string;
    alt:string;
    className:string;
}
const Image = ({imgSrc,alt,className}:IProps)=>{
  return(
    <img 
        className={className}
        alt={alt}
        src={imgSrc}
    />
  )
}
export default Image