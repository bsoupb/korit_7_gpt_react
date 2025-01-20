/*
    도서정보 등록 및 조회

    도서명, 저자명, 출판사명 입력
    bookList에 저장

    table
    tbody
    tr
    td

    컴퍼넌트 (등록 / 조회)
    +) 검색 기능 (검색 조건 달라지게)
*/
import React, { useState } from 'react';
import "./styles/app7.css";

function App7(props) {
    const [ bookList, setBookList ] = useState([]);

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
    
    const [ bookTableList, setBookTableList ] = useState([]);
    const [searchValue, setSearchValue ] = useState({
        select: "bookName",
        text: "",
    });

    const searchOptions = [
        {
            id: 1,
            label: "도서명",
            value: "bookName",
        },
        {
            id: 2,
            label: "저자명",
            value: "author",
        },
        {
            id: 3,
            label: "출판사명",
            value: "publisher",
        }
    ];

    const handleSearchValueOnChange = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSearchButtonOnClick = () => {
        if(!searchValue.text.trim()) {
            setBookTableList(bookList);
            return;
        }
        
        const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text));
        setBookTableList(foundBooks);

    };

    return (
        <div className='container'>
            <div>
                <h1>도서정보 등록</h1>
                <div className='register-input'>
                    <input type="text" name="bookName" placeholder="도서명" value={registerInputValue.bookName} onChange={handleRegisterInputOnChange} />
                    <input type="text" name="author" placeholder="저자명" value={registerInputValue.author} onChange={handleRegisterInputOnChange} />
                    <input type="text" name="publisher" placeholder="출판사명" value={registerInputValue.publisher} onChange={handleRegisterInputOnChange} />
                    <button onClick={handleRegisterButtonOnClick}>등록</button>
                </div>
            </div>
            <div>
                <h1>도서정보 조회</h1>
                <div className="search-items" name="" id="">
                    <select name="select" value={searchValue.value} onChange={handleSearchValueOnChange}>
                        {
                            searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
                        }
                    </select>
                    <input type="text" value={searchValue.text} name="text" placeholder="조회도서명" onChange={handleSearchValueOnChange} />
                    <button onClick={handleSearchButtonOnClick}>조회</button>
                </div>
                <table className="book-table">
                    <thead>
                        <th>도서명</th>     
                        <th>저자명</th>
                        <th>출판사명</th>
                    </thead>
                    <tbody>
                        {bookTableList.map((book) => 
                            <tr>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.publisher}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App7;