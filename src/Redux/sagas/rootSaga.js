import { takeLatest } from "redux-saga/effects";
import { handleGetFilms } from "./handlers/films";
import { getFilms } from "../reducers/films";

export function* watcherSaga() {
  yield takeLatest(getFilms, handleGetFilms);
}
