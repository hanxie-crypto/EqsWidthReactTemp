import {
  APPLICATIONADD,
  APPLICATIONDEL,
  FLUSHAPPLICATION,
}
from '../constants/index';




export default function application(state = {
  applist: [],
}, action) {
  switch (action.type) {
    case APPLICATIONADD:

      let tmplist = [
        ...state.applist,
        action.data,
      ]
      return Object.assign({}, state,{
        applist: tmplist
      });
    case FLUSHAPPLICATION: 
      return Object.assign({}, state, {
        applist: action.data,
      });
    case APPLICATIONDEL: 
      for(let i=0;i<state.applist.length;i++){
       
         if(action.id === state.applist[i].id){
           state.applist.splice(i,1);
         }
      }
      let tmplists = [
        ...state.applist
      ]
      return Object.assign({}, state,{
        applist: tmplists
      });
    default:

      return state;
  }
}