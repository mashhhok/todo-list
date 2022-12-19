import styled from 'styled-components'
import { base } from '../../style'


export const InputToDo = styled.div` 
    .add-text {
        ${base.textInput};
        padding: 16px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
        
    textarea:focus, input:focus {
        outline: none;
    }
`