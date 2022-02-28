import React from "react";

import { Section } from "../styles/Section.styled";
import { Container } from "../styles/Container.styled";
import { ItemText } from "../styles/ItemText.styled";
import { ButtonGroup } from "../styles/ButtonGroup.styled";
import { RightButton } from "../styles/RightButton.styled";
import { LeftButton } from "../styles/LeftButton.styled";
import { DownArrow } from "../styles/DownArrow.styled";
import { Fade } from "react-reveal";

const Home = ({ title, description, rightBtn, leftBtn, bgImg, id }) => {
  return (
    <Section as="section" bgImg={bgImg}>
      <Container>
        <Fade bottom>
          <ItemText>
            <h1 className="text-capitalize">{title}</h1>
            <h5 className="text-capitalize">{description}</h5>
          </ItemText>
        </Fade>

        <Fade left>
          <ButtonGroup className="btn-group">
            <RightButton
              className="text-uppercase btn text-white me-4 rounded-pill"
              onClick={() => console.log(id)}
            >
              {rightBtn}
            </RightButton>
            {leftBtn && (
              <LeftButton className="text-uppercase btn rounded-pill">
                {leftBtn}
              </LeftButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="images/down-arrow.svg" />
      </Container>
    </Section>
  );
};

export default Home;
