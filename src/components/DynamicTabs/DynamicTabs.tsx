"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import parse from "html-react-parser";
import DynamicSider from "../DynamicSider";

const DynamicTabs = ({ config }: { config: any }) => {
  const [selectedTab, setSelctedTab] = useState(config.items?.[0]?.key);
  return (
    <Tabs
      {...config.props}
      className="w-full"
      onChange={(value) => {
        setSelctedTab(value);
      }}
      activeKey={selectedTab}
      items={config?.props?.items?.map((item: any) => ({
        ...item.value,
        children: (
          <div className="flex flex-col">
            <div>{parse(item?.value?.children || "")}</div>
            {item?.config?.sider ? (
              <DynamicSider config={item.config.sider} />
            ) : null}
          </div>
        ),
      }))}
    ></Tabs>
  );
};

export default DynamicTabs;
