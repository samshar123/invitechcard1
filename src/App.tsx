import { useState,useEffect } from "react"
import { BsEmojiSmile } from "react-icons/bs";
import Index from "../src/Components/index"
import Location from "../src/Components/Location/location"
import Footer from "../src/Components/Footer/footer"
import Loader from "../src/Components/Loader/loader"
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> 
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();
function App() {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);
 
  

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    
    };


    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (screenWidth > 750) {
    return(
     <div className="largescreenmesage">
      <BsEmojiSmile className="messageicon" />
      <h1>Sorry friend, <br /> this is a mobile phone only Optimaized App</h1> 
      <h4>Kindly use your mobile phone for access your Invitech card</h4>
     </div>
    )
    
   }
 
  return (
    <>
      <div className="app">
     
        
      {screenLoading ? (
        <Loader />
      ) : ( <div>
          
        <Index></Index>
        <Location></Location>
        <Footer></Footer>
        </div> )}
       
      
        <script src="bower_components/aos/dist/aos.js"></script>
      </div>
    </>
  )
}

export default App
