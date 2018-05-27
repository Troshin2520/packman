import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {game} from './middleware/game';
import Results from './components/results/Results';
import Pacman from './components/pacman/Pacman';
import Spider from './components/spider/Spider';
import Field from './components/field/Field';
import './App.less';
import {ACTION_CHANGE_PACMAN_DIRECTION} from './constants';

const store = createStore(
  reducer,
  applyMiddleware(game),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  constructor(props) {
    super(props);
    this.next = 1;
  }

  componentDidMount() {
    document.addEventListener('keydown', function (e) {
      store.dispatch({type: ACTION_CHANGE_PACMAN_DIRECTION, payload: e.code});
    });
  }


  render() {
    const state = store.getState();
    const spiders = Object.keys(state.spiders).map((color, i) => {
      return <Spider key={`s${i}`} color={color}/>;
    });
    return (<Provider store={store}>
      <div className="App">
        <Pacman/>
        {spiders}
        <Field/>
        <Results/>
      </div>
    </Provider>);
  }
}

export default App;
