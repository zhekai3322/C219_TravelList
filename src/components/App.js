// App.js
import React, { useState } from 'react';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sortOrder, setSortOrder] = useState('inputOrder');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (description) {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setDescription('');
      setQuantity(1);
    }
  };

  const handleUpdateItem = (id, packed) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearItems = () => {
    setItems([]);
  };

  const handleSortItems = (order) => {
    setSortOrder(order);
  };

  const sortedItems = () => {
    switch (sortOrder) {
      case 'inputOrder':
        return items;
      case 'quantity':
        return items.slice().sort((a, b) => a.quantity - b.quantity);
      case 'alphabetical':
        return items.slice().sort((a, b) => a.description.localeCompare(b.description));
        // return items.slice().sort((a, b) => b.description.localeCompare(a.description));
      default:
        return items;
    }
  };

  return (
    <div className="app">
      <h1>My Travel List</h1>
      <Form
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddItem={handleAddItem}
      />
      
      <PackingList
        items={sortedItems()}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
      />
      <div className="sort-and-clear">
        <button onClick={() => handleSortItems('inputOrder')}>Sort by Input Order</button>
        <button onClick={() => handleSortItems('quantity')}>Sort by Quantity</button>
        <button onClick={() => handleSortItems('alphabetical')}>Sort by Alphabetical</button>
        <button onClick={handleClearItems}>Clear All Items</button>
      </div>
      <Stats items={items} />
    </div>
  );
}

export default App;