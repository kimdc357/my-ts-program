import { HIDDENALERT, MESSAGE } from './types'
export const homePaheState = {
    message: "",
    hiddenAlert: false,
}

export interface IHomePageState {
    message: string,
    hiddenAlert: boolean,
}


function homep(state = homePaheState, action: any) {

    switch (action.type) {
        case HIDDENALERT:
            state.hiddenAlert = action.data;
            return { ...state };
        case MESSAGE:
            state.message = action.data;
            return { ...state };
        default:
            return state;
    }
}



export default homep