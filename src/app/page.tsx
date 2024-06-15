import { getComponent } from "@/utils/getComponent";
import { Suspense } from "react";
export const revalidate = 0;
const fetchHomePageData = async () => {
  const dataResponse = await fetch(
    "https://api.npoint.io/f9acfa92f2bff78024fe"
  );
  const data = await dataResponse.json();
  return data;
};

const Content = async () => {
  const uiConfig = await fetchHomePageData();
  return getComponent(uiConfig);
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Suspense fallback={<>Loading...</>}>
        <Content />
      </Suspense>
    </main>
  );
}
