import React, { useContext } from 'react'
import { PostContextComponent } from "./Posts"
import styled from 'styled-components'

const ImagesStyles = styled.div`
  img {
    width : 100%;
    height : 100%;
    border-radius : 5px;
  }
`

export default function PostImages() {
  const { post } = useContext(PostContextComponent)
  const postImgElem = <ImagesStyles>
    <img src={post.imgUrl} alt="Cool post" />
  </ImagesStyles>
  return <>{postImgElem}</>
}
