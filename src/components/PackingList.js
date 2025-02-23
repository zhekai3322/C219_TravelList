import React from 'react';

const PackingList = ({
  items,
  onUpdateItem,
  onDeleteItem,
}) => (
  <div className="list">
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          style={{ textDecoration: item.packed ? 'line-through' : 'none' }}
        >
          <input
            type="checkbox"
            checked={item.packed}
            onChange={(e) => onUpdateItem(item.id, e.target.checked)}
          />
          {item.quantity} x {item.description}
          <button type="button" onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default PackingList;