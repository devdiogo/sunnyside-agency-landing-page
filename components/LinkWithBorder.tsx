import Link from "next/link"
import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

type LinkProps = {
  href: string
  text: string
  borderColor: string
}

type LinkStyleProps = {
  borderColor: string
}

const LinkWithBorderStyle = styled.a<LinkStyleProps>`
  font-family: "Fraunces";
  font-weight: 900;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${colors.very_dark_desaturated_blue};
  text-transform: uppercase;
  width: max-content;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 36px 0 0 8px;
  &:hover {
    span {
      &:last-child {
        transition: opacity 0.6s;
        opacity: 100%;
      }
    }
  }
  span {
    &:last-child {
      display: block;
      width: 135px;
      height: 10px;
      background: ${(props) => props.borderColor};
      opacity: 25%;
      border-radius: 28px;
      position: absolute;
      top: 12px;
      z-index: -1;
      transition: opacity 0.6s;
    }
  }
  @media (min-width: ${layout_size.tablet}) {
    margin: 43px 0 0 8px;
  }
`

export default function LinkWithBorder({ href, text, borderColor }: LinkProps) {
  return (
    <Link href={href}>
      <LinkWithBorderStyle borderColor={borderColor}>
        <span>{text}</span>
        <span></span>
      </LinkWithBorderStyle>
    </Link>
  )
}
