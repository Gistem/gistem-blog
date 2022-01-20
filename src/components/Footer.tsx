import React from 'react'
import { FooterElement } from '../styles/FooterElement'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterElement>
            <p>{new Date().getFullYear()}</p>
        </FooterElement>
    )
}

export default Footer