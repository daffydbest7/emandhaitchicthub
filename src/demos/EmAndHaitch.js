import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/EmAndHaitchHero";
import Features from "components/features/ThreeColSimple.js";
//import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature from "components/features/EmAndHaitch";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
//import Testimonial from "components/testimonials/EmAndHaitch";
import Faq from "components/faqs/EmAndHaitch";
//import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithInputForm";
import about from "../images/emandhaitch/about.jpg";
import emandhaitch1 from "../images/emandhaitch/emandhaitch_hero1.jpg"
import data from "../images/emandhaitch/data-report-svgrepo-com.svg";
import web from "../images/emandhaitch/web-development-svgrepo-com.svg";
import database from "../images/emandhaitch/database-svgrepo-com.svg";
import videosurvey from "../images/emandhaitch/user-speak-rounded-svgrepo-com.svg";
import network from "../images/emandhaitch/networking-marketing-svgrepo-com.svg";
import why1 from "../images/emandhaitch/why1.jpg";
import ContactUs from "pages/ContactUs";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-emandhaitch text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-emandhaitch px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8 text-justify`;
  const imageCss = tw`rounded-4xl`;
  return (
    
    <AnimationRevealPage>
      <Hero
        heading={<>Creative & Innovative <HighlightedText>ICT Solutions</HighlightedText></>}
        description="Welcome to eMandHaitch ICT Hub – your gateway to cutting-edge ICT solutions! Dive into innovation with our top-tier services, including expert data analysis, bespoke web development, seamless database administration, robust networking solutions, and advanced video surveillance systems. Elevate your digital presence and efficiency with our creative solutions tailored to your needs. Join us on the forefront of technology and unlock the full potential of your business with eMandHaitch ICT Hub!"
        imageSrc={emandhaitch1}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Reach Out"
        
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
            Building on a foundation of over 5 years of experience, eMandHaitch ICT Hub has been a trusted partner in the digital realm, crafting bespoke solutions that drive success for businesses of all sizes. With a track record of innovation and excellence, our team continues to harness the power of technology to propel our clients forward in the ever-evolving digital landscape.
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
            description: "Uncover insights and make data-driven decisions with our expert analysis services.",
            url: "#contact"
          },
          {
            imageSrc: web,
            title: "Website Development",
            description: "Elevate your online presence with custom-designed websites tailored to your brand and audience.",
            url: "#contact"
          },
          {
            imageSrc: database,
            title: "Database Management",
            description: " Ensure seamless data management and security with our professional database administration services.",
            url: "#contact"
          },
          {
            imageSrc: network,
            title: "Internet Installation and Networking",
            description: " Stay connected and optimized with our reliable networking solutions for seamless communication and collaboration.",
            url: "#contact"
          },
          {
            imageSrc: videosurvey,
            title: "Video Surveillance",
            description: " Enhance security and peace of mind with our advanced video surveillance systems for comprehensive monitoring and protection.",
            url: "#contact"
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
        primaryButtonUrl="#contact"
        imageInsideDiv={false}
        imageSrc={why1}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/**
       
         <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />

       <GetStarted/>
       */}
    
      <Faq/>
      <ContactUs/>
      <Footer />
    </AnimationRevealPage>
  );
}
