import React, { useState } from 'react';
import "./style.css";

function BookSearchItems({bookList, setBookTableList}) {
    
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
        <div className="search-items" name="" id="">
            <select name="select" value={searchValue.value} onChange={handleSearchValueOnChange}>
                {
                    searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
                }
            </select>
            <input type="text" value={searchValue.text} name="text" placeholder="조회도서명" onChange={handleSearchValueOnChange} />
            <button onClick={handleSearchButtonOnClick}>조회</button>
        </div>
    );
}

export default BookSearchItems;