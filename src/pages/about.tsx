import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
    return (
        
        <Layout pageTitle='About'>
            <Container>
            <h1>About Me</h1>
            <p>Hi there! <br/>
            - Gaston here, <br/>
            I'm an Argentine swimming's fan. I've been in master swimming since 2014.<br/>
             In these years I have studied, learned & experienced how to improve in this sport,<br/> so I want to share my experience.</p>
        </Container>
        </Layout>
    )
}

export default about