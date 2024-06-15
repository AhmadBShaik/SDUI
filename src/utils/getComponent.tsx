import DynamicTabs from "@/components/DynamicTabs";

export const getComponent = (config: Record<string, unknown>) => {
  switch (config.component) {
    case "tabs":
      return <DynamicTabs config={config} />;

    default:
      return <>Component: {config.component} not found</>;
  }
};
