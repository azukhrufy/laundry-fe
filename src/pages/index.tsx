export default function Home() {
  return (
    <div className="w-full h-full background mt-0">
      <div className="ml-4 pt-4">
        <div className="flex flex-row gap-2">
          <img src="/images/mainLogo.png" width={50} height={50} />
          <div className="flex flex-col gap-0 justify-center ">
            <h3 className="t text-xl font-bold leading-3">iLaundry</h3>
            <p className="t text-sm">powered by FTS</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="left flex flex-col items-center justify-center h-[100vh] text-left">
          <div className="text-left">
            <p className="font-semibold text-white">Coming Soon</p>
            <h1 className="t text-5xl font-bold font-poppins text-white">Get Notified</h1>
            <h1 className="t text-5xl font-bold font-poppins mb-4 text-white">
              When we Launch
            </h1>
            <div className="flex flex-row gap-4 w-full">
              <div className="border border-black rounded-xl h-11 w-[70%]">
                <input className="w-full h-full focus:border-0 rounded-xl px-4" />
              </div>
              <div className="bg-black rounded-2xl cursor-pointer text-white w-[30%] flex items-center justify-center">
                Send Email
              </div>
            </div>
          </div>
        </div>
        <div className="left flex flex-col items-center justify-center w-[600px]">
          <img src="https://esekolah.co.id/wp-content/uploads/2022/09/Mockup-PC-Produk-2-1536x819.png" />
        </div>
      </div>
    </div>
  );
}
