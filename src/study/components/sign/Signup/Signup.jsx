import React, { useState } from 'react';

function Signup({ userList, setUserList }) {
    const [signupInputValue, SetSignupInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });
    
    const handleSignupInputOnChange = (e) => {
        
        SetSignupInputValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
     
    };

    const handleSignupButtonOnClick = () => {
        setUserList([
            ...userList,
            signupInputValue,
        ]);
        alert("가입 완료");
        SetSignupInputValue({
            username: "",
            password: "",
            name: "",
            email: "",
        });
    };


    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name="username" placeholder="username" value={signupInputValue.username} onChange={handleSignupInputOnChange}/>
            <input type="password" name="password" placeholder="password" value={signupInputValue.password} onChange={handleSignupInputOnChange} />
            <input type="text" name="name" placeholder="name" value={signupInputValue.name} onChange={handleSignupInputOnChange} />
            <input type="text" name="email" placeholder="email" value={signupInputValue.email} onChange={handleSignupInputOnChange} />
            <div>
                <button onClick={handleSignupButtonOnClick}>가입하기</button>
            </div>
        </div>
    );
}

export default Signup;