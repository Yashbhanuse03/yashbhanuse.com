import Image from "next/image";
import navbar from "./components/ui/navbar";
import Container from "./components/container";
import Navbar from "./components/ui/navbar";


export default function Home() {
  return (
    <div className="">
     <Container className=" min-h-screen">
      <h1> Hi I am Yash</h1>
      <p> I am a software </p>
      <Navbar  />
     </Container>
    </div>
  );
}
