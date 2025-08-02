import { client } from "@/sanity/client";
import { heroQuery } from "@/sanity/queries";
import { Header } from "../components/Header";

type Hero = {
  title: string;
  h1: string;
};

export default async function Home() {
  const hero: Hero = await client.fetch(heroQuery);

  return (
    <>
    <Header />
    <div className="text-5xl italic">Hallo</div>
    </>
  );
}
