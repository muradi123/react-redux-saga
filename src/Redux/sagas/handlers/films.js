import { call, put } from "redux-saga/effects";
import { requestGetFilms } from "../request/films";
import { setFilms } from "../../reducers/films";

export function* handleGetFilms(action) {
  try {
    const response = yield call(requestGetFilms);
    const { data } = response;
    yield put(setFilms(data));
  } catch {
    console.log("error");
  }
}
