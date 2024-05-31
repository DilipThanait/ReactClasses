import "./App.css";
import Card from "./components/Card";
import DestructClass2 from "./components/DestructClass2";
import Destructuring from "./components/Destructuring";
import Event from "./components/Event";

import { Exportsersdsd, Exportserdsd2 } from "./components/Exportsersdsd";
import { Footer, Footer2 } from "./components/Footer";
import Newprops from "./components/Newprops";
import Ourteam from "./components/Ourteam";
import { PropsDestruc2, PropsDestruc } from "./components/PropsDestruc";

function App() {
  const ktaharukoname = [
    "sagar",
    "rahul",
    "sachin",
    "sanjok",
    "sourav",
    "kunal",
    "raj",
  ];

  return (
    <>
      <Card
        name="sagar regmi"
        profilepic="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        description="I am a good boy i am from bharatpur 10"
      />

      <Ourteam />

      <Newprops name="sagar" age="10" />

      <Footer
        name="sagar"
        email="sagar@gm.com"
        contact={1234567890}
        age={10222}
        isMarried={true}
        ktaharu={ktaharukoname}
      />
      <Footer2 />
      <Destructuring name="kumar" age={10} />

      <PropsDestruc email="2057" password="sagarsdsdfsd" />
      <PropsDestruc2 />
      <Event name="sanjok" />

      <DestructClass2
        name="rolls royce"
        model="2022"
        brand="rollsroyce"
        boys={ktaharukoname}
      />

      <Exportsersdsd />
      <Exportserdsd2 />
    </>
  );
}

export default App;
