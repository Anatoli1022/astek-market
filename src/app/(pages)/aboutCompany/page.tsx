import Hero from "@/app/components/pages/aboutCompany/hero/Hero";
import Application from "@/app/components/shared/application/Application";
import TypesOfServices from "@/app/components/shared/typesOfServices/TypesOfServices";

const page = () => {
  return (
    <>
      <Hero />
      <TypesOfServices />
      <Application />
    </>
  );
};

export default page;
