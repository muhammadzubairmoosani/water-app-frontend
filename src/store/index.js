import React, { useReducer, useMemo } from 'react'
import { authReducer, authInitialState } from './reducers'
import { StoreContext } from '../service/helpers'

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce(
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

const initialState = { authInitialState };
const rootReducer = combineReducers({ authReducer, abc: { name: 'hello' } });


export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const store = useMemo(() => ({ state, dispatch }), [state]);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};