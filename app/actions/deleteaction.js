import * as types from '../constants';

export function openDelete() {
    return {
        type: types.OPENDELETE
    };
}

export function closeDelete() {

    return {
        type : types.CLOSEDELETE
    }
}