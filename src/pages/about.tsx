import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
    return (
        
        <Layout pageTitle='About'>
            <Container>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis, temporibus ex ipsum nam deserunt quam quos, provident praesentium asperiores, molestiae sed odio earum illo. Sit tempore magni at accusamus!</p>
        </Container>
        </Layout>
    )
}

export default about