import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

export const NavStyle = styled.div`
  width: 100%;
  position: relative;
  > img {
    display: block;
    position: absolute;
    top: 34px;
    right: 20px;
    cursor: pointer;
  }
  ul {
    display: none;
    background: #fff;
    margin-bottom: 7px;
    margin: 13px 0 13px 5.3%;
    padding: 8px 0 56px 0;
    position: absolute;
    width: 89%;
    > div {
      width: 0;
      height: 0;
      position: absolute;
      border-style: solid;
      border-width: 0 0 30px 30px;
      border-color: transparent transparent #fff transparent;
      top: -29px;
      right: 0;
    }
    li {
      &:not(:first-child) {
        padding-top: 32px;
      }
      &:last-child {
        padding-top: 47px;
      }
      letter-spacing: -0.13px;
      a {
        color: ${colors.dark_grayish_blue};
        font-size: 20px;
        font-family: "Barlow";
        &.active {
          letter-spacing: -0.11px;
          font-family: "Fraunces";
          text-transform: uppercase;
          color: ${colors.very_dark_desaturated_blue};
          font-size: 15px;
          background: ${colors.yellow};
          padding: 19px 31.5px;
          border-radius: 28px;
          transition: background-color 0.3s ease-in-out;
          &:hover {
            color: ${colors.white};
            background: #000;
          }
        }
      }
    }
  }
  @media (min-width: ${layout_size.tablet}) {
    padding: 36px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 46px 48px 46px 40px;
    img {
      display: none;
    }
    ul {
      display: block;
      margin: 0;
      padding: 0;
      background: none;
      position: static;
      width: auto;
      div {
        display: none;
      }
      li {
        display: inline;
        margin: 0;
        &:not(:last-child) {
          margin-right: 48.5px;
          margin-bottom: 0;
        }
        a {
          color: ${colors.white};
          font-size: 18px;
          &.active {
            background: ${colors.white};
            &:hover {
              color: ${colors.white};
              background: rgba(255, 255, 255, 0.2537);
            }
            &:active {
              padding: 17.5px 29.5px;
              border: 2px dashed ${colors.white};
            }
          }
        }
      }
    }
  }
`
export default function Nav({ children }: { children: React.ReactNode }) {
  return <NavStyle>{children}</NavStyle>
}
