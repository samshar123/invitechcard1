import video1 from "./videow.mp4"
import "./video.css";

const Video = () => {
  return (
    <div className="video" id="video">
      <div className="videoinner">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;