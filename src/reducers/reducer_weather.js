import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    //thios comes in from the action, but is not a promise as it was there,
    //redux-promise takes care of converting 
    //console.log("Action Reveived", action);

    //Reducers are used to ... reduce data to what we need from requests
    switch (action.type) {
        case FETCH_WEATHER:
            //Works, but old style
            //return state.concat([action.payload.data]);
            //Es6 style with ... 
            return [action.payload.data, ...state]
    }


    return state;
}