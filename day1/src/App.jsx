import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Newprops from "./components/Newprops";
import Ourteam from "./components/Ourteam";

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
    </>
  );
}

export default App;
