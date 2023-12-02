import "./cards.scss";
const Card = ({ data }) => {
  // console.log(data);
  const { id, image, title, desc } = data;
  return (
    <div className="cards">
      <div className="title">
        <h3> {title} </h3>
      </div>
      <img src={image} alt={id} />
      <div className="card-over">
        <p> {desc} </p>
      </div>
    </div>
  );
};

export default Card;
