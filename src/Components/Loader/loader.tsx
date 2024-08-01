import "./loader.css"
import imgload from "../../../public/Img/imgloader2.png"

const loader = () => {
  return (
    <div className="loader">
      

<div id="hearts-alpaca" className="hearts">
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
 <div className="heart"></div>
</div>


      <div className="loadercenter">
        <div className="loaderimg">
          <img className="imgload" src={imgload} alt=""  />

        </div>
        <div className="loadercontent">
          <h5>In The Name Of Allah..</h5>

        </div>

      </div>
    </div>
  )
}

export default loader
