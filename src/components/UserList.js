/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
const UserList = ({userList}) => {
    if (userList.length < 1) {
        return <div>没有人</div>
    } else {
        return (
            <div>
                <span className="showUser">当前正在使用:<span style={{color: "red"}}>{userList[0]}</span></span>
                <ul>
                    {userList.map((user, index) => {
                        if (index > 0) {
                            return <li key={user}>{user}</li>
                        }
                    })}
                </ul>
            </div>)
    }
}
export default UserList