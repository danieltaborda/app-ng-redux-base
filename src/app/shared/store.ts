import { IItem } from './item';
import { ACTIONS } from '../shared/actions';

export interface IAppState {
    items: IItem[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    items: [],
    lastUpdate: null
};

export function rootReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, state);
    }
    return state;
}
