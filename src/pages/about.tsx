import React from 'react'
import Layout from '../components/Layout'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
    return (
        <Layout pageTitle='About'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis, temporibus ex ipsum nam deserunt quam quos, provident praesentium asperiores, molestiae sed odio earum illo. Sit tempore magni at accusamus!</p>
        </Layout>
    )
}

export default about