import Hero from "./components/pages/home/hero/Hero";
import Application from "./components/shared/application/Application";
import Approach from "./components/shared/approach/Approach";
import TypesOfServices from "./components/shared/typesOfServices/TypesOfServices";

export default function Home() {
  return (
    <>
      <Hero />
      <Approach />
      <TypesOfServices />
      <Application />
    </>
  );
}
