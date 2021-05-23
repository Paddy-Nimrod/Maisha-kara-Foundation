import React, { useState, setState } from "react";
import img from "../../assets/giving-image.PNG";
import image from "../../assets/giving-page.png";
import Slideshow from '../../components/image-slider/image-slider.component';

import {
  ImageContainer,
  HomeContainer,
  TableContainer,
  HomeHeader,
  ButtonPrimary,
  ButtonSecondary,
  ButtonContainer,
  InputContainer,
  TableHeader,
  HorizontalLine,
  Input,
  ParagraphContainer,
  ValueButton,
  PaymentButton,
  GivingContainer,
  GivingImageContainer,
  TableHeader2,
  GivingPassage,
  FootConatiner
} from "./giving.style";

const GivingComponent = () => {
  const handleClick = () => {
    alert("hellow...");
  };

  return (
    <HomeContainer>
      <HorizontalLine />
      <ImageContainer>
        <img src={img} alt="" width="100%" />
      </ImageContainer>
      <TableContainer>
        <HomeHeader>Give Education</HomeHeader>
        <ButtonContainer>
          <ButtonPrimary onClick={handleClick}>Make a one-time</ButtonPrimary>
          <ButtonSecondary>Monthly</ButtonSecondary>
        </ButtonContainer>
        <InputContainer>
          <br />
          <br />
          <TableHeader>
            A quality education changes life and starts with you
          </TableHeader>
          <ParagraphContainer>Enter an amount to give</ParagraphContainer>
          <Input placeholder="$40" />

          <ValueButton>$25</ValueButton>
          <ValueButton>$40</ValueButton>
          <ValueButton>$90</ValueButton>
          <ValueButton>$180</ValueButton>

          <br />

          <PaymentButton primary onClick={handleClick}>
            Credit Card
          </PaymentButton>
          <PaymentButton>PayPal</PaymentButton>
        </InputContainer>
      </TableContainer>
      <HorizontalLine />
      <GivingContainer>
        <GivingImageContainer>
          {/* <img src={image} alt="giving" width="100%"  height="500vh"/>
           */}
           <Slideshow />
        </GivingImageContainer>
        <GivingPassage>
          <h2>
            Facilitated the forum of Special Head Teachers Association –Kenya
            (SSHAK).
          </h2>
          <p>
            SSHAK is a national association of head teachers of Special schools
            and teachers from special units. SSHAK’s clear mandate is to lobby
            for the agenda of learners with Special needs and monitor government
            policy implementation in line with Education Act 2013 Chapter 6.
            SSHAK’s current focus as mentioned in the meeting by the Chairman Mr
            Arthur Imjenga was working with the government on securing special
            needs funds and support within public primary and secondary school
            at local level.He also added that it was important that the stated
            grants for special units are
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus
            eros, vehicula vitae nulla in, cursus vehicula ipsum. Phasellus
            tempus mauris laoreet, sodales ante a, tempor odio. Integer at enim
            ut quam tempor faucibus. Cras a purus libero. In vitae metus varius,
            rutrum nisl ac, ullamcorper urna. Etiam vitae eros sem. Integer
            volutpat odio at ante laoreet pharetra. Phasellus vitae lectus
            gravida arcu hendrerit commodo quis a nunc. Nunc quis finibus mi.
            Duis vitae nibh turpis. Aenean venenatis velit sem, id accumsan
            justo lacinia ac.
          </p>
        </GivingPassage>
      </GivingContainer>
      <FootConatiner>
        <TableHeader2 lower>Evidence to</TableHeader2>
        <TableHeader2 lower>Action Approach</TableHeader2>
      </FootConatiner>
    </HomeContainer>
  );
};

export default GivingComponent;
