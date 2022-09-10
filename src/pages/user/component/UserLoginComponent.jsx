import React, {useEffect, useState} from 'react';
import '../../../style/user/UserLogin.css'


const UserLoginComponent = ({onButtonClick}) => {


    return (
        <div>
            <h2 style={{ paddingTop: "50px", textDecorationLine: "underline" }}>User Info</h2>
            <ul>
                <li >

                    <form>
                        <label>Name</label> <br />
                        <input type="text" placeholder='enter your name' name='name' style={{ marginBottom: "50px" }} /> <br />
                        <label>Surname</label><br />
                        <input type="text" placeholder='enter your surname' name='surname' />
                    </form>

                </li>
                <li style={{ marginLeft: "50px" }}>
                    <form>
                        <label>Contact</label> <br />
                        <input type="num" placeholder='enter your contact number' name='name' style={{ marginBottom: "50px" }} /> <br />
                        <label>E-mail</label><br />
                        <input type="email" placeholder='enter your email address' name='email' />
                    </form>
                </li>

                <li style={{ marginLeft: "50px" }}>
                    <form>
                        <label>Password</label> <br />
                        <input type="text" placeholder='enter your password' name='confirm-password' style={{ marginBottom: "50px" }} /> <br />
                        <label>Confirm Password</label><br />
                        <input type="password" placeholder='confirm your password' name='password' />
                    </form>
                </li>
            </ul>
            <button onClick={onButtonClick}>Submit</button>
        </div>
    );
};

export default UserLoginComponent;