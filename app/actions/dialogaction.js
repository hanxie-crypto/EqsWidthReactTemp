import * as types from '../constants';

export function openDialog() {
    return {
        type: types.OPENDIALOG
    };
}

export function closeDialog() {

    return {
        type : types.CLOSEDIALOG
    }
}