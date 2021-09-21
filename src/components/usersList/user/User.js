import { Typography } from "antd";
import "./user.scss";

const User = (props) => {
  return (
    <div
      onClick={() => props.handelClicked(props.index)}
      className={props.clicked ? "clicked" : "user"}
    >
      <Typography className="heading"> {props.user.name}</Typography>
      <Typography className="sub-heading">{props.user.number}</Typography>
    </div>
  );
};

export default User;
