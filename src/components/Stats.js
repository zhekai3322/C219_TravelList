import React from 'react';

const Stats = ({ items }) => {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = totalItems === 0 ? 0 : (packedItems / totalItems) * 100;

  return (
    <div className="stats">
      <h3>Stats</h3>
      <p>Total Items: {totalItems}</p>
      <p>Packed Items: {packedItems}</p>
      <p>Percentage Packed: {percentage.toFixed(2)}%</p>
      {percentage === 100 && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          You got everything!
        </p>
      )}
    </div>
  );
};

export default Stats;