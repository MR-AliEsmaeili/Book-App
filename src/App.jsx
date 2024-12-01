import Layouts from "./layouts/Layouts";

import { books } from "./constants/mockData";
import Books from "./components/Books";
import { useState } from "react";

function App() {
  const [allBooks, setAllBooks] = useState(books);

  return (
    <>
      <Layouts books={allBooks} setbooks={setAllBooks}>
        <Books books={allBooks} setbooks={setAllBooks} />
      </Layouts>
    </>
  );
}

export default App;
