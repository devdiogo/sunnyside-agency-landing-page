import styled from "styled-components"
import { layout_size } from "../styles/style-guide"

const HeaderStyle = styled.div`
  background: url("./assets/mobile/image-header.jpg") no-repeat;
  background-size: cover;
  height: auto;
  text-align: center;
  @media (min-width: ${layout_size.tablet}) {
    background: url("./assets/desktop/image-header.jpg") no-repeat;
    background-size: cover;
    height: 800px;
  }
`

export default function Header({ children }: { children: React.ReactNode }) {
  return <HeaderStyle>{children}</HeaderStyle>
}
