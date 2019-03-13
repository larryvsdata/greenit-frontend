import * as types from '../actions/actionTypes'

const commentsReducer = (state = { comments: [] , oneComment: {} , loading: false} , action) => {

switch(action.type){

  case types.LOADING_COMMENTS:
    // console.log("loading");
    return {
      ...state ,
      loading: true
    }

  case types.GET_ONE_COMMENT:
  // console.log(action.payload );
      return {
        ...state ,
        oneComment: action.payload ,
        loading: false
      }

  case types.GET_COMMENTS:
      // console.log(action.payload );
          return {
            ...state ,
            comments: action.payload ,
            loading: false
          }

   case types.POST_ONE_COMMENT:
      // console.log('Hey post one ')
      // console.log(action.payload)
       const allComments=[...state.comments]
       allComments.push(action.payload );
       return {
             ...state ,
             comments: allComments ,
             loading: false
           }


  default:
    return state;

}


}


export default commentsReducer;
