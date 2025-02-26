/* eslint-disable react/prop-types */

export default function Card({ name, image, clickHandler }) {
  return (
    <div
      className="card"
      onClick={() => {
        clickHandler(name);
      }}
    >
      <img src={image} alt="Character Image" />
      <div className="name">{name}</div>
    </div>
  );
}
