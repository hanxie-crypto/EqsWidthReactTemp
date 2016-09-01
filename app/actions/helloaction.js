import * as types from '../constants';

import * as dialog from './dialogaction';
import * as deleteshow from './deleteaction';
let appdata = {};

if(window&&typeof window.getConfigData === 'function') {
  appdata = window.getConfigData();
}
else { //开发环境用
  appdata = require('../../config.json');
}

function execAddApp(data) {
    return {
        type: types.APPLICATIONADD,
        data: data,
    };
}
function execDelApp(id) {
    return {
        type: types.APPLICATIONDEL,
        id: id,
    };
}
export function addApplication(data) {

    return dispatch => {
        dispatch(execAddApp(data));
        if(window&&typeof window.addApp === 'function') {
            window.addApp(data);
        }
        return dispatch(dialog.closeDialog());
    }
    
}
export function deleteApplication(data) {
    return dispatch => {
        if(window&&typeof window.delApp === 'function') {
            window.delApp(data.id);
        }
        return dispatch(execDelApp(data.id));
    }
}

export function flushApplication() {
    return {
        type: types.FLUSHAPPLICATION,
        data: appdata.appdata,
    };
}
function execOpenApp(params) {
    if(window&&typeof window.openApp === 'function') {
        window.openApp(params);
    }
}


export function openApp(params) {

    return dispatch => {
        execOpenApp(params);
        return null;
    }
    
}