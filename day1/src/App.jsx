import "./App.css";
import Card from "./components/Card";
import Newprops from "./components/Newprops";
import Ourteam from "./components/Ourteam";

function App() {
  const person = [
    "sagar",
    "rahul",
    "sachin",
    "saurabh",
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

      <Newprops name="sagar" age={10} isMarried={true} person={person} />
    </>
  );
}

export default App;
