import { FaSearch } from "react-icons/fa";

const SearchBox = ({search , setSearch , searchHandler}) => {
    return (    <div className="flex justify-center items-center my-3">
    <input type='text'
      className=" text-gray-700 focus:outline-none p-2 rounded-s-lg"
      placeholder="جستجو"
      value={search}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
    />
    <button className=" bg-slate-800 w-10 h-10  p-2 rounded-e-lg" onClick={searchHandler} >
      <FaSearch />
    </button>
  </div> );
}
 
export default SearchBox;