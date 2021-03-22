import React from "react";
import { Headline } from "./headline/headline";
import { GallerySection } from "./gallery/gallery";
import { StorySection } from "./story/story";
import { CocktailsSection } from "./cocktails/cocktails";
import { ContactDetails } from "./contactDetails/contactInfo";
import { ContactForm } from "./contactForm/contactForm";
import { Loading } from "./loading/loading";

export const WW = () => {
  return (
    <>
      <Headline />
      <GallerySection />
      <StorySection />
      <CocktailsSection />
      <ContactDetails />
      <ContactForm />
      <Loading />
    </>
  );
};
