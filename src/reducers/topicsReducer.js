import * as types from '../actions/actionTypes'

const topicsReducer = (state = { topics: [] , oneTopic: {} , loading: false} , action) => {

switch(action.type){

  case types.LOADING_TOPICS:
    // console.log("loading");
    return {
      ...state ,
      loading: true
    }

  case types.GET_TOPICS:
        // console.log("Get topics")
        // console.log(action.payload)
        return {
          ...state ,
          topics: action.payload ,
          loading: false
        }

  case types.GET_ONE_TOPIC:
   // console.log(action.payload );
      return {
        ...state ,
        oneTopic: action.payload ,
        loading: false
      }

  case types.POST_ONE_TOPIC:
      // console.log(action.payload );
      const allTopics=[...state.topics]
      allTopics.push(action.payload );
          return {
            ...state ,
            topics: allTopics ,
            loading: false
          }


    case types.POST_ONE_COMMENT:
         // console.log('Hey post one ')
         // console.log(action.payload)
         let topicsUpdate=[...state.topics];
         let topicIndex = topicsUpdate.findIndex(topic => topic.id === action.payload.topic_id);
         // let topicToBeUpdated = topicsUpdate[topicIndex]
         // console.log(state.oneTopic)

         state.oneTopic.comments.push(action.payload);
         state.oneTopic.users.push(action.payload.user);
         topicsUpdate[topicIndex] = state.oneTopic;

          let aTopic = Object.assign({} , state.oneTopic)
          // console.log(aTopic )
          // console.log(aTopic.users )
         return {
           ...state ,
           oneTopic: aTopic ,
           loading: false
         }

    case types.POST_ONE_REPLY:
         // console.log(action.payload);

        let topicAtHand=Object.assign({} , state.oneTopic);

        let commentsIndex = topicAtHand.comments.findIndex(comment => comment.id === action.payload.comment_id);
        // console.log(topicAtHand.replies[commentsIndex]);
        topicAtHand.replies[commentsIndex].push(action.payload);
        // console.log(topicAtHand.replies[commentsIndex]);
        topicAtHand.reply_users[commentsIndex].push(action.payload.user)

        return {
          ...state ,
          oneTopic: topicAtHand ,
          loading: false
        }

      case types.DELETE_ONE_TOPIC:
         // console.log(action.payload );
         topicsUpdate=[...state.topics];
         topicsUpdate= topicsUpdate.filter(topic => topic.id !== action.payload);
         return {
           ...state ,
           topics: topicsUpdate ,
           loading: false
         }

      case types.DELETE_ONE_COMMENT:
            // console.log(action.payload );
            aTopic = Object.assign({} , state.oneTopic)
            let commentIndex= aTopic.comments.findIndex(comment => comment.id === action.payload.comment_id);
            if(commentIndex < aTopic.comments.length-1)
                {
                   aTopic.users = aTopic.users.slice(0,commentIndex).concat(aTopic.users.slice(commentIndex+1));
                   aTopic.comments = aTopic.comments.slice(0,commentIndex).concat(aTopic.comments.slice(commentIndex+1));
                   aTopic.replies = aTopic.replies.slice(0,commentIndex).concat(aTopic.replies.slice(commentIndex+1));
                   aTopic.reply_users = aTopic.reply_users.slice(0,commentIndex).concat(aTopic.reply_users.slice(commentIndex+1));
                 }
            else {
               aTopic.users = aTopic.users.slice(0,commentIndex);
               aTopic.comments = aTopic.comments.slice(0,commentIndex);
               aTopic.replies = aTopic.replies.slice(0,commentIndex);
               aTopic.reply_users = aTopic.reply_users.slice(0,commentIndex);
            }
            // console.log(aTopic);
            return {
              ...state ,
              oneTopic: aTopic ,
              loading: false
            }

  default:
    return state;


}

}

export default topicsReducer;
