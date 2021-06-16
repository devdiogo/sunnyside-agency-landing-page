import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

const TestimonialsItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 68px;
  }
  img {
    width: 72px;
    height: 72px;
    border-radius: 99px;
  }
  p {
    color: ${colors.very_dark_grayish_blue};
    font-family: "Barlow";
    font-size: 18px;
    text-align: center;
    letter-spacing: -0.13px;
    line-height: 32px;
    width: 327px;
    margin-top: 32px;
  }
  div {
    text-align: center;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    span {
      color: ${colors.very_dark_desaturated_blue};
      font-family: "Fraunces";
      font-weight: 900;
      font-size: 18px;
      letter-spacing: -0.13px;
      &:last-child {
        font-family: "Barlow";
        margin-top: 12px;
        color: ${colors.grayish_blue};
        font-size: 14px;
        letter-spacing: -0.1px;
      }
    }
  }
  @media (min-width: ${layout_size.tablet}) {
    p {
      width: 350px;
      margin-top: 58px;
    }
    div {
      margin-top: 68px;
    }
  }
  @media (min-width: ${layout_size.desktop}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`

export default function TestimonialsItem({ children }: { children: React.ReactNode }) {
  return <TestimonialsItemStyle>{children}</TestimonialsItemStyle>
}
