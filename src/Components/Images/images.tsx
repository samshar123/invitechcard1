
import img2 from "../../../public/Img/2.jpg"
import img3 from "../../../public/Img/3.jpg"
import img4 from "../../../public/Img/4.jpg"
import img5 from "../../../public/Img/5.jpg"
import img6 from "../../../public/Img/6.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./images.css"

const images = () => {
  return (
    <div className='images' id='images'>
        <div className="imagesinner">
            <div className="row">
                <div className="col-6">
                    <img src={img3} alt="" />
                </div>
                <div className="col-6">
                <img src={img2} alt="" />
                </div>
                <div className="col-6">
                <img src={img5} alt="" />
                </div>
                <div className="col-6">
                <img src={img4} alt="" />
                </div>
                <div className="col-6">
                <img src={img5} alt="" />
                </div>
                <div className="col-6">
                <img src={img6} alt="" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default images
