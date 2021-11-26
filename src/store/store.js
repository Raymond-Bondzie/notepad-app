import { createStore } from "redux";
import noteReducers from "../reducers/noteReducers";


 const store = createStore(noteReducers)


 export default store;