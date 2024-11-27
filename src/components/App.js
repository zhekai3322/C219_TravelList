// L07 Exs
import React, { useState } from 'react';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

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

  const handleTogglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
        items={items}
        onTogglePacked={handleTogglePacked}
        onDeleteItem={handleDeleteItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;