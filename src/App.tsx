import BackgroundImage from "/assets/bg.png";

function App() {
  const width = window.innerWidth;

  return (
    <div
      className="app"
      style={{
        width: "100vw",
        height: "100svh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Misspiece",
      }}
    >
      <img
        style={{
          width: `${width < 768 ? "100%" : ""}`,
        }}
        src="/assets/aa.png"
      />
    </div>
  );
}

export default App;
