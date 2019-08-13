import {
  GET_MESSAGES,
  SET_LOADING,
  MESSAGES_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
  SEARCH_MESSAGES,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// Get messages from server
export const getMessages = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/messages');
    const data = await res.json();

    dispatch({
      type: GET_MESSAGES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: "Cannot get messages"
    });
  }
};

// Add new message
export const addMessage = message => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/messages', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_MESSAGE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: "Cannot add message"
    });
  }
};

// Delete message from server
export const deleteMessage = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/messages/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_MESSAGE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: "Cannot delete message"
    });
  }
};

// Update message on server
export const updateMessage = message => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/messages/${message.id}`, {
      method: 'PUT',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_MESSAGE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: "Cannot update message"
    });
  }
};

// Search server messages
export const searchMessages = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/messages?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_MESSAGES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: "Cannot search messages"
    });
  }
};

// Set current message
export const setCurrent = message => {
  return {
    type: SET_CURRENT,
    payload: message
  };
};

// Clear current message
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
