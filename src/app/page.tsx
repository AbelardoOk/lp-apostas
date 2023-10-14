import Iframe from "react-iframe";

export default function Home() {
  return (
    <main>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute -ml-[200px] -mt-[250px] h-[500px] w-[400px] rounded-full bg-red-600 opacity-[0.35] blur-[400px]"></div>
        <div className="absolute bottom-0 right-0 -mb-[90px] -mr-[100px] h-[300px] w-[200px] rounded-full bg-red-600 opacity-40 blur-[400px]"></div>
      </div>

      <section className="bg-grain flex h-screen w-screen flex-col justify-around bg-cover text-center">
        <h1 className="font-alt text-5xl font-extrabold text-[#FF3131]">
          Logo®
        </h1>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-normal">
            Assista até o final do vídeo <br /> se quiser{" "}
            <span className="font-bold text-[#FF3131]">
              ter acesso á uma nova vida!
            </span>
          </h1>

          <Iframe
            url="https://www.youtube.com/embed/lJIrF4YjHfQ?si=3DimX12KtxsK8qqv"
            width="920"
            height="517.5"
            display="block"
            position="relative"
          />
        </div>

        <div></div>
      </section>
    </main>
  );
}
