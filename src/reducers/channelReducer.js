import {
  GET_CHANNELS,
  ADD_CHANNEL,
  DELETE_CHANNEL,
  SET_LOADING,
  CHANNELS_ERROR
} from '../actions/types';

const initialState = {
  channels: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        loading: false
      };
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.payload],
        loading: false
      };
    case DELETE_CHANNEL:
      return {
        ...state,
        channels: state.channels.filter(channel => channel.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CHANNELS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
