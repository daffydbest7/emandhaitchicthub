import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/EmAndHaitch";
import ContactDetails from "components/cards/EmAndHaitch";

const Address = tw.div`leading-relaxed justify-center`;
const AddressLine = tw.div`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
    
      <ContactUsForm id="contact"/>
      <ContactDetails
        cards={[
          {
            
            description: (
              <>
                <Address>
                  <AddressLine>No 15, Sir Churchill Williams Street, Okaka</AddressLine>
                  <AddressLine>Yenagoa, Bayelsa State, Nigeria. 569101</AddressLine>
                </Address>
                <Email>info@emandhaitchicthub.ng</Email>
                <Phone>+234(906)850-9555 <br/> +234(705)847-0486</Phone>
              </>
            )
          },
          
        ]}
      />
    
    </AnimationRevealPage>
  );
};
