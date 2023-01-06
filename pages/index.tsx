import dynamic from "next/dynamic";

const DynamicCircle = dynamic(() => import("../components/Circle"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main>
        <div>
          <DynamicCircle />
        </div>
      </main>
    </>
  );
}
