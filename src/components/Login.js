/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
//登陆时弹出输入窗口
const userName = () => {
    return prompt("请输入用户名").trim()
}
const Login = ({user, loginOnClick, outLoginOnClick}) => {
    let MyButton
    //有用户名显示注销 否则显示登陆
    if (user !== "") {
        MyButton = <a href="#" onClick={e => {
            e.preventDefault()
            outLoginOnClick("")
        }}>注销</a>
    } else {
        MyButton = <a href="#" onClick={e => {
            e.preventDefault()
            loginOnClick(userName())
        }}>登陆</a>
    }
    return (
        <div>
            <span style={{float: 'left', marginLeft: '42%'}}>上厕所请排队</span>

            <div style={{float: 'right', marginRight: '20px'}}><span style={{marginRight: '10px'}}>{user}</span>
                {MyButton}</div>
        </div>
    )
}
export default Login