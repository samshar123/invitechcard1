import "./style.css";

import imgtop from "../../public/Img/namelogo.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const index = () => {
  function addToCalendar() {
    var event = {
        title: 'Aysha Diya And Athil Rahman\'s Wedding',
        location: 'Ambience Auditorium, Feroke, Calicut',
        startTime: new Date('2024-08-17T11:00:00'),
        endTime: new Date('2024-08-17T14:00:00')
    };

    var calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
        encodeURIComponent(event.title) +
        '&dates=' + event.startTime.toISOString().replace(/-|:|\.\d+/g, '') +
        '/' + event.endTime.toISOString().replace(/-|:|\.\d+/g, '') +
        '&location=' + encodeURIComponent(event.location) +
        '&pli=1&uid=&sf=true&output=xml';

    window.open(calendarUrl);
}

  return (
    <div className="indexpage" id="indexpage">
      <div data-aos="fade-up" className="imgdiv">
        <img className="namelgoimg" src={imgtop} alt="" />

        <h6 className="datesub">17.08.2024</h6>
        <h4 className="typing-text prayer1">
          {" "}
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'
        </h4>
        <h5 className="wishesfirst">
          We, Mr. Muhammed Ilyas & Mrs. Shareena K.K, joyfully invite you to
          join us the nikkah of our daughter.
        </h5>
        <h1 className="groombride">
          Aysha Diya <br /> & <br />
          Athil Rahman
        </h1>
        <h5 className="sonof">(S/o Mr. Noushad T.P & Mrs. Shahina) </h5>
        <div className="datediv"   onClick={() => addToCalendar()} >
          <div className="dateday">SATURDAY</div>
          <div className="datenum">AUG | 17 | 2024</div>
          <div className="datearabic">SAFAR 12</div>
        </div>
        <div className="wedfooter">
          <h6>إِنْ شَاءَ ٱللَّٰهُ</h6>
          <h4>Nikkah at 11:00 am</h4>
          <h5>At Ambience Auditorium, Feroke, Calicut</h5>
          <a className="arrowdown" href="/#footer">
            <MdKeyboardDoubleArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
