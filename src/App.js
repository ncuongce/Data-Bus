import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Messages from './components/messages/Messages';
import AddBtn from './components/layout/AddBtn';
import AddMessageModal from './components/messages/AddMessageModal';
import EditMessageModal from './components/messages/EditMessageModal';
import AddChannelModal from './components/channels/AddChannelModal';
import ChannelListModal from './components/channels/ChannelListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddMessageModal />
          <EditMessageModal />
          <AddChannelModal />
          <ChannelListModal />
          <Messages />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
