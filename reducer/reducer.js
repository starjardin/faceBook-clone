import React, { useReducer, createContext, useEffect } from 'react'
import postsData from '../postsData.json'
import userData from '../userData.json'
  
const initialState = {
  posts: [...postsData],
  users: [...userData],
  loading : true,
  currentUser: {currentUserId : "121212"}
}

export const ACTIONS = {
  LIKE_POST : "like_post",
  ADD_NEW_POST : "add_new_post",
  ADD_COMMENTS: "add_comments",
  LOADING_DATA: "loading_data",
  UPDATE_CURRENT_USER: "update_current_user",
  UNLIKE_POST : "unlike_post"
}

const reducerFunc = (state, action) => {
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({ type: "LOADING_DATA" })
  //   }, 1000)
  // }, [])

  const { users, posts, currentUser } = state
  switch (action.type) {
    // case "LOADING_DATA": {
    //   return {
    //     ...state,
    //     laoding: false,
    //     posts: postsData,
    //     users : userData
    //   }
    // }
    case ACTIONS.LIKE_POST: {
      const addLikes = posts.map(post => {
        if (post.postId === action.postId) {
          return {
            ...post,
            likes : [...post.likes, action.like]
          }
        }
        return post
      })
      return {
        ...state,
        posts : addLikes
      }
    }
    case ACTIONS.UNLIKE_POST: {
      const newPost = posts.map(post => {
        if (post.postId === action.postId) {
          return {
            ...post,
            likes : post.likes.filter(like => like.userId !== currentUser.currentUserId)
          }
        }
        return post
      })
      return {
        ...state,
        posts : newPost
      }
    }
    case ACTIONS.ADD_NEW_POST : {
      return { ...state, posts : action.posts }
    }
    case ACTIONS.ADD_COMMENTS : {
      const commentedPost = posts.map(post => {
        if (post.postId === action.id) {
          return {
            ...post,
            comments : [...post.comments, action.newComment]
          }
        }
        return post
      })
      return {
        ...state,
        posts: commentedPost
      }
    }
    case ACTIONS.UPDATE_CURRENT_USER : {
      const newUserArray = users.map(user => {
        if (user.userId === state.currentUser.currentUserId) {
          return {
            ...user,
            userName: action.userName,
            profilePictureUrl : action.profilePictureUrl
          }
        }
        return user
      })
      return {
        ...state,
        users : newUserArray
      }  
    }
  }
  return state
}


const PostContext = createContext()

function PostContainerProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  console.log(state);
  return (
    <PostContext.Provider value={{ dispatch, state }}>
      {children}
    </PostContext.Provider>
  )
}
export { PostContainerProvider, PostContext }