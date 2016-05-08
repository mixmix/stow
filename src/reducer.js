import {fromJS, Map} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  listings: {},
  currentUser: {},
  errorMsg: {},
  currentUserTest: {user_ID:2,username:'keanu',location:'wellington',details:'hi there i need more money so come put stuff in my roof. wont steal it promise',lastName:'carnevale',email:'nope@yepp.bike'}
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  	case 'LOAD_LISTINGS':
  		return state.set('listings', fromJS(action.listings)) // shouldn't need to use fromJS here ?   just make all your state immutable everywhere, fromJS might cause trouble
    case 'LOGOUT':
      return state.set('currentUser', Map({}))
    case 'SET_CURRENT_USER':
      return state.set('currentUser', fromJS(action.user))
    default:
      return state
  }
}
