import React from 'react';

const Stats = ({ items }) => {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <div className="stats">
      <h3>Stats</h3>
      <p>Total Items: {totalItems}</p>
      <p>Packed Items: {packedItems}</p>
      <p>Remaining Items: {totalItems - packedItems}</p>
    </div>
  );
};

export default Stats;