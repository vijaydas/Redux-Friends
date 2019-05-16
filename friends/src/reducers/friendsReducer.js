import {
    /* we need our action types here*/
  
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
  } from "../actions";



const initialState = {
    friends: [],
    isLoading: false,
    error: null
   };
  
  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
  
      case FETCH_FRIENDS_START:
        return {
          ...state,
          isLoading: true,
          //error: ""
        };
      case FETCH_FRIENDS_SUCCESS:
        return {
          ...state,
          friends: [...state.characters, ...action.payload],
          isLoading: false
          //error: "",
                };
      case FETCH_FRIENDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  