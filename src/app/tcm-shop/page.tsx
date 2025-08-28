import Footer from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export default function TCMShop() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header></Header>
      <div className="container">
        <p className="text-center my-15">
          Wir arbeiten gerade daran unseren TCM-Shop fertig zu stellen. Nicht
          mehr lange 😊
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}
