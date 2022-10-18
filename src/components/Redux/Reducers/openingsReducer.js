import {FETCH_OPENINGS , FETCH_OPENINGS_FAILURE, FETCH_OPENINGS_SUCCESS} from '../Actions/openingsActions.js'

const initialState = {
    openingsData:[]
}

export const openingReducer = (state = initialState ,action) =>{
    switch(action.type){
        case FETCH_OPENINGS :
            return {
               loading:true, ...state
            }
            break

        case FETCH_OPENINGS_SUCCESS :
            debugger
            return{
                loading:false, ...state, openingsData : action.payload
            }
            break
        case FETCH_OPENINGS_FAILURE :
            return{
                loading:false, error : action.payload
            }
            break

        default:
            return state
    }
}

