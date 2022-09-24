import { Clients } from "../modules/Clients";
import { Details } from "../modules/Details";
import { Footer } from "../modules/Footer";
import { Form } from "../modules/Form";
import { MainHero } from "../modules/MainHero";
import { Pricing } from "../modules/Pricing";
import { Showcase } from "../modules/Showcase";

export const Home = () => {
  return (
    <>
      <MainHero />
			<Showcase />
			<Details />
			<Pricing />
      <Clients />
			<Form />
			<Footer />
    </>
  );
};
