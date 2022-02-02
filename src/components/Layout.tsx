import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import LayoutElement from '../styles/LayoutElement'
interface LayoutProps {
    pageTitle: string
    description?: string
}

const Layout: React.FC<LayoutProps> = ({pageTitle, description = 'Gistem Blog', children}) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta charSet="uft-8" />
                <meta property="og:title" content={pageTitle} key='ogtitile' />
                <meta property="og:description" content={description} key="ogdesc" />

                

                <title>GS Blog | {pageTitle}</title>
            </Head>
        
        <LayoutElement>
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutElement>
        </>
    )
}

export default Layout