import axios from "axios";

export const FETCH_OPENINGS = "FETCH_OPENINGS";
export const FETCH_OPENINGS_SUCCESS = "FETCH_OPENINGS_SUCCESS";
export const FETCH_OPENINGS_FAILURE = "FETCH_OPENINGS_FAILURE";

const OpeningsData = () => async(dispatch) =>{
    try {
        dispatch({
            type: FETCH_OPENINGS
        })
        const res = await axios.get('http://3.144.76.85/interview/jobs/')
        return({
            type:FETCH_OPENINGS_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        return({
            type:FETCH_OPENINGS_FAILURE,
            payload:error.data
        })
    }
        // const request = axios.get(`http://3.144.76.85/interview/jobs/`)
        // return {
        //     type: FETCH_OPENINGS,
        //     payload: request
        // }
}
export default OpeningsData
