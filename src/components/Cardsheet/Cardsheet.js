import React, { useState } from "react";
import CardsData from "../../Data/CardsData";
import Card from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import "./Cardsheet.css";

function Cardsheet() {
  const [search, setSearch] = useState('')

  const [cards, setcards] = useState(CardsData);
  
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  // get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search 

  const handlesearch = (e) => {
    const getSearch = e.target.value.toLowerCase()
    setSearch(getSearch)
    if(getSearch.length > 0){
      const searchdata = cards.filter((item) => item.keywords.toLowerCase().includes(getSearch));
      setcards(searchdata)
    } else {
      setcards(CardsData)
    }
  }

  return (
  
    <>
      <form className="d-flex" role="search">
        <input
          onChange={(e) => handlesearch(e)}
          className="form-control me-2 bg-transparent text-light align-center w-50  mx-4 my-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        {/* <button className="btn searchbtn btn-outline-success" type="submit">
          Search
        </button> */}
      </form>
      <h1 className="m-4 text-danger border border-danger text-center p-4 searcherror">Search Not found</h1>

      <div className="cards-grid">
        <Card cards={currentCard} search={search} />
      </div>
      <div className="paginate">
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={cards.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Cardsheet;
