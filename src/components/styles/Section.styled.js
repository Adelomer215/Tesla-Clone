import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-image: ${(props) => `url('images/${props.bgImg}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
