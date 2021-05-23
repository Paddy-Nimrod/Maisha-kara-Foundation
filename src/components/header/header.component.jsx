import React from "react";

import SearchComponent from "../search component/search.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

import {
  HeaderContainer,
  OptionLink,
  HeaderStrip,
  SearchContainer,
  SocialContainer,
  Header,
  HeaderMenu,
  IconContainer,
  IconPot,
  HeaderButton,
 
} from "./header.style";

const HeaderComponent = () => {
  const element = <FontAwesomeIcon icon={faDonate} />;
  return (
    <div>
      <HeaderStrip>
        <SocialContainer>
          <Header>Welcome to Maisha Kara Children Foundation</Header>
          <IconPot>
            <p>follow us on :</p>
            <IconContainer>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-instagram"></i>
            </IconContainer>
          </IconPot>
        </SocialContainer>
        <SearchContainer>
          <SearchComponent />
        </SearchContainer>
      </HeaderStrip>

      <HeaderContainer>
        <HeaderMenu>
          <OptionLink exact to="/">
            Home |
          </OptionLink>
          <OptionLink to="/about">About Us |</OptionLink>
          <OptionLink to="/giving">Give Monthly |</OptionLink>
          <OptionLink to="/work">Our Work |</OptionLink>
          <OptionLink to="/actions">Take Action </OptionLink>
          <HeaderButton>{element} Donate Now</HeaderButton>
        </HeaderMenu>
      </HeaderContainer>
    </div>
  );
};

export default HeaderComponent;
