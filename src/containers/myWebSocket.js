
let websocket = null;

//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
    console.log("握手");
    websocket = new WebSocket("ws://localhost:8080/wc");
}
else{
    alert('Not support websocket')
}
window.onunload=function () {
    websocket.close()
}
//连接发生错误的回调方法
websocket.onerror = function(){
    console.log("error");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
    console.log("回调");
};

//发送消息
export function send(message){
    console.log("webSocket "+message);
    websocket.send(message);
    console.log("end "+message);
}
export default websocket