import { Typography } from "antd";
import "./user.scss";

const User = (props) => {
  return (
    <div className="user">
      <Typography className="heading"> {props.user.name}</Typography>
      <Typography className="sub-heading">{props.user.number}</Typography>
    </div>
  );
};

export default User;
