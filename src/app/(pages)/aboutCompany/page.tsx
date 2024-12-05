// import Brand from "@/app/components/pages/aboutCompany/brand/Brand";
import Hero from "@/app/components/pages/aboutCompany/hero/Hero";
import HowWeWork from "@/app/components/pages/aboutCompany/howWeWork/HowWeWork";
import Application from "@/app/components/shared/application/Application";
import Approach from "@/app/components/shared/approach/Approach";
import TypesOfServices from "@/app/components/shared/typesOfServices/TypesOfServices";

const page = () => {
  return (
    <>
      <Hero />
      {/* <Brand /> */}
      <HowWeWork />
      <Approach />
      <TypesOfServices />
      <Application />
    </>
  );
};

export default page;
