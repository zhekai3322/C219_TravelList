import React from 'react';

const Form = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  handleAddItem,
}) => (
  <form className="add-form" onSubmit={handleAddItem}>
    <h3>What do you need to pack?</h3>
    <select
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Item..."
    />
    <button type="submit">Add</button>
  </form>
);

export default Form;