import React, { useContext } from 'react'
import styled from 'styled-components'

import { PostContextComponent } from './Posts'
import { ACTIONS, PostContext } from '../reducer/reducer'

const ButtonStyles = styled.div`
  position : relative;
  button {
    padding : .3rem 1.3rem;
    margin : .3rem 1rem .3rem 0;
    border : none;
    border-radius : 2px;
    box-shadow : 1px 1px 1px 4px #ccc;
    color : #a7a9be;
    background-color : #fffffe
  }
  button:focus {
    border : none;
    outline : none;
  }
  .peopleLikedPost {
    position : absolute;
    right : 0;
  }
`

export default function LikeButton() {
  const { dispatch, state } = useContext(PostContext)
  const { post } = useContext(PostContextComponent)
  const { currentUserId } = state.currentUser

  function hasAlreadyLiked () {
    return post.likes.some(like => like.userId === currentUserId)
  }

  function likePost() {
    const newLike = { likeId: 939834123, userId : currentUserId }
    dispatch({
      type: ACTIONS.LIKE_POST,
      postId : post.postId,
      like: newLike
    })
  }

  function unlikePost() {
    dispatch({ type: ACTIONS.UNLIKE_POST, postId : post.postId })
  }

  const buttonLikes = hasAlreadyLiked()
        ? <button
            onClick={unlikePost}
          >
            unlike
          </button>
        : <button
            onClick={likePost}
          >
            like
          </button>

  return (
    <ButtonStyles>
      { buttonLikes }
      <span>{ post.likes.length }</span>
      <span className="peopleLikedPost">{
        post.likes.length > 2
          ? post.likes.length - 1 + ` other people also like this post`
          : post.likes.length === 1 && ` you like this post`}
      </span>
    </ButtonStyles>
  )
}
