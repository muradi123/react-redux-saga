import { combineReducers, createStore, applyMiddleware } from "redux";
import getdata from "../reducers/films";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";
import { AuthReducer } from "../reducers/login";

const reducer = combineReducers({
  filmsData: getdata,
  auth: AuthReducer,
});

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const store = createStore(reducer, {}, applyMiddleware(...middleWare));
sagaMiddleWare.run(watcherSaga);

export default store;
