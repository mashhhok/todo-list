import styled from 'styled-components'
import { theme } from '../../ui/src/lib/config/theme'

export const LayoutFooter = styled.div` 
  {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    justify-content: space-between;
    color: ${theme.colors.argent};
    font-family: ${theme.fontFamily.helveticaNeue};
    margin: 30px auto;
    font-size: 12px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`