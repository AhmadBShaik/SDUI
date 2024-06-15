import { Layout, Menu } from "antd";
import { useState } from "react";

const { Sider } = Layout;

const DynamicSider = ({ config }: { config: any }) => {
  const items = config as Array<{
    label: string;
    key: string;
    description: string;
  }>;

  const [selectedKeys, setSelectedKeys] = useState(["0"]);
  const contentItems = items
    ?.filter((item) => selectedKeys.includes(item.key))
    ?.map((item) => item.description);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row-reverse">
      <Sider className="">
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          onSelect={({ key }) => setSelectedKeys([key])}
          selectedKeys={selectedKeys}
        >
          {items?.map((item, index) => (
            <Menu.Item key={item.key} className="menu-item-wrap">
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <div className="w-full">{contentItems.map((item) => item)}</div>
    </div>
  );
};

export default DynamicSider;
