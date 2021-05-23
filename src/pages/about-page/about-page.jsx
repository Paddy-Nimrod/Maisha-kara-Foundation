import React from "react";

import miheso from "../../assets/miheso2.png";
import caroline from "../../assets/caroline.png";
import fiona from "../../assets/fiona.png";
// import cate from "../../assets/cate.png";

import { FooterLine } from "../../components/footer/footer.style";

import {
  Card,
  CardContainer,
  CardFoot,
  CardHeader,
  CardHeader2,
  FormContainer,
  FormHeader,
  Input,
  TextArea,
  Button
} from "./about.style";

const AboutComponent = () => {
  return (
    <div>
      <CardContainer>
        <Card>
          <img src={miheso} alt="profiles" width="100%" height="224px" />
          <CardHeader>Kennedy Miheso</CardHeader>
          <CardHeader2>
            Associate,
            <br /> Nairobi Kenya
          </CardHeader2>
          <CardFoot>
            Ken holds a Bachelor of Science (Statistics) Degree from the
            University of Nairobi and is currently pursuing a Master of Science
            (Statistics) from the same institution.
          </CardFoot>
        </Card>
        <Card>
          <img src={caroline} alt="profiles" width="100%" height="224px" />
          <CardHeader>Caroline Maina</CardHeader>
          <CardHeader2>
            Associate,
            <br /> Nairobi Kenya
          </CardHeader2>
          <CardFoot>
            Caroline holds a Bachelor of Commerce (Business Administration and
            Management) degree from Daystar University.
          </CardFoot>
        </Card>
        <Card>
          <img src={fiona} alt="profiles" width="100%" height="224px" />
          <CardHeader>Fiona Shiundu</CardHeader>
          <CardHeader2>
            Associate,
            <br /> Nairobi Kenya
          </CardHeader2>
          <CardFoot>
            She is a member of the Programme for African Leadership (PfAL at
            LSE) and the Association of Media Women in Kenya.
          </CardFoot>
        </Card>
        <Card>
          <img src={fiona} alt="profiles" width="100%" height="224px" />
          <CardHeader>Catherine Solomon</CardHeader>
          <CardHeader2>
            Associate,
            <br /> Nairobi Kenya
          </CardHeader2>
          <CardFoot>
            Ken holds a Bachelor of Science (Statistics) Degree from the
            University of Nairobi and is currently pursuing a Master of Science
            (Statistics) from the same institution.
          </CardFoot>
        </Card>
      </CardContainer>
      <FormContainer>
        <FormHeader>
          get free consultation,
          <br /> contact us today!
          <FooterLine color="black" width="30%" />
          <Input placeholder="Name:" />
          <Input placeholder="Email:" />
          <Input placeholder="Subject:" />
          <TextArea rows="9" placeholder="Message:"></TextArea>
          <br/>
          <Button>send</Button>
        </FormHeader>
      </FormContainer>
    </div>
  );
};

export default AboutComponent;
