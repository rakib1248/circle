import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <>
      <div className="admin--item">
        <h4 className="admin--status">{props.info.status}</h4>
        <img className="admin--image" src={props.info.Photo} alt="" />
        <h4 className="admin--name">{props.info.name}</h4>
        <div>
          <Link to={`/admin/${props.info.id}`} className="admin--btn">
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
