import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Landing } from '@pages'

import { Theme } from '@resources/styles'
import rootReducer from '@reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => (
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <Landing />
    </Provider>
  </ThemeProvider>
)

export default App
