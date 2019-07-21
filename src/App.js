import React from 'react';
import './App.css';
import Header from './components/header'
import Left from './components/left'
import Main from './components/main'
import store from './store';
import actionTypes from './actionTypes'

class App extends React.Component {
  componentDidMount() {
    store.dispatch({type: actionTypes.INIT_LOAD_DATA_ASYNC});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Left />
        <Main />
      </div>
    );
  }
}

export default App;
