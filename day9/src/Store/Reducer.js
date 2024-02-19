
import { INCREASE, DECREASE, CHANGE } from "./Action";

const initialState = {
    count: 0,
    
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                count: state.count + 1
            }
        case DECREASE:
            return {
                count:state.count-1
            }
        default:
            return state
    }
}

const defaultTheme = {
    theme:"black"
}

const ThemeReducer = (state = defaultTheme, action) => {
    switch (action.type) {
            case CHANGE:
            return {
                theme: state.theme==="black"?"white":"black"
            }
        default:
            return { state }
            
    }
}

export default Reducer;
export { ThemeReducer };