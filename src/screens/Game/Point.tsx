export default function Point() {
  const containerStyle = {
    backgroundImage: "url('../src/assets/play.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center justify-center text-sm"
    >
      <h1
        className="font-semibold"
        style={{ color: "#FFF", position: "fixed", top: "339px" }}
      >
        Số nước lật :20 <br /> Thời gian: 25s
      </h1>
      <h1 className="mt-2 font-semibold" style={{ color: "#FFF" }}>
        Điểm của bạn là :
      </h1>
      <p className="text-3xl mt-2 font-semibold" style={{ color: "#FFF" }}>
        1000 điểm
      </p>
      <div
        className="flex flex-row "
        style={{ position: "fixed", top: "470px" }}
      >
        <div className="basis-2/4 ">
          <img src="../src/assets/logopoint.png" className="w-[190px] ml-5" />
        </div>
        <div className="basis-2/4">
          <img src="../src/assets/logopointr.png" className="w-[130px] ml-5" />
        </div>
      </div>
      <div className="w-[300px]" style={{ position: "fixed", top: "650px" }}>
        <img src="../src/assets/buttonpoint.png" alt="" />
      </div>
      {/* <div
        id="win-message"
        style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.8); padding: 10px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); font-size: 24px; font-weight: bold; text-align: center;"
      ></div> */}
    </div>
  );
}
