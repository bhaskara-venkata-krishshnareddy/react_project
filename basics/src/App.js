import Home from "./Home";

// import Header from "./Header";

import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";
function App() {
  let name = "bhasi"
  return (
    <div>
    <h1>hello from  react project </h1>
    {/* <Header/> */}
    {/* <Home name = {name}  age ={22}/>
    <Contact />
    <About /> */}
    <Greeting name = {'one3'}/>
    <Greeting name = {'one2'}/>
    <Greeting name = {'one1'}/>
    </div>
  
  ); 
}
export default App;
