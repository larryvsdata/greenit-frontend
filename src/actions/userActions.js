import * as types from './actionTypes'
import {API_URL} from './apiUrl'

export function getOneUser (id){
  return dispatch => {
    dispatch({type: types.LOADING_USERS})

    return fetch(`${API_URL}/users/${id}`)
    .then(res => res.json()
    )
    .then(data =>
      dispatch({type: types.GET_ONE_USER , payload: data}))
  }
}
