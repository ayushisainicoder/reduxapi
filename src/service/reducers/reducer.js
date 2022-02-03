import { CLICK_TO_IMAGE } from "../constants";

const initial_state = {
    imageLink: []
}

export default function photosView(state = [], action){
    switch (action.type) {
        case "CLICK_TO_IMAGE":
            console.log("reducer",action);
            return[
                ...state,
                {imageLink: action.data}
            ]
            break;
    
        default:
            return state
    }
}

