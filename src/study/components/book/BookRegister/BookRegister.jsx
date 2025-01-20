import React, {useState} from 'react';
import "./style.css";

function BookRegister({bookList, setBookList}) {

    const [ registerInputValue, setRegisterInputValue ] = useState({
        bookName: "",
        author: "",
        publisher: "",
    });

    const handleRegisterInputOnChange = (e) => {
        setRegisterInputValue({
            ...registerInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegisterButtonOnClick = () => {
        setBookList([
            ...bookList,
            registerInputValue,
        ])
        alert("등록완료");
        setRegisterInputValue({
            bookName: "",
            author: "",
            publisher: "",
        });
    };

    return (
        <div>
            <h1>도서정보 등록</h1>
            <div className='register-input'>
                <input type="text" name="bookName" placeholder="도서명" value={registerInputValue.bookName} onChange={handleRegisterInputOnChange} />
                <input type="text" name="author" placeholder="저자명" value={registerInputValue.author} onChange={handleRegisterInputOnChange} />
                <input type="text" name="publisher" placeholder="출판사명" value={registerInputValue.publisher} onChange={handleRegisterInputOnChange} />
                <button onClick={handleRegisterButtonOnClick}>등록</button>
            </div>
        </div>
    );
}

export default BookRegister;