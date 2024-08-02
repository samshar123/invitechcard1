import "./location.css"
import loc from "../../../public/Img/locimage2.png"
const location = () => {
  return (
    <div data-aos="fade-up" className="location" id="location">
        <a href="https://www.google.com/maps/place/AMBIENCE+Auditorium/@11.1618087,75.8422421,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6518188ab066d:0xcd7e6effe460cb2!8m2!3d11.1618087!4d75.844817!16s%2Fg%2F11h0mnzkrt?entry=ttu">
        <div className='iframediv'>
          <img className="locationimg" src={loc} alt="" />
          <p>Click here for event location</p>
      

        </div>
        
        </a>
           
    </div>
  )
}

export default location
