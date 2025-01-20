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

function App7_new(props) {

    const [ bookInputValue, setBookInputValue ] = useState({
        book_name: "",
        author_name: "",
        publisher_name: "",
    });

    const [ bookList, setBookList ] = useState([]);

    const [ bookSearchValue, setBookSearchValue ] = useState({
        search_name: "",
        book_name: "",
        author_name: "",
        publisher_name: "",
    });

    const [ searchBookList, setSearchBookList ] = useState([]);

    const handleInputOnChange = (e) => {
        setBookInputValue({
            ...bookInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegisterOnClick = () => {
        setBookList([
            ...bookList,
            bookInputValue,
        ])
        alert("등록완료");
        setBookInputValue({
            book_name: "",
            author_name: "",
            publisher_name: "",
        });
    };

    const handleSearchInputOnChange = (e) => {
        setBookSearchValue({
            ...bookSearchValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSearchOnClick = () => {
        const bookSearch = bookList.filter(book => {
            console.log(book.book_name.includes(bookInputValue.book_name));
            return console.log(book.book_name.includes(bookInputValue.book_name));
        }
          );
        console.log(bookSearch);
        // setSearchBookList(bookSearch);
        setSearchBookList([
            ...bookList,
            bookSearchValue,
        ]);
        console.log(searchBookList);
    };


    return (
        <div>
            <input type="text" name="book_name" placeholder="도서명" value={bookInputValue.book_name} onChange={handleInputOnChange} />
            <input type="text" name="author_name" placeholder="저자명" value={bookInputValue.author_name} onChange={handleInputOnChange} />
            <input type="text" name="publisher_name" placeholder="출판사명" value={bookInputValue.publisher_name} onChange={handleInputOnChange} />
            <div>
                <button onClick={handleRegisterOnClick}>등록</button>
            </div>
            <input type="text" name="search_name" placeholder="조회도서명" onChange={handleSearchInputOnChange} />
            <div>
                <button onClick={handleSearchOnClick}>조회</button>
            </div>
            <table border="1" cellspacing="0">
                <tbody>
                    <th>도서명</th>
                    <th>저자명</th>
                    <th>출판사명</th>
                    {bookList.map((book) => 
                        <tr>
                            <td>{book.book_name}</td>
                            <td>{book.author_name}</td>
                            <td>{book.publisher_name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
            <select>
                <option>도서명</option>
                <option>저자명</option>
                <option>출판사명</option>
            </select>
            <table border="1" cellspacing="0">
                <tbody>
                    <th>도서명</th>
                    <th>저자명</th>
                    <th>출판사명</th>
                    {searchBookList.map((book) => 
                        <tr>
                            <td>{book.book_name}</td>
                            <td>{book.author_name}</td>
                            <td>{book.publisher_name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App7_new;