import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/EmAndHaitch";
import ContactDetails from "components/cards/EmAndHaitch";

const Address = tw.div`leading-relaxed `;
const AddressLine = tw.div`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
    
      <ContactUsForm id="contact"/>
     
    
    </AnimationRevealPage>
  );
};
