import React from 'react';
import styled from 'styled-components';
import { IntroductionUI } from '../IntroductionUI';
import { BannerAnimationUI } from '../BannerAnimationUI';

export const BannerUI = () => {

    return <Container>
        <IntroductionUI />
        <BannerAnimationUI />
    </Container>
}

const Container = styled.div`
    height: 500px;
    width: 1000px;
    display: flex;
    // background-color: gray;
`;