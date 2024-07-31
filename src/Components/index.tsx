import "./style.css"
import imgtop from "../../public/Img/namelogo.png"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const index = () => {
  return (
    <div className="indexpage" id="indexpage">
        <div className="imgdiv">
            <img className="namelgoimg" src={imgtop} alt=""  />
            <h6 className="datesub">17.08.2024</h6>
            <h4 className="prayer1">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h4>
            <h5 className="wishesfirst">We, Mr. Muhammed Ilyas & Mrs. Shareena K.K, joyfully invite you to join us the nikkah of our daughter.</h5>
            <h1 className="groombride">Aysha Diya <br /> & <br />Athil Rahman</h1>
            <h5 className="sonof">(S/o Mr. Noushad T.P & Mrs. Shahina) </h5>
            <div className="datediv">
                <div className="dateday">SATURDAY</div>
                <div className="datenum">AUG | 17 | 2024</div>
                <div className="datearabic">SAFAR 12</div>
            </div>
            <div className="wedfooter">
                <h6>إِنْ شَاءَ ٱللَّٰهُ</h6>
                <h4>Nikkah at 11:00 am</h4>
                <h5>At Ambience Auditorium, Feroke, Calicut</h5>
               <a className="arrowdown" href="/#footer"><MdKeyboardDoubleArrowDown/></a> 

            </div>
           

        </div>
      
    </div>
  )
}

export default index
