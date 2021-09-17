import { Card, Typography, Input, Button, Divider, Radio } from "antd";
import "antd/dist/antd.css";
import UsersList from "../usersList/UsersList";
import "./users.scss";

const Users = () => {
  return (
    <section className="users">
      <section className="users_left">
        <Card>
          <section className="headings">
            <Radio.Group defaultValue="a">
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
          <UsersList />
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
              <Typography className="message">
                Chimney has an appointment on 24/04/202 at 10:34. Please reply 1
                to confirm or 2 to cancel.
              </Typography>

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
          </Card>
        </section>
      </section>
    </section>
  );
};

export default Users;
