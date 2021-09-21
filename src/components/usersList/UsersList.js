import { useState } from "react";
import User from "./user/User";
import "./usersList.scss";

const UsersList = (props) => {
  const [userSelect, setUserSelect] = useState();

  const handelClicked = (index) => {
    setUserSelect(index);
  };

  const filteredUsers = props.users.filter((user) => {
    console.log(props.search);
    return user.name.toUpperCase().includes(props.search.toUpperCase());
  });

  return (
    <div className="all-users">
      {filteredUsers.map((user, index) => {
        return (
          <User
            key={user.number}
            user={user}
            index={index}
            handelClicked={handelClicked}
            clicked={userSelect === index ? true : false}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
