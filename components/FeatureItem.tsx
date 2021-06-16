import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

const FeatureItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    flex-flow: column-reverse;
  }
  div,
  img {
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 64px 30px;
    h2 {
      font-family: "Fraunces";
      font-weight: 900;
      font-size: 32px;
      letter-spacing: -0.23px;
      text-align: center;
      color: ${colors.very_dark_desaturated_blue};
    }
    p {
      margin-top: 23px;
      font-family: "Barlow";
      font-size: 18px;
      letter-spacing: -0.13px;
      line-height: 30px;
      text-align: center;
      color: ${colors.dark_grayish_blue};
    }
    a {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: ${layout_size.tablet}) {
    flex-direction: row;
    &:first-child {
      flex-flow: initial;
    }
    div,
    img {
      width: 50%;
    }
    div {
      padding-top: 158px;
      padding-right: 116px;
      padding-left: 165px;
      h2 {
        font-size: 40px;
        letter-spacing: -0.29px;
        text-align: left;
      }
      p {
        letter-spacing: -0.13px;
        margin-top: 30px;
        text-align: left;
      }
    }
  }
`

export default function FeatureItem({ children }: { children: React.ReactNode }) {
  return <FeatureItemStyle>{children}</FeatureItemStyle>
}
