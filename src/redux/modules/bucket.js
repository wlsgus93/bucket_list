// bucket.js

// Actions
const LOAD = 'my-app/widgets/LOAD'; 
const CREATE = 'bucket/CREATE';

//맨처음에 초기값을 정해줘야됌
const initialState = {
    list:["영화관 가기", "매일 책읽기", "수영 배우기"],

};

// Action Creators
export function createBucket(bucket){
    return {type:CREATE, bucket:bucket}
}
//bucket 데이터를 받아와야죠~
// export function loadWidgets() {
//     return {
//         type: LOAD
        
//     };
// }

// export function createWidget(widget) {
//     return {
//         type: CREATE,
        
//         widget
//     };
    //return { type : CREATE,widjet}
        // {widjet:widjet} = > {widjet}
}

// export function updateWidget(widget) {
//     return {
//         type: UPDATE,
//         widget
//     };
// }

// export function removeWidget(widget) {
//     return {
//         type: REMOVE,
//         widget
//     };
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/CREATE":
            {
                const new_bucket_list=[...initialState, action.bucket];
                return{list: new_bucket_list };
            }
        // do reducer stuff
        // 타입별로 어떤케이스를 정해주면 되겠구나..
        default:
            return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
//middleware입니다~