import React from 'react'
import ReactDOM from 'react-dom/client'
import {legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./Store/Reducers/index.js";
import App from './App.jsx'

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
