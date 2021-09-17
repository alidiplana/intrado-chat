import { Image, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import image from "../../assets/Intrado.webp";
import "./header.scss";

const PageHeader = () => {
  return (
    <Header className="header">
      {/* <Menu.Item>Item 1</Menu.Item> */}
      <section className="name">
        <Image src={image} preview="false" />
        <Typography className="live-chat">Live Chat</Typography>
        <Typography className="broadcast">Broadcast</Typography>
      </section>

      <section className="right">
        <section className="name">
          <section className="ellipse"></section>
          <Typography className="user">Ritest Kumar</Typography>
        </section>

        <section className="help">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.75"
            height="13.75"
            viewBox="0 0 13.75 13.75"
          >
            <path
              fill="#fafafa"
              d="M14.313 7.438A6.875 6.875 0 1 1 7.438.563a6.875 6.875 0 0 1 6.875 6.875zm-6.691-4.6A3.591 3.591 0 0 0 4.391 4.6a.333.333 0 0 0 .075.451l.962.729a.333.333 0 0 0 .462-.059c.5-.628.835-.992 1.589-.992.566 0 1.267.364 1.267.914 0 .415-.343.628-.9.942-.652.366-1.515.821-1.515 1.959v.111a.333.333 0 0 0 .333.333h1.55a.333.333 0 0 0 .333-.333V8.62c0-.789 2.306-.822 2.306-2.957a3.163 3.163 0 0 0-3.231-2.827zm-.184 6.873a1.275 1.275 0 1 0 1.275 1.275 1.275 1.275 0 0 0-1.275-1.275z"
              transform="translate(-0.563 -0.563)"
            />
          </svg>
          <Typography className="help-text">Help & Support</Typography>
        </section>

        <section className="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.52"
            height="11.83"
            viewBox="0 0 13.52 11.83"
          >
            <path
              fill="#fff"
              d="M8.45 0v1.69H1.69v8.45h6.76v1.69H0V0zm1.69 3.38l3.38 2.535-3.38 2.535V6.76H3.38V5.07h6.76z"
            />
          </svg>
          <Typography className="logout-text">Logout</Typography>
        </section>
      </section>
    </Header>
  );
};

export default PageHeader;
