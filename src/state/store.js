import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';  
import reducers from "./reducers";
import {loadState, saveState} from './localStorage';

const persistedState = loadState();

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(()=>{
  saveState(store.getState())
})