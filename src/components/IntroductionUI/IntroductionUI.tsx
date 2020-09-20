import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../config/colors'
import { ButtonUI } from '../ButtonUI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
 
export const IntroductionUI = () => {

    return <Container>
        <TextWrapper>
            <TextLight>Hello, I m</TextLight>
            <TextBold>Marcin Duda</TextBold>
            <TextSmall>Front-end Developer</TextSmall>
        </TextWrapper>
        <SocialsWrapper>
            <SocialLink type="linkedin" to="/"> <StyledFontAwesomeIcon icon={faLinkedinIn}/></SocialLink>
            <SocialLink type="facebook" to="/" ><StyledFontAwesomeIcon icon={faFacebookF} /></SocialLink>
            <SocialLink type="instagram" to="/"><StyledFontAwesomeIcon icon={faInstagram} /></SocialLink>
        </SocialsWrapper>
        <ButtonsWrapper>
            <ButtonUI filled>Hire me</ButtonUI>
            <ButtonUI light>See my resume</ButtonUI>
        </ButtonsWrapper>
    </Container>
}

const Container = styled.div`

`;

const ButtonsWrapper = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: ${colors.greyDark};
`;

const TextWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 25px;
`;

const TextLight = styled.p`
    font-size: 32px;
    font-weight: 300;
    position: relative;
    display: block;
    margin: 0;
    &:before {
        content: ",";
        display: block;
        position: absolute;
        left: 106px;
        bottom: 20px;
    }
`;

const TextBold = styled.p`
    font-size: 45px;
    font-weight: 700;
    margin: 0;
`;

const TextSmall = styled.p`
    font-size: 18px;
    margin: 2px 0 0 2px;
    color: ${colors.greyLight};
`;

const SocialsWrapper = styled.div`
    display: flex;
    margin-bottom: 42px;
`;

interface SocialLinkPros {
    type: 'linkedin' | 'facebook' | 'instagram';
}

const SocialLink = styled.a<SocialLinkPros>`
    display: block;
    height: 41px;
    width: 41px;
    padding: 7px;
    box-sizing: border-box;
    margin-right: 12px;

    &:last-of-type {
        margin-right: 0;
    }

    ${({ type }) => type === 'linkedin' && css`
        background-color: ${colors.linkedin};
    `}

    ${({ type }) => type === 'facebook' && css`
        background-color: ${colors.facebook};
    `}

    ${({ type }) => type === 'instagram' && css`
        background-color: ${colors.instagram};
    `}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 100%;
    color: ${colors.white};
    && { 
        width: 100%;
    }
`;
