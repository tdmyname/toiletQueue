/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
const MyButton = ({user, userList, subscribe}) => {
    let buttonValue
    if (!userList.includes(user)) {
        buttonValue = "预约"
    } else if (userList[0] == user) {
        buttonValue = "完成"
    } else {
        buttonValue = "取消预约"
    }
    return <button className="btn" onClick={() => subscribe(user)}>{buttonValue}</button>
}
export default MyButton