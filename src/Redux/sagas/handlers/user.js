import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import { setFilms } from "../../reducers/films";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setFilms(data));
  } catch {
    console.log("error");
  }
}
