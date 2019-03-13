import * as types from './actionTypes'
import {API_URL} from './apiUrl'

export function getOneComment (id){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/comments/${id}`)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: types.GET_ONE_COMMENT , payload: data}))
  }
}

export function postOneComment (topic_id ,  comment){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/topics/${topic_id}/comments`, {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({comment})
    }).then(res => res.json())
    .then(data => dispatch({type: types.POST_ONE_COMMENT , payload: data}))

  }

}




export function getComments (){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/comments`)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: types.GET_COMMENTS , payload: data}))
  }
}
