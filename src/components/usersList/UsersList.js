import User from "./user/User";

const UsersList = () => {
  const users = [
    { name: "Krishna", number: "8528897161" },
    { name: "Krishna", number: "1528032162" },
    { name: "Krishna", number: "3528097163" },
    { name: "Krishna", number: "2520597164" },
    { name: "Krishna", number: "4528597165" },
    { name: "Krishna", number: "9528897166" },
  ];

  return (
    <div>
      {users.map((user) => {
        console.log(user);
        return <User key={user.number} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
