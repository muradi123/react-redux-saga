import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { getFilms } from "../reducers/films";

export function* watcherSaga() {
  yield takeLatest(getFilms, handleGetUser);
}
