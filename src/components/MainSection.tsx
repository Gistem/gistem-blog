import React from 'react'
import PostPreview from '../types/PostPreview'
import { Container } from '../styles/Containers'
import PostListing from './PostListing'
import { Title } from '../styles/TextElements'


interface MainSectionProps {
    posts: PostPreview []
}

const MainSection: React.FC<MainSectionProps> = ({ posts }) => {
    return (
        <main>
            <Container>
                <Title> - Posts</Title>
                <PostListing posts={posts} />
            </Container>
        </main>
    )
}

export default MainSection