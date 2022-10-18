import { createStore , combineReducers , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { openingReducer } from "../Reducers/openingsReducer";

const rootReducer = combineReducers({
    openingReducer : openingReducer
})

const initialState = {}
const middleware = [thunk]

const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store

