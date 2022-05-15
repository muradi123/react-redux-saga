import { combineReducers, createStore, applyMiddleware } from "redux";
import getdata from "../reducers/films";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";
import { AuthReducer } from "../reducers/login";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  filmsData: getdata,
  auth: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const store = createStore(persistedReducer, {}, applyMiddleware(...middleWare));
sagaMiddleWare.run(watcherSaga);

const persistor = persistStore(store);

export default store;
export { persistor };
