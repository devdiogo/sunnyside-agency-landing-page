import styled from "styled-components"
import { layout_size } from "../styles/style-guide"

export const ScrollDownArrowStyle = styled.div`
  padding-top: 48.63px;
  padding-bottom: 128px;
  @media (min-width: ${layout_size.tablet}) {
    padding-top: 97.63px;
    padding-bottom: 0;
  }
`

export default function ScrollDownArrow({ children }: { children: React.ReactNode }) {
  return <ScrollDownArrowStyle>{children}</ScrollDownArrowStyle>
}
