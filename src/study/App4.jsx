import React, { useState } from 'react';

function App4(props) {
    const [ userInfo, setUserInfo ] = useState({
        name: "",
        gender: "",
    });

    const [ inputValue, setInputValue ] = useState({
        name: "",
        gender: "male",
    });


    const handleInputOnChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;
        
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleOkonClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });
        setInputValue({
            ...inputValue,
            name: "",
        });
    }


    // 비동기
    // : 먼저 완료한 사람을 먼저 봐주는 느낌
    // : 미뤄두는 것
    // 동기
    // : 순서대로 불러오는 것
    
    return (
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name} />
            <label htmlFor="male">남</label>
            <input type="radio" id="male" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "male"} value={"male"} />
            <label htmlFor="female">여</label>
            <input type="radio" id="female" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "female"} value={"female"} />
            <button onClick={handleOkonClick}>확인</button>
        </div>
    );
}

export default App4;