import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/colors';


export const NavigationMenuUI = () => {

    return <Container>
        <NavItem>Work</NavItem>
        <NavItem>About me</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
        <NavButton>Hire me</NavButton>
    </Container>
}

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: ${colors.greyDark};
    text-transform: uppercase;
`;

const NavItem = styled.a`
    position: relative;
    margin-right: 40px;
    color: inherit;
    &:last-of-type {
        margin-right: 15px;
    }
    &:hover {
        &:before {
            content: "";
            display: inline-block;
            position: absolute;
            top: 17px;
            height: 3px;
            width: 100%;
            background-color: ${colors.greyDark};
        }
    } 
`;
const NavButton = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid ${colors.greyDark};
    padding: 10px 30px;
    border-radius: 20px;
    &:hover {
        background-color: ${colors.greyDark};
        color: ${colors.white};
    } 
`;