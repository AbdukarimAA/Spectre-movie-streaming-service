import { RootState } from '../../store';

export const authSelector = (state: RootState) => {
    return state.auth;
};

export const isAuthSelector = (state: RootState) => {
    return !!state.auth.data;
};
