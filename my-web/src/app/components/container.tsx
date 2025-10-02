// import { cn } from "@/app/lib/utiles";
const container = ({children, className} : {
    className? : string ,
    children : React.ReactNode,
}) => {
  return (
    <div className= {"max-w-4xl mx-auto dark:bg-dark-black bg-white  border-2 border-gray-200 rounded-lg min-h-screen p-4" } >{children}</div>
  )
}

export default container
