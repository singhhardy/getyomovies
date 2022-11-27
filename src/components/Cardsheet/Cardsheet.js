import React, { useState } from "react";
import CardsData from "../../Data/CardsData";
import Card from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import "./Cardsheet.css";

function Cardsheet( { }) {
  const [search, setSearch] = useState('')

  const [cards, setcards] = useState(CardsData);
  
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

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
            {/* <h1 className="m-4 text-danger border border-danger text-center p-4 searcherror">Search Not found</h1> */}
      <form className="d-flex m-4 flex-center" role="search">

              <input
                  onChange={(e) => handlesearch(e)}
                className="form-control me-4 bg-transparent text-light searchinput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="dropdown">
              <div className="dropdown-row"></div>
              </div>
              {/* <button className="btn searchbtn btn-outline-success">
                Search
              </button> */}
            </form>

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
