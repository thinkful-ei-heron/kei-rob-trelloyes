import './List.css';
import React from 'react';
import Card from './Card';
import STORE from './store';

function List(props) {
  const cardList = props.cards.map(function(card, index) {
    return (
      <Card key={card} title= {STORE.allCards[card].title} content= {STORE.allCards[card].content}/>
    )
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardList}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
