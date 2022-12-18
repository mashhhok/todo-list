import styled, { css } from 'styled-components'
import {theme} from "./ui/src/lib/config/theme";

export const base = {
  textInput: css`
    position: relative;
    margin: 0;
    width: 100%;
    color: ${theme.colors.darkLiver};
    font-family: ${theme.fontFamily.helveticaNeue};
    font-size: 24px;
    font-weight: inherit;
    line-height: 1.4em;
    padding: 6px;
    //border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
}