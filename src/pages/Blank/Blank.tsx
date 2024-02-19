import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

function Blank({title}: {title: string}) {
  return (
    <>
      <Header />
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
          <h1>{title}</h1>;
        </div>
      </section>
    </>
  );
}

export default Blank;
