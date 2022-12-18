import styled, { css } from 'styled-components'
import { theme } from '../ui/src/lib/config/theme'

export const Layout = styled.div`
  {
    display: flex;
    background: ${theme.colors.white};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`