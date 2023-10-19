import "./../styles/SliderImg.css";

export default function SliderImg(props) {
  return (
    <div
      className={`carousel-item ${props.active ? "active" : ""}`}
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    ></div>
  );
}
