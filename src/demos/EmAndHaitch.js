import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/EmAndHaitchHero";
import Features from "components/features/ThreeColSimple.js";
//import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature from "components/features/EmAndHaitch";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Testimonial from "components/testimonials/EmAndHaitch";
import Faq from "components/faqs/EmAndHaitch";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/EmAndHaitch";
import about from "../images/emandhaitch/about.jpg";
import emandhaitch1 from "../images/emandhaitch/emandhaitch_hero1.jpg"
import data from "../images/emandhaitch/data-report-svgrepo-com.svg";
import web from "../images/emandhaitch/web-development-svgrepo-com.svg";
import database from "../images/emandhaitch/database-svgrepo-com.svg";
import videosurvey from "../images/emandhaitch/user-speak-rounded-svgrepo-com.svg";
import network from "../images/emandhaitch/networking-marketing-svgrepo-com.svg";
import why1 from "../images/emandhaitch/why1.jpg";
import why2 from "../images/emandhaitch/why2.jpg";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-emandhaitch text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-emandhaitch px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Creative & Innovative <HighlightedText>ICT Solutions</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={emandhaitch1}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Reach Out"
        watchVideoButtonText="Meet The CEO"
      />
      <MainFeature 
        subheading={<Subheading>Established Since 2018</Subheading>}
        heading={
          <>
            Digital Solution Provider for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={
          about
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <Features 
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: data,
            title: "Data Analysis",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#"
          },
          {
            imageSrc: web,
            title: "Website Development",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#"
          },
          {
            imageSrc: database,
            title: "Database Management",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#"
          },
          {
            imageSrc: network,
            title: "Internet Installation and Networking",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#"
          },
          {
            imageSrc: videosurvey,
            title: "Video Surveillance",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Projects",
            value: "100",
          },
          {
            key: "Customers",
            value: "200+"
          },
          {
            key: "Testimonials",
            value: "200+"
          }
        ]}
        primaryButtonText="Contact Us"
        primaryButtonUrl="#"
        imageInsideDiv={false}
        imageSrc={why1}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <Faq/>
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
