import React from 'react'
import { HeroContainer } from '../styles/Containers'
import { Title, Paragraph } from '../styles/TextElements'
import { ButtonElement } from '../styles/ButtonElements'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <HeroContainer>
            <Title hero>Gistem's Blog</Title>
            <Paragraph light>Sharing knowlegde about swimming</Paragraph>
            <ButtonElement>Subscribe</ButtonElement>
        </HeroContainer>
    )
}

export default Hero