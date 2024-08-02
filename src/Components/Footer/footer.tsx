import { FaHeart } from "react-icons/fa";
import "./footer.css"
const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer__container'>
            <hr  className="linefootertop"/>
            <h6>Made With <span className="hearticon"><FaHeart /></span> </h6> 
            <a href="https://www.instagram.com/invitech.cards/"><h4>Invitech cards</h4></a>

            <a href="https://www.teamdotco.com/"><h5>By <span className="dotcofootr">team dotco innovations</span> </h5></a>
            <hr  className="linefootertop"/>

        </div>
      
    </div>
  )
}

export default footer
