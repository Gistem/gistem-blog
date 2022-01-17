import React from 'react'
import Layout from '../components/Layout'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
    return (
        <Layout pageTitle='Contact'>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa fuga asperiores molestiae ea laboriosam sapiente repellendus amet, sit veniam qui eos exercitationem, recusandae vero molestias saepe incidunt error fugit non?</p>
        </Layout>
    )
}

export default contact