import { Typography } from "antd";
import "./user.scss";

const User = (props) => {
  console.log(props.user);
  return (
    <div className="user">
      <Typography className="heading"> {props.user.name}</Typography>
      <Typography className="sub-heading">{props.user.number}</Typography>
    </div>
  );
};

export default User;
