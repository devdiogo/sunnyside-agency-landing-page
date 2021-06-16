import styled from "styled-components"
import { colors, layout_size } from "../styles/style-guide"

type CategoriesItemStyleProps = {
  image: string
  imageAlt: string
  color?: string
}

const CategoriesItemStyle = styled.div<CategoriesItemStyleProps>`
  flex: 1;
  background: url(${(props) => `./assets/mobile/${props.image}`}) center;
  background-size: cover;
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  div {
    margin-bottom: 59px;
    text-align: center;
    color: ${({ color }) => (color ? color : colors.dark_desaturated_cyan)};
    h3 {
      font-family: "Fraunces";
      font-weight: 900;
      font-size: 28px;
      letter-spacing: -0.2px;
    }
    p {
      font-family: "Barlow";
      font-size: 16px;
      letter-spacing: -0.11px;
      line-height: 27px;
      margin-top: 27px;
      padding: 0 20px;
    }
  }

  @media (min-width: ${layout_size.tablet}) {
    background: url(${(props) => `./assets/desktop/${props.image}`}) center;
    background-size: cover;
  }

  @media (min-width: 1350px) {
    div {
      p {
        padding: 0 190px;
      }
    }
  }

  @media (min-width: ${layout_size.desktop}) {
    min-height: 600px;
  }

  @media (max-width: 1439px) and (min-width: 376px) {
    min-height: 900px;
  }
`

type CategoriesItemProps = CategoriesItemStyleProps & {
  children?: React.ReactNode
}

export default function CategoriesItem({ image, imageAlt, color, children }: CategoriesItemProps) {
  return (
    <CategoriesItemStyle image={image} imageAlt={imageAlt} color={color}>
      {children}
    </CategoriesItemStyle>
  )
}
