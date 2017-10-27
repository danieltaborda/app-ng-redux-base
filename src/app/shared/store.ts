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
        case ACTIONS.ITEM_ADD:
            return Object.assign({}, state, {
                items: state.items.concat(Object.assign({}, action.item))
            });
        case ACTIONS.ITEM_DELETE:
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.id)
            });
    }
    return state;
}
