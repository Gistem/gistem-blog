import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles/Containers'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
    return (
        <Layout pageTitle='Contact'>
            <Container>
            <h1>Contáctame</h1>
            <p>En caso de alguna duda o que quieras compartir una opinión<br/>
            - Aquí te dejo mi email: <br/><a href="mailto:gasti.95lp@gmail.com"><p>gasti.95lp@gmail.com</p></a></p>
            </Container>
        </Layout>
    )
}

export default contact