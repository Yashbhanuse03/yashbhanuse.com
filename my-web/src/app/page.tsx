import Image from "next/image";
import navbar from "./components/ui/navbar";
import Container from "./components/container";
import Navbar from "./components/ui/navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
     <Container className="">
     <Navbar  />
      <h1> Hi I am Yash</h1>
      <p> I am a software developer who loves to build websites and apps efficiently stylishly and responsive</p>
    
     </Container>
    </div>
  );
}
