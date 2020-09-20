import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from "../../config/colors";

interface ButtonUIProps {
    light?: boolean;
    filled?: boolean;
}

export const ButtonUI: React.FC<ButtonUIProps> = (props) => {
    const { light, filled, children } = props;
    return <Container light={light} filled={filled} >
        {children}
    </Container>
}

const Container = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid ${colors.greyDark};
    padding: 10px 30px;
    border-radius: 20px;

    &:focus {
        outline: none;
        border-radius: 20px;
        box-shadow: 0px 0px 1px rgba(0,100,255,1), 
            0px 0px 2px rgba(0,100,255,1), 
            0px 0px 3px rgba(0,100,255,1);
    }
    ${({ light }) => light && css`
        border: 1px solid ${colors.greyLight};
        background-color: ${colors.white};
        color: ${colors.greyLight};
        font-weight: 500;
    `}
    ${({ filled }) => filled && css`
        border: 2px solid ${colors.greyDark};
        background-color: ${colors.greyDark};
        color: ${colors.white};
        font-weight: 600;
        box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.25);
    `}
`;