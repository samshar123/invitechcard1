import "./location.css"
import loc from "../../../public/Img/locimage.png"
const location = () => {
  return (
    <div className="location" id="location">
        <a href="https://www.google.com/maps/dir/11.2336758,76.0394119/AMBIENCE+Auditorium,+Kadalundi+Road,+Kashayapadi,+Feroke,+Kozhikode,+Kerala+673631/@11.1944165,75.8461785,11.82z/data=!4m17!1m7!3m6!1s0x3ba6518188ab066d:0xcd7e6effe460cb2!2sAMBIENCE+Auditorium!8m2!3d11.1618087!4d75.844817!16s%2Fg%2F11h0mnzkrt!4m8!1m1!4e1!1m5!1m1!1s0x3ba6518188ab066d:0xcd7e6effe460cb2!2m2!1d75.844817!2d11.1618087?entry=ttu">
        <div className='iframediv'>
          <img className="locationimg" src={loc} alt="" />
          <p>Click here for event location</p>
      

        </div>
        
        </a>
           
    </div>
  )
}

export default location
