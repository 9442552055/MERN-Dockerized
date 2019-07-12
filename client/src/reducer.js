var initState = {
    apiResponse: "",
    dbResponse: ""
};


export default function (state = initState, action) {
    console.log(action);
    switch (action.type) {
        case "GET_API_STATUS_SUCCESS":
            return { ...state, apiResponse: action.response.message };
        case "GET_DB_STATUS_SUCCESS":
            return { ...state, dbResponse: action.response.message };
        default:
            return state;
    }
}