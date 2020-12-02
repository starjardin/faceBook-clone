import React from 'react'
import Posts from './Posts'
import styled from 'styled-components'

const FeedStyle = styled.div`
  max-width : 800px;
  margin-inline : auto; 
`

const Feed = () => <FeedStyle><Posts /></FeedStyle>
export default Feed;