import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

const FooterStyle = styled.div`
  background: ${colors.very_dark_moderate_cyan};
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  font-family: "Barlow";
  font-size: 18px;
  letter-spacing: -0.13px;
  svg {
    width: 170px;
    height: 33px;
  }
  a {
    color: ${colors.dark_moderate_cyan};
    &:hover {
      color: ${colors.white};
    }
    transition: color 0.3s;
  }
  ul {
    margin-top: 5px;
    li {
      display: inline;
      margin-right: 57px;
      &:last-child {
        margin-right: 0;
      }
    }
    &:last-child {
      margin-top: 93px;
      li {
        margin-right: 28px;
        &:last-child {
          margin-right: 0;
        }
        a {
          img {
            &:hover {
              filter: brightness(0) invert(1);
            }
            transition: 0.3s;
          }
        }
      }
    }
  }
  @media (min-width: ${layout_size.tablet}) {
    padding-top: 70px;
    ul {
      margin-top: 40px;
    }
  }
`

export default function Footer({ children }: { children: React.ReactNode }) {
  return <FooterStyle>{children}</FooterStyle>
}
