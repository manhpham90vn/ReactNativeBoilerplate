import { all } from 'redux-saga/effects';
import authSaga from 'src/redux/sagas/authSaga';
import homeSaga from 'src/redux/sagas/homeSaga';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
