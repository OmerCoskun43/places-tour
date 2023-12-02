import "./main.scss";
import { data as datas } from "../../helper/data";
import Card from "../Cards/Cards";
const Main = () => {
  console.log(datas);
  return (
    <div className="card-container">
      {datas.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Main;
