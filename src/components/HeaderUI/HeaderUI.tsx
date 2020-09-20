import React from 'react';
import styled from 'styled-components';
import { AvatarUI } from '../AvatarUI';
import { NavigationMenuUI } from '../NavigationMenuUI'

export const HeaderUI = () => {

    return <Container>
        <AvatarUI />
        <NavigationMenuUI />
    </Container>
}

const Container = styled.div`
    height: 55px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;