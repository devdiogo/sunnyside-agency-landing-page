import styled from "styled-components"
import { layout_size } from "../styles/style-guide"

const CategoriesStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${layout_size.tablet}) {
    flex-direction: row;
  }
`

export default function Categories({ children }: { children: React.ReactNode }) {
  return <CategoriesStyle>{children}</CategoriesStyle>
}
