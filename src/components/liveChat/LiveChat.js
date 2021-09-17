import React from "react";
import { Card, Button, Typography } from "antd";
import "antd/dist/antd.css";
import "./liveChat.scss";

const { Title } = Typography;

const LiveChat = () => {
  return (
    <Card className="card">
      <section className="card-container">
        <Title className="card-title" style={{ margin: "unset" }} level={2}>
          Live Chat
        </Title>

        <section className="button-group">
          <Button className="lookup-button">Patient Lookup</Button>

          <Button className="page-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.271"
              height="21.979"
              viewBox="0 0 17.271 21.979"
            >
              <path
                fill="#1e9eff"
                d="M33.478 42.312H25.2a.73.73 0 1 1 0-1.46h8.275a.73.73 0 1 1 0 1.46zm.731 2.7a.731.731 0 0 0-.731-.73H25.2a.73.73 0 1 0 0 1.46h8.275a.731.731 0 0 0 .731-.73zm0 3.43a.731.731 0 0 0-.731-.73H25.2a.73.73 0 1 0 0 1.46h8.275a.731.731 0 0 0 .734-.729zm3.742 8.271V37.605a1.437 1.437 0 0 0-1.426-1.435H22.118a1.437 1.437 0 0 0-1.438 1.435v19.109a1.437 1.437 0 0 0 1.438 1.435h14.407a1.437 1.437 0 0 0 1.426-1.435zm-1.463 0H22.143V37.63h14.37z"
                transform="translate(-20.68 -36.17)"
              />
            </svg>
          </Button>
        </section>
      </section>
    </Card>
  );
};

export default LiveChat;
