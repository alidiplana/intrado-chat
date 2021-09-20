import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./otherStuff.scss";

const OtherStuff = () => {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <section className="other-stuff">
      <Dropdown className="button" overlay={menu}>
        <Button>
          Nextel User <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Epic User <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Amber Gilbert <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Harry Bailey <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Patricia Hawkins <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Louis Palmer <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown className="button" overlay={menu}>
        <Button>
          Johnny Rivera <DownOutlined />
        </Button>
      </Dropdown>
    </section>
  );
};

export default OtherStuff;
