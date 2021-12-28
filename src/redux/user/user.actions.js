import * as actionTypes from './user.constants';
//! user nhận được từ onAuthStateChanged
export const setCurrentUser = (user) => ({
    type: actionTypes.SET_CURRENT_USER,
    payload: user
});

