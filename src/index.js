import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {subscribe} from "./actions";
import webSocket from "./containers/myWebSocket";
import App from "./containers/App";
import reducers from "./reducers";
import "./css/index.css";

const elem = document.createElement("div")
document.body.appendChild(elem)
let store = createStore(reducers)
//接收webSocket消息并发送action
webSocket.onmessage = function (event) {
    console.log("onmessage " + event.data);
    store.dispatch(subscribe(transReturnList(event.data)))
}
//把接收到的消息格式化为数组
function transReturnList(returnList) {
    if (returnList == "")
        return []
    else
        return returnList.split(",").filter(name => name != "")
}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    elem
)

