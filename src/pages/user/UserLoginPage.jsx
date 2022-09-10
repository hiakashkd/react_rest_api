import React, {useState} from 'react'
import UserLoginComponent from "./component/UserLoginComponent";
import apiClient from "../../data/network/ApiClient";
import LoginNewsComponent from "../../style/user/LoginNewsComponent";


const UserLoginPage = () => {

    const [newsData, setNewsData] = useState({
        heading: "",
        subHeading: ""
    })


    const fetchData = async () => {
        const result = await apiClient.get("fetch-user-login-new")
        setNewsData(result.data.data)
    }


    return (
        <div>

            <LoginNewsComponent
                newsData={newsData}/>

            <UserLoginComponent
                onButtonClick={fetchData}
            />
        </div>
    )
}

export default UserLoginPage