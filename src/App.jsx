import React, { useState } from "react";

function App() {
  const [name, setname] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [column, setcolumn] = useState(false);
  const [serach, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddName = () => {
    if (inputValue.trim() !== "") {
      setname([...name, inputValue]);
      setInputValue("");
    }
  };

  const handleShow = () => {
    setcolumn(true);
    setSearch(false);
  };

  const handleSearch1 = () => {
    setcolumn(false);
    setSearch(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchResult("");
  };

  const handleSearch = () => {
    const found = name.map(
      (item) => item.toLowerCase() === searchTerm.toLowerCase()
    );

    console.log(found);

    if (found) {
      setSearchResult(`${searchTerm} exists in the array.`);
    } else {
      setSearchResult(`${searchTerm} does not exist in the array.`);
    }
  };

  return (
    <>
      <button onClick={handleShow}>Add Task</button>
      <button onClick={handleSearch1}>Search Task</button>
      {column && (
        <div>
          <h1>ADD Name List</h1>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter Name..."
            />
            <button onClick={handleAddName}>Add Name</button>
          </div>
          <ul>
            {name.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      )}

      {serach && (
        <div>
          <h1>Search Name in the List</h1>
          <input
            type="text"
            placeholder="Enter name to search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Search</button>
          {searchResult && <p>{searchResult}</p>}
        </div>
      )}
    </>
  );
}

export default App;
