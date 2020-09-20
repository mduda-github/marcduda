import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/colors'

export const AvatarUI = () => {

    return <Container>
        <Image  alt=""/>
        <TextWrapper>
            <Name>Marcin{`\n`}Duda</Name>
            <Profession>Front-end Developer</Profession>
        </TextWrapper>
    </Container>
}

const Container = styled.div`
    display: flex;
    height: 55px;
`;

const Image = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: gray;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colors.greyDark};
    margin-left: 10px;
    white-space: pre-line;
    font-family: 'Montserrat', sans-serif;
`

const Name = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
`

const Profession = styled.span`
    font-size: 12px;
    color: ${colors.greyLight};
`