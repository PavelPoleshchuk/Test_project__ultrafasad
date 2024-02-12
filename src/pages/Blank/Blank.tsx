import Navigation from "../../components/Navigation/Navigation";

function Blank() {
  return (
    <section style={{ display: "flex" }}>
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1>Blank</h1>;
      </div>
    </section>
  );
}

export default Blank;
