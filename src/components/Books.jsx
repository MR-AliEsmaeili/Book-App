import { FaHeart } from "react-icons/fa";

const Books = ({ books, setbooks }) => {
  const handleclick = (id) => {
    setbooks((s) =>
      s.map((b) => (b.id === id ? { ...b, isLiked: !b.isLiked } : b))
    );
  };
  return (
    <>
      {books.map((book) => (
        <div
          className="rounded-xl justify-between flex my-3 p-2 shadow-sm shadow-indigo-400/70 bg-slate-800"
          key={book.id}
        >
             <img
            className="w-12 mx-2 flex-1/6"
            src={book.image}
            alt={book.title}
          />
          <div className="flex flex-col  mx-4 flex-1/6">
            <h3 className="font-extrabold">{book.title}</h3>
            <p>{book.pages}</p>
            <p>{book.author}</p>
          </div>
          <div className="mx-2   flex-1/12">
            <span
              className="cursor-pointer"
              onClick={() => handleclick(book.id)}
            >
              <FaHeart color={book.isLiked ? "red" : ""} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Books;
