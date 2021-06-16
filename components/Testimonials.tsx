import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

const TestimonialsStyle = styled.div`
  padding: 64px 40px 90px;
  background: #fffcf8;
  h2 {
    margin-bottom: 64px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.grayish_blue};
    font-family: "Fraunces";
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 4px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
  }
  @media (min-width: ${layout_size.tablet}) {
    padding: 160px 165px 166px;
    h2 {
      margin-bottom: 80px;
      font-size: 20px;
      letter-spacing: 5px;
    }
  }
  @media (min-width: 1420px) {
    & > div {
      flex-direction: row;
    }
  }
`

export default function Testimonials({ children }: { children: React.ReactNode }) {
  return <TestimonialsStyle>{children}</TestimonialsStyle>
}
