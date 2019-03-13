import * as types from './actionTypes'
import {API_URL} from './apiUrl'

export function getTopics (todo){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/topics`)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: types.GET_TOPICS , payload: data}))
  }
}

export function getOneTopic (id){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})
    // console.log("get one topic")
    return fetch(`${API_URL}/topics/${id}`)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: types.GET_ONE_TOPIC , payload: data}))
  }
}



export function postOneTopic (topic){
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/topics`, {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({topic})
    }).then(res => res.json())
    .then(data => dispatch({type: types.POST_ONE_TOPIC , payload: data}))

  }

}



export function deleteOneTopic (id){
  let data = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

  }
}
  return dispatch => {

  fetch(`${API_URL}/topics/${id}`,data)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: "@@@" , payload: data})).catch(err => err)
      dispatch({type: types.DELETE_ONE_TOPIC, payload: id})
  }
}



export function deleteOneComment (topic_id , comment_id){
  let data = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

  }
}
  return dispatch => {

  fetch(`${API_URL}/topics/${topic_id}/comments/${comment_id}`,data)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: "@@@" , payload: data})).catch(err => err)
      dispatch({type: types.DELETE_ONE_COMMENT, payload: {topic_id: topic_id , comment_id: comment_id}})
  }
}
