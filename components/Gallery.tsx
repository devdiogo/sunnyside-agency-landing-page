import styled from "styled-components"
import { layout_size } from "../styles/style-guide"

const GalleryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  picture {
    width: 50%;
  }
  img {
    display: block;
  }

  @media (min-width: ${layout_size.tablet}) {
    picture {
      width: 25%;
    }
  }
`

export default function Gallery({ children }: { children: React.ReactNode }) {
  return <GalleryStyle>{children}</GalleryStyle>
}
