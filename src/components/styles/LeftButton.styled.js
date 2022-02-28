import styled from "styled-components";
import { RightButton } from "./RightButton.styled";

export const LeftButton = styled(RightButton)`
  background-color: white;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
