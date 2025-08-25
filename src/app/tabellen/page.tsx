import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export default function Tabellen() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <iframe
          style={{ width: "100%", height: "800px", overflow: "visible" }}
          src="https://services.tennis.de/extern/tennisdeteamsearch.zul?verband=BTV&verein=04137&linkfarbe=20aebd"
          scrolling="yes"
        ></iframe>
      </div>
      <Footer></Footer>
    </>
  );
}
