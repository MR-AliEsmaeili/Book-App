import { useState } from "react";
import {books as allBooks} from '../constants/mockData'
import SearchBox from "../components/SearchBox";

const Layouts = ({ children, books ,setbooks}) => {
  const likedBook = books.filter((book) => book.isLiked);
  const [search , setSearch]=useState([])
  const searchHandler = ()=>{
    if(search){
      const newBooks = books.filter((book)=> book.title.toLowerCase().includes(search))
      setbooks(newBooks)
    }
    else{

      setbooks(allBooks)
    }
  }
  return (
    <>
      <header className="border-gray-500 p-4 rounded-2xl shadow-slate-100/50 shadow-sm bg-slate-800 text-white font-extrabold my-2">
        <h3 className=" text-center">مدیریت کتابخانه</h3>
      </header>
      {/* searchBox - component */}
   <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
      {/* body components */}
      <div className="flex flex-row justify-around ">
        <div>{children}</div>
        <div className="border border-white py-4 px-8 m-4 rounded-lg bg-slate-800">
          {likedBook.length == 0 ? (
            <div>
              <p>کتابی برای نمایش وجود ندارد</p>
              {console.log(likedBook)}
            </div>
          ) : (
            <div>
              {likedBook.map((book) => (
                <ul className="flex flex-row p-3">
                  <li>
                    <img src={book.image} alt={book.title} />
                  </li>
                  <div className="flex flex-col pr-5">
                    <li>{book.title}</li>
                    <li>{book.pages}</li>
                  </div>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="border-gray-500 p-4 rounded-2xl shadow-slate-100/50 shadow-sm bg-slate-800 text-white font-extrabold my-2">
        <h3 className="font-bold text-center">🤍 Developed with </h3>
      </footer>
    </>
  );
};

export default Layouts;
