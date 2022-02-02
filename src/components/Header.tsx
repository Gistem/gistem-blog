import React from 'react'
import AppLink from './AppLink'
import { HeaderContainer } from '../styles/Containers'
import HeaderElement from '../styles/HeaderElement'
import { Logo } from '../styles/TextElements'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderElement>
            <HeaderContainer>
                <Logo>
                 <AppLink href="/" label="Home" />
                </Logo>
            <nav>
                <AppLink href="/about" label="About" />
                <AppLink href="/contact" label="Contact" />
            </nav>
        
            </HeaderContainer>
        </HeaderElement>
    )
}

export default Header