import * as types from '../actions/actionTypes'

const usersReducer = (state = { users: [] , oneUser: {} , loading: false} , action) => {

switch(action.type){

  case types.LOADING_USERS:
    // console.log("loading");
    return {
      ...state ,
      loading: true
    }

  case types.GET_ONE_USER:
    // console.log(action.payload );
        return {
          ...state ,
          oneUser: action.payload ,
          loading: false
        }


    default:
      return state;


  }

  }

  export default usersReducer;
