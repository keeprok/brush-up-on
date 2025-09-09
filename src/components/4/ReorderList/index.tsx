'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';

export default function ReorderList() {
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 1000000,
    },
    {
      id: 2,
      name: 'Chair',
      price: 200000,
    },
    {
      id: 3,
      name: 'Table',
      price: 3000,
    },
  ]);

  const sortItems = () => {
    setItems(
      [...items].sort((a, b) => {
        if (sortBy === 'asc') {
          return a.price - b.price;
        }
        return b.price - a.price;
      })
    );
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={sortItems}>
        가격순 정렬
      </button>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="rounded bg-gray-200 p-4"
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {item.name} - {item.price}
        </motion.div>
      ))}
    </div>
  );
}
