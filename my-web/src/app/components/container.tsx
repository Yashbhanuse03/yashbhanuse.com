// import { cn } from "@/lib/utils";
const container = ({children, className} : {
    className? : string ,
    children : React.ReactNode,
}) => {
  return (
    <div className= "max-w-4xl mx-auto bg-dark-white border" >{children}</div>
  )
}

export default container