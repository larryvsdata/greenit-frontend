import * as types from './actionTypes'
import {API_URL} from './apiUrl'

export function postOneReply (topic_id , comment_id , reply){

  // console.log(topic_id , comment_id , reply);
  return dispatch => {
    dispatch({type: types.LOADING_TOPICS})

    return fetch(`${API_URL}/topics/${topic_id}/comments/${comment_id}/replies`, {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({reply})
    }).then(res => res.json())
    .then(data => dispatch({type: types.POST_ONE_REPLY , payload: data}))

  }

}
