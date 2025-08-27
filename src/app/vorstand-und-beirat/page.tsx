import { Header } from "@/src/components/layout/Header";
import Image from "next/image";

export default function VorstandUndBeirat() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-medium text-center my-4">
          Organigramm
        </h2>
        <Image
          src="/images/Organigramm-groß.webp"
          alt="TC-Memmingen von oben"
          width={2000}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
