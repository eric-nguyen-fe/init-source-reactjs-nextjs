import { all } from 'redux-saga/effects';

/* ------------- Sagas ------------- */

import UserSagas from './user';

/* ------------- Connect all Sagas to root ------------- */

export default function* rootSaga() {
  yield all([
    ...UserSagas,
  ]);
}