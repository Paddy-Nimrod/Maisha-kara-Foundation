import React from "react";
import action1 from "../../assets/action1.png";
import action2 from "../../assets/action2.png";
import action3 from "../../assets/action3.png";
import { HorizontalLine } from "../giving-page/giving.style";
import { Paragraph } from '../../components/footer/footer.style';
import {
  Header,
  Header2,
  ActionContainer,
  ImageContainer,
  ImageContainer2,
  ImageCaption,
  BottonContainer,
  BaseContainer,
  Butt
} from "./action.style";

const ActionComponent = () => {
  return (
    <div>
      <HorizontalLine />
      <Header>Voices from the Field</Header>
      <Header2>FIELD MISSION KILIFI JUNE 14TH 18TH 2014</Header2>
      <br />
      <ActionContainer>
        <ImageContainer>
          <img src={action1} alt="action1" width="100%" height="350vh" />
          <ImageCaption>
            Day of the African Child 16th June 2014 – <br /> Kizurini Primary
            school Kaloleni –Kilifi County
          </ImageCaption>
        </ImageContainer>
        <ImageContainer2>
          <img src={action2} alt="action2" width="100%" height="350vh" />
          <ImageCaption>
            Catherine Solomon MKT & Patience Marsha <br /> Head Teacher Kizurini
            Primary School
          </ImageCaption>
        </ImageContainer2>

        <BottonContainer>
          <img src={action3} width="100%" height="600vh" alt="u" />
          <ImageCaption>
            APDK Team; Ms Leya Director Msa, Eunice –Nbi , Salim Msa & Catherine
            MKT
          </ImageCaption>
        </BottonContainer>
      </ActionContainer>
      <BaseContainer>
        <ImageContainer height="200">
          <Header fontSize="50px" color="white">
            KEY ISSUES RAISED <br />
            IN THE MEETINGS:
          </Header>
        </ImageContainer>
        <ImageContainer height="200" color="white">
          <Paragraph> APDK meeting; </Paragraph>
          <ol >
            <li>
              APDK to facilitate the next local sensitization forum –Salim
            </li>
            <li>Support to the physiotherapy attached at the OT room</li>
            <li>
              Provision of support for required assistive aids(walking , wheel
              chair repairs) for children who need them within the special unit
            </li>
          </ol>
        </ImageContainer>
      </BaseContainer>
      <Butt>

      </Butt>
    </div>
  );
};

export default ActionComponent;
