import React from "react";

import FadeExample from "../../components/main-slider/home.slider";

import {
  HomeContainer,
  LeftContainer,
  HeaderContainer,
  NewContainer,
  RightContainer,
  Input,
  TextArea,
  Button,
  SmallHeader,
  SmallHead,
  Paragraph,
  ContainerHeader,
  MiddleContainer,
  HorizontalLine,
  HeaderSmall,
  LegContainer,
  BaseContainer,
  BaseHeader,
  BaseLine,
  BaseInput,
  BaseContainerBox,
} from "./home.style";

const HomePage = () => {
  return (
    <div>
      <FadeExample />

      <HomeContainer>
        <LeftContainer>
          <HeaderContainer>
            Annual National Special Sports <br /> 13 -19 th April 2014 EMBU,
            KENYA
          </HeaderContainer>
          <Paragraph>
            Maisha Kara through the kind support of Inoradopt’s staff was able
            to participate in the 2014 Annual National Special Sports on 13th
            -19th April in Embu, Kenya. The funds received from Inoradopt
            enabled MKCF facilitate the following activities;
            <ol>
              <li>
                Participation of 3 MK volunteers in the sports events &
                Stakeholder Forum
              </li>
              <li>
                Provided refreshments for 66 children (deaf/blind & Albino), 10
                teachers and 5 support staff.
              </li>
              <li>
                Facilitated the forum of Special Head Association –Kenya
                (SSHAK).
              </li>
            </ol>
          </Paragraph>
          <MiddleContainer>
            <ContainerHeader>
              PARTICIPATION OF 3 MK VOLUNTEERS IN THE SPORTS EVENTS
            </ContainerHeader>
            <Paragraph>
              Maisha Kara in the previous year through the support of Inoradopt
              had provided T-Shirts and medals for 16 deaf/blind learners and
              T-Shirt for their 15 carers and 10 teachers. The same were also
              worn during the opening ceremony of this year by the same learners
              and teachers. The children represented 5 Counties national namely;
              Kabarnet, Nairobi, Kwale, Maseno and Kitui. The key events viewed
              of deaf/blind participants were; 100 meters race worn by Musyoki
              from Kitui and in 2nd place Enock Kiprono from Kabarnet; Goal ball
              rolling on the ground, Table Tennis.
            </Paragraph>
            <HorizontalLine />
            <HeaderSmall>
              Refreshments for 66 children (deaf/blind & Albino), 10 teachers
              and 5 support staff.
            </HeaderSmall>
            <Paragraph>
              MK provided refreshments of soda and madazi (doughnut) during mid
              morning and afternoon breaks.
            </Paragraph>
            <HorizontalLine />
            <HeaderSmall>
              Facilitated the forum of Special Head Teachers Association –Kenya
              (SSHAK).
            </HeaderSmall>
            <Paragraph>
              SSHAK is a national association of head teachers of Special
              schools and teachers from special units. SSHAK’s clear mandate is
              to lobby for the agenda for learners with Special needs and
              monitor government policy implementation in line with Education
              Act 2013 Chapter 6.SSHAK’s current focus as mentioned in the
              meeting was working with the government on securing special needs
              teachers deployed into existing schools and units, and the grants
              for learners with special needs are accessed by them at
              institution level.
            </Paragraph>
          </MiddleContainer>
          <br />
          <LegContainer>
            <p>Participation of MKC <br/> (Maisha Kara Children Foundation)</p>
          </LegContainer>
          <br />
          <LegContainer></LegContainer>
        </LeftContainer>
        <RightContainer>
          <NewContainer>
            <SmallHeader>Sign up for our </SmallHeader>
            <SmallHead>NewsLetter</SmallHead>
            <Input placeholder="Your Name" type="text" />
            <Input placeholder="Phone" type="text" />
            <Input placeholder="Email" type="text" />
            <TextArea placeholder="Message" rows="5" />
            <Button margin="9px">Submit Request</Button>
          </NewContainer>

          <NewContainer>
            <h4>FROM THE FIELD</h4>
            <h4>Over 200+</h4>
            <ul>
              <li>
                <h2>Medical Malpractice</h2>
              </li>
              <li>
                <Paragraph>
                  Commercial truck accidents in which client sustained spinal
                  injuries after truck driver crossed center line
                </Paragraph>
              </li>
            </ul>
            <HorizontalLine />
          </NewContainer>
        </RightContainer>
      </HomeContainer>
      <BaseContainer>
        <br />
        <BaseHeader>Become a part of Something Bigger than Yourself</BaseHeader>
        <BaseLine />
        <BaseHeader weight="normal" size="25px">
          Together, we’re creating a future where all children have a chance to
          succeed.
        </BaseHeader>
        <br />
        <BaseContainerBox>
          <BaseInput placeholder="Your Name" type="text" />
          <BaseInput placeholder="Email" type="email" />
          <Button
            radius="0px"
            height="50px"
            width="10%"
            font="20px"
            hovercolor="#15317e"
            color="orange"
            fontWeight="normal"
          >
            JOIN NOW
          </Button>
        </BaseContainerBox>
      </BaseContainer>
    </div>
  );
};

export default HomePage;
