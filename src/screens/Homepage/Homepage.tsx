import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../../../pages";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionAboutUs from "./SectionAboutUs";
import SectionActivities from "./SectionActivities/SectionActivities";
import SectionConfessionOfFaith from "./SectionConfessionOfFaith";
import SectionContribution from "./SectionContribution";
import SectionHero from "./SectionHero";
import SectionMedias from "./SectionMedias";
import SectionOurPastors from "./SectionOurPastors";
import SectionsPhotosGallery from "./SectionPhotosGallery";
import SectionWhatsApp from "./SectionWhatsApp/index";


type HomepageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Homepage = ({
  pastors,
  social,
  instagramPosts,
  offerPix,
}: HomepageProps) => {
  return (
    <>
      <Header social={social} />
      <main>
        <SectionHero />
        <SectionConfessionOfFaith />
        <SectionAboutUs />
        <SectionActivities />
        <SectionsPhotosGallery instagramPosts={instagramPosts} />
        <SectionWhatsApp />
        <SectionOurPastors />
        <SectionMedias social={social} />
        <SectionContribution />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
