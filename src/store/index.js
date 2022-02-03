import { createStore } from "redux";
import rootReducer from "../service/reducers/index"

const store = createStore(rootReducer)

export default store;