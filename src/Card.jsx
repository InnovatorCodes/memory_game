/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import friends_logo from "./assets/friends_logo.png";

export default function Card({ name, image, onClick, flipped }) {
  return (
    <Tilt
      glareEnable={true}
      tiltReverse={true}
      glareReverse={true}
      glareMaxOpacity={0.4}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
    >
      <div className="card-container">
        <div
          className={`card ${flipped ? "flipped" : ""}`}
          onClick={
            flipped
              ? null
              : () => {
                  onClick(name);
                }
          }
        >
          <div className="card-face card-front">
            <img src={image} alt="Character Image" />
            <div className="name">{name}</div>
          </div>
          <div className="card-face card-back">
            <img src={friends_logo} alt="" />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
