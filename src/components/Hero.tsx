import React from 'react'
import { HeroContainer } from '../styles/Containers'
import { Title, Paragraph } from '../styles/TextElements'
import  ButtonElement  from '../styles/ButtonElements'


interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <HeroContainer>
            <Title hero>Gaston's  Blog</Title>
            <Paragraph light>Compartiendo mi experiencia & pasión</Paragraph>
            <ButtonElement>Suscríbete</ButtonElement>
            <p>working on the button 👨‍💻</p>
        </HeroContainer>
    )
}

export default Hero