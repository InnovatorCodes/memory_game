/* eslint-disable react/prop-types */
import friends_logo from "./assets/friends_logo.png";

export default function Card({ name, image, onClick, flipped }) {
  return (
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
  );
}
