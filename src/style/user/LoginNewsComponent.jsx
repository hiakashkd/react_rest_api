import React from "react";


const LoginNewsComponent =({newsData})=>{
    return(
        <div>
            <h1>
                {newsData.heading}
            </h1>
            <h4>
                {newsData.subHeading}
            </h4>
        </div>
    )
}

export default LoginNewsComponent