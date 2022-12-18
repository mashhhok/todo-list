import styled from 'styled-components'
import { theme } from '../../ui/src/lib/config/theme'

export const LayoutHeader = styled.div` 
  {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    justify-content: space-between;
    font-size: 60px;
    font-weight: 120;
    color: ${theme.colors.whiteCoffee};
    font-family: ${theme.fontFamily.helveticaNeue};
    margin: 50px auto 0;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
`