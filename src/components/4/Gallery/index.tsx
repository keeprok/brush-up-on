'use client';

import * as motion from 'motion/react-client';
import Image from 'next/image';
import { useState } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1749316325068-ccdc0af776fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1749429338454-fa1a649c0208?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1734842393602-832288710652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1749022886030-3fda386761b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
];

export default function Gallery() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="p-4">
      <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={() => setIsGrid(!isGrid)}>
        Toggle {isGrid ? 'List' : 'Grid'}
      </button>
      <motion.div className={`grid gap-4 ${isGrid ? 'grid-cols-3' : 'grid-cols-1'}`}>
        {IMAGES.map((_, index) => (
          <motion.div
            key={index}
            className="relative h-72 w-full"
            layout
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Image src={IMAGES[index]} alt={`Image ${index + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
