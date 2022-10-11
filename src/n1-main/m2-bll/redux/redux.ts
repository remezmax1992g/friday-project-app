import {combineReducers, legacy_createStore as createStore} from "redux";
import {appReducer} from "../reducers/reducer";

const rootReducer = combineReducers({
    app: appReducer
})

export const appStore = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store // for dev