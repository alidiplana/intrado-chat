import React, { useState } from "react";
import {
  Card,
  Typography,
  Input,
  Button,
  Divider,
  Radio,
  Dropdown,
  Menu,
} from "antd";
import "antd/dist/antd.css";
import OtherStuff from "../otherStaff/OtherStuff";
import UsersList from "../usersList/UsersList";
import "./users.scss";

const Users = () => {
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

  const [buttonValue, setButtonValue] = useState("a");
  const [dummyComments, setDummyComments] = useState([
    "Chimney has an appointment on 24/04/202 at 10:34. Please reply 1  to confirm or 2 to cancel.",
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [search, setSearch] = useState("");

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          My Active
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Unclaimed
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Other Staff
        </a>
      </Menu.Item>
    </Menu>
  );

  const onChangeButton = (e) => {
    setButtonValue(e.target.value);
  };
  return (
    <section className="users">
      <section className="users_left">
        <Card>
          <section className="headings">
            <Dropdown
              className="drop-down"
              overlay={menu}
              placement="bottomCenter"
              arrow
            >
              <Button>My Active</Button>
            </Dropdown>
            <Radio.Group
              onChange={onChangeButton}
              className="radio"
              defaultValue="a"
            >
              <Radio.Button className="button" value="a">
                My Active
              </Radio.Button>
              <Radio.Button className="button" value="b">
                Unclaimed
              </Radio.Button>
              <Radio.Button className="button" value="c">
                Other Staff
              </Radio.Button>
            </Radio.Group>
          </section>
        </Card>
        <Card>
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.49"
                height="14.492"
                viewBox="0 0 14.49 14.492"
              >
                <path
                  fill="#777"
                  d="M14.293 12.53l-2.822-2.822a.679.679 0 0 0-.481-.2h-.461a5.884 5.884 0 1 0-1.019 1.021v.461a.679.679 0 0 0 .2.481l2.822 2.822a.676.676 0 0 0 .959 0l.8-.8a.682.682 0 0 0 0-.962zM5.887 9.51A3.623 3.623 0 1 1 9.51 5.887 3.621 3.621 0 0 1 5.887 9.51z"
                />
              </svg>
            }
            placeholder="Search"
          />
          {buttonValue === "a" ? (
            <UsersList search={search} users={users} />
          ) : (
            <OtherStuff />
          )}
        </Card>
      </section>
      <section className="users_right">
        <section className="card">
          <Card>
            <section className="users_right-top">
              <section className="name">
                <Typography className="heading"> Krishna Epic</Typography>
                <Typography className="sub-heading">8528897161</Typography>
              </section>
              <section className="buttons">
                <Button className="release" type="link">
                  Release Number
                </Button>
                <Divider type="vertical" />
                <Button className="release" type="link">
                  Check Details
                </Button>
              </section>
            </section>
          </Card>
        </section>
        <section className="users_right-chat">
          <Card className="chat">
            <section className="message-box">
              {dummyComments.map((comment) => {
                return (
                  <section className="single-box">
                    <Typography className="message">{comment}</Typography>
                    <section className="details">
                      <Typography className="time">09:00 AM</Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                      >
                        <circle cx="2" cy="2" r="2" fill="#9f9f9f" />
                      </svg>
                      <Typography className="status">Delivered</Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                      >
                        <path
                          fill="#00a87e"
                          d="M13.563 7.063a6.5 6.5 0 1 1-6.5-6.5 6.5 6.5 0 0 1 6.5 6.5zM6.311 10.5l4.823-4.823a.419.419 0 0 0 0-.593L10.54 4.5a.419.419 0 0 0-.593 0L6.014 8.428 4.178 6.592a.419.419 0 0 0-.593 0l-.593.593a.419.419 0 0 0 0 .593L5.718 10.5a.419.419 0 0 0 .593 0z"
                          transform="translate(-0.563 -0.563)"
                        />
                      </svg>
                    </section>
                  </section>
                );
              })}
            </section>
          </Card>
          <Card>
            <section className="text-typing">
              <Input
                className="input"
                onChange={(e) => {
                  setCurrentMessage(e.target.value);
                }}
                placeholder="Type a message …"
              />
              <Button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.1"
                  height="9.045"
                  viewBox="0 0 18.1 9.045"
                  className="icon"
                >
                  <defs></defs>
                  <g
                    id="Icon_feather-link-2"
                    transform="translate(-0.75 -9.75)"
                  >
                    <path
                      id="Path_10295"
                      d="M12.064 10.5h2.264a3.773 3.773 0 0 1 0 7.546h-2.264m-4.527 0H5.273a3.773 3.773 0 1 1 0-7.546h2.263"
                      class="cls-1"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_10296"
                      d="M12 18h7.269"
                      class="cls-1"
                      transform="translate(-5.834 -3.727)"
                    />
                  </g>
                </svg>
                Attach Link
              </Button>
              <Divider
                type="vertical"
                style={{ marginRight: "25px" }}
              ></Divider>
              <svg
                onClick={() => {
                  console.log("ali");
                  setDummyComments((oldArray) => [...oldArray, currentMessage]);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="23.989"
                height="20.562"
                viewBox="0 0 23.989 20.562"
                className="send-button"
              >
                <path
                  fill="#1e9eff"
                  d="M3.011 25.062l23.978-10.281L3.011 4.5 3 12.5l17.135 2.285L3 17.066z"
                  transform="translate(-3 -4.5)"
                />
              </svg>
              <section></section>
            </section>
          </Card>
        </section>
      </section>
    </section>
  );
};

export default Users;
