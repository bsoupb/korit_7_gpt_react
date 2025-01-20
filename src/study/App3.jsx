import React, { useState } from 'react';

function App3(props) {
    const [ name, setName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ nameInputValue, setNameInputValue ] = useState("");
    const [ genderInputValue, setGenderInputValue ] = useState("male");

    console.log(nameInputText);

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
    }
    
    const handleGenderInputOnChange = (e) => {
        setGenderInputValue(e.target.value);
    }

    const handleOkonClick = () => {
        setName(nameInputValue);
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여");
    }

    // 비동기
    // : 먼저 완료한 사람을 먼저 봐주는 느낌
    // : 미뤄두는 것
    // 동기
    // : 순서대로 불러오는 것
    
    return (
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue} />
            <label htmlFor="male">남</label>
            <input type="radio" id="male" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "male"} value={"male"} />
            <label htmlFor="female">여</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "female"} value={"female"} />
            <button onClick={handleOkonClick}>확인</button>
        </div>
    );
}

export default App3;