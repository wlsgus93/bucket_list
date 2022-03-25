import {createStore, combineReducers} from "redux;"
import bucket from "./modules/bucket";
//리듀서를 엮으려면 리듀서부터 가지고온다
//bucket 에서 reducer를 export default 해줌


//리듀서를 묶은놈을 rootReducer
const rootReducer = combineReducers({bucket});

const store=createStore(rootReducer);

export default store;