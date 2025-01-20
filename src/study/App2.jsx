import { useState } from "react";

/**
 * useState 상태관리
 */
function App2() {
    // useState(): 함수
    const [ num, setNum ] = useState(0);
    // const numState = useState(0);

    // 재호출이 일어나지 않아도 될 경우 일반 변수
    let number = 0;

    console.log(num);
    console.log(number);

    // cosnt numState = useSatae(0);
    // const num = numSatae[0];
    // const setNum = numState[1];
    // const [ num, setNum ] = useState(0);

    const handleIncreaseOnClick = () => {
        if(num < 9) {
            setNum(num + 1);
        }
    }

    const handleDecreaseOnclick = () => {
        if(num < 0) {
            setNum(num - 1);
        }
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnclick}>1감소</button>
    </>
}

export default App2;