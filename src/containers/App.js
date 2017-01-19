/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react";
import Login from "../components/Login";
import UserList from "../components/UserList";
import MyButton from "../components/MyButton";
import {userLogin} from "../actions";
import {connect} from "react-redux";
import {send} from "./myWebSocket";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.subscribe = this.subscribe.bind(this)
    }

//向WebSocket发送消息
    subscribe() {
        send(this.props.user)
    }

    render() {
        const {user, userList, dispatch}=this.props
        return (
            <div className="main">
                <div className="login"><Login
                    user={user}
                    loginOnClick={user => dispatch(userLogin(user))}
                    outLoginOnClick={user => dispatch(userLogin(user))}/></div>
                <UserList className="show" userList={userList}/>
                <MyButton className="btn" user={user} userList={userList} subscribe={this.subscribe}/>
                <div className="black">北京亚大</div>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        user: state.login,
        userList: state.userList
    }
}
const NewApp = connect(mapStateToProps)(App)
export default NewApp