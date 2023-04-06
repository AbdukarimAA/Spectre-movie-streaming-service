import { RootState } from '../../store';

export const isAuthSelector = (state: RootState) => {
    return !!state.auth.data;
};
