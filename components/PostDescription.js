import React, { useContext } from 'react'
import styled from 'styled-components'

import { PostContextComponent } from './Posts'

const DescriptionStyles = styled.div`
  padding-block : 1rem;
`

export default function PostDescription() {
  const { post } = useContext(PostContextComponent)
  const postDescription = <DescriptionStyles >
    {post.postTextContent}
  </DescriptionStyles>
  
  return (
  <>
    { postDescription }
  </>
  )
}
