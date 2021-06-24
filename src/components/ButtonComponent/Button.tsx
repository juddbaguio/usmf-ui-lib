import React from 'react'
import styled from 'styled-components'
import './Button.css'

export interface ButtonProps {
    onClick?: () => void;
    label?: string;
    primary?: boolean;
    style?: React.CSSProperties | undefined
}

const StyledButton = styled.button<ButtonProps>`
    font-size: 40px;
    padding-left: 1.14em;
    padding-bottom: .724em;
    padding-top: .931em;
    padding-right: 2.5em;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(173,79,154,1) 0%, rgba(181,53,44,1) 100%);
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    -webkit-clip-path: polygon(69% 0, 100% 40%, 100% 100%, 0 100%, 0 0);
    clip-path: polygon(69% 0, 100% 40%, 100% 100%, 0 100%, 0 0);
    transition: 0.5s;
    &:hover {
        background: rgba(0,0,0,0.5);
    }
`

export const Button: React.FC<ButtonProps> = ({ onClick = () => {}, label = 'Test Button', primary = false, style={} }) => {
    return (
        <StyledButton onClick={onClick} primary={primary} style={style}>
            {label}
        </StyledButton>
    )
}