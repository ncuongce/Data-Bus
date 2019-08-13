import {
  GET_CHANNELS,
  ADD_CHANNEL,
  DELETE_CHANNEL,
  SET_LOADING,
  CHANNELS_ERROR
} from './types';

// Get channels from server
export const getChannels = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/channels');
    const data = await res.json();

    dispatch({
      type: GET_CHANNELS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CHANNELS_ERROR,
      payload: "Cannot get channels"
    });
  }
};

// Add channel to server
export const addChannel = channel => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/channels', {
      method: 'POST',
      body: JSON.stringify(channel),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_CHANNEL,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CHANNELS_ERROR,
      payload: "Cannot add channel"
    });
  }
};

export const deleteChannel = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/channels/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_CHANNEL,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: CHANNELS_ERROR,
      payload: "Cannot delete channel"
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
