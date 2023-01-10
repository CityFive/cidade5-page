import * as React from "react";
import SectionAboutUs from "./SectionAboutUs";
import SectionHero from "./SectionHero";
import SectionConfessionOfFaith from "./SectionConfessionOfFaith";
import SectionOurPastors from "./SectionOurPastors";
import SectionContribution from "./SectionContribution";
import SectionsPhotosGallery from "./SectionPhotosGallery";
import SectionSpotifyPlaylist from "./SectionSpotifyPlaylist";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../../../pages";

type HomepageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Homepage = ({ pastors, social, instagramPosts, offerPix }: HomepageProps) => {
  return (
    <>
      <Header social={social} />
      <main>
        <SectionHero />
        <SectionConfessionOfFaith />
        <SectionAboutUs />
        <SectionOurPastors pastors={pastors} />
        <SectionContribution offerPix={offerPix} />
        <SectionsPhotosGallery instagramPosts={instagramPosts} />
        <SectionSpotifyPlaylist social={social} />
      </main>
      <Footer social={social} offerPix={offerPix} />
    </>
  );
};

export default Homepage;
