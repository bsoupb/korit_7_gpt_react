import React from 'react';

/*
    콜백함수: 매개변수로 전달되어지는 함수, 그 함수 안에서 다시 호출

    비동기(대기하고 있는 상태, 나중에 처리)

    Promise(resolve, reject)
    then, catch, finally

    async, await
    try, catch, finally

*/


function App11(props) {
 /*
    setTimeout(() => {
        console.log("1");
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 2000);
    }, 3000);
  */

    // resolve 결정하다
    // reject 거부하다
    // Promise -> 클래스

    const isSuccess = false;
    const isSuccess2 = true;

    console.log("1번");
    
    // Promise 생성자가 생성이 되어지면 안에서 즉시 실행
    // resolve -> 정상처리
    // reject -> 오류처리
    const p1 = new Promise((resolve, reject) => {
        console.log("Promise1 생성!!");

        if(isSuccess) {
            resolve();
        } else {
            reject();
        }   
    });
    
    p1.then(() => {
        console.log("p1 then 호출");
    }).catch(() => {
        console.log("p1 catch 호출");
    });
    

    console.log("2번");
    
    const p2 = new Promise((resolve, reject) => {
        console.log("Promise2 생성!!");

        if(isSuccess2) {
            resolve();
        } else {
            reject();
        }   
    });

    // resolve 호출
    p2.then(() => {
        console.log("p2 then 호출");
    }).then(() => {
        console.log("p2 2번째 then 호출");
    });;

    const p3 = new Promise((resolve, reject) => {
        console.log("Promise3 생성!!");

        const response = {
            status: 200,
            data: {
                username: "aaa",
                password: "1234",
            },
        }

        if(true) {
            resolve({response});    // key값과 value값 이름이 같을 때 하나만 적어도 됨
        } else {
            reject();
        }   
    });

    p3.then((r) => {
        console.log(r);
        if(true) {
            throw new Error("오류!!!");
        }
        return {
            response: {
                ...r.response,
                data: {
                    ...r.response.data,
                    name: "홍길동",
                    email: "aaa@gmail.com",
                }
            }
        }
    }).then((r) => {
        console.log(r);
    }).catch((error) => {
        console.error(error);
    });

    const p4 = new Promise((resolve, reject) => {
        console.log("Promise4 생성!!");

        const response = {
            status: 400,
            data: {
                errorMessage: "문자열 형식이 맞지 않습니다.",
            },
        }

        if(false) {
            resolve({response});    // key값과 value값 이름이 같을 때 하나만 적어도 됨
        } else {
            reject(new Error(JSON.stringify({response})));
        }   
    });

    p4.catch((error) => {
        console.error(error);
    });

    // -> 비동기 (then 나중으로 미뤄짐 [예약/정의만 해둠. 즉시 실행X])

    return (
        <div>
            
        </div>
    );
}

export default App11;
