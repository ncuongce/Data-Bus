import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import channelReducer from './channelReducer';

export default combineReducers({
  message: messageReducer,
  channel: channelReducer
});
