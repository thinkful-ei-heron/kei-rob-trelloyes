import './App.css';
import React from 'react';
import STORE from './store';
import List from './List';

function App() {
  let lists = STORE.lists;
  const listOfLists = lists.map(function(list, index) {
    return (
      <List key={index} header={list.header} cards={list.cardIds} />
    )
  });
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listOfLists}
      </div>
    </main>
  );
}

export default App;