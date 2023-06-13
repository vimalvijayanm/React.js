import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css"
import Usestate from "./Usestate";


function App(){
  
   return(
    <div className="App"> {/*css class to align center*/}
          <Header/>
          {/* <Content/> */}
          <Footer/>
          <Usestate/>
    </div>
   );


}

export default App;