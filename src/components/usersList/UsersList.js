import { useState } from "react";
import User from "./user/User";

const users = [
  { name: "Laurel", number: "8528897161" },
  { name: "Smith", number: "1528032162" },
  { name: "Kishan", number: "3528097163" },
  { name: "Asparia", number: "2520597164" },
  { name: "John", number: "4528597165" },
  { name: "Chem", number: "9528897266" },
  { name: "Alice", number: "3528897166" },
  { name: "Elliot", number: "3528094806" },
];

const UsersList = (props) => {


  const filteredUsers = users.filter((user) => {
    console.log(props.search)
    return user.name.includes(props.search);
  });


  return (
    <div>
      {filteredUsers.map((user) => {
        return <User key={user.number} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
