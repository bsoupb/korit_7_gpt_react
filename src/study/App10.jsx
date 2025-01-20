import React, { useEffect, useState } from 'react';

function App10(props) {
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    
    const unmount = () => {
        console.log("장착해제됨");
    }
    // -> 사라지는 것 

    const mount = () => {
        console.log("장착됨2");
        return unmount;
    }
    // -> 나타나는 것

    // []: 의존성 (없으면 랜더링 될 때마다 동작) -> 상태 변화가 있을 때 mount가 동작
    useEffect(mount);
    // mount 할 함수 등록
    // useEffect(mount, []);

    useEffect(() => {
        console.log(num1);
        setNum2(num1 + 100);
    }, [num1]);

    useEffect(() => {
        console.log(num2);
    }, [num2]);
    // -> num2의 상태가 변할 때마다 실행

    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]);
    // -> 둘 중 하나라도 상태가 변하면 실행

    useEffect(() => {
        console.log("마운트");
    }, []);
    // -> 최초의 한 번만 실행

    const handleOnClick = () => {
        setNum1(num1 + 10);
    };

    console.log("???????");

    return (
        <div>
            <h1>Num1: {num1}</h1>        
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>        
        </div>
    );
}

export default App10;