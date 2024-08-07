import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './context/NxtWatchContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

class App extends Component {
  state = {lightTheme: true}

  onChangeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{lightTheme, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
