import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

export const HeadingTextStyle = styled.h1`
  margin-top: 51px;
  text-transform: uppercase;
  color: ${colors.white};
  letter-spacing: 6.25px;
  font-family: "Fraunces";
  font-size: 40px;
  font-weight: 900;
  @media (min-width: ${layout_size.tablet}) {
    margin-top: 68px;
    font-size: 56px;
    letter-spacing: 8.75px;
    text-indent: 8.75px;
  }
`

export default function HeadingText({ children }: { children: React.ReactNode }) {
  return <HeadingTextStyle>{children}</HeadingTextStyle>
}
