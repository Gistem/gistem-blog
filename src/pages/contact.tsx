import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
    return (
        <Layout pageTitle='Contact'>
            <Container>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa fuga asperiores molestiae ea laboriosam sapiente repellendus amet, sit veniam qui eos exercitationem, recusandae vero molestias saepe incidunt error fugit non?</p>
            </Container>
        </Layout>
    )
}

export default contact