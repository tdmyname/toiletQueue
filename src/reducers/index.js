import {combineReducers} from "redux"
import {createReducer} from "redux-act"
import {userLogin, subscribe} from "../actions"
import {setCookies, getCookies} from "../containers/myCookies"
const initialUser = getCookies(userLogin.getType()) != "" && getCookies(userLogin.getType()) != undefined && getCookies(userLogin.getType()) != null ? getCookies(userLogin.getType()) : ""
const login = createReducer({
    [userLogin]: (state, user) => {
        setCookies(userLogin.getType(), user, 1)
        return user
    }
}, initialUser)
const userList = createReducer({
    [subscribe]: (state, users) => {
        return [...users]
    }
}, [])
const merchandiseApp = combineReducers({
    login, userList
})
export default merchandiseApp