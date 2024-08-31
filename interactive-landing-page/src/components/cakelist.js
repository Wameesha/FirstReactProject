import React from 'react';
import '../context/App.css';

const CakeList = () => {
  const cakes = [
    { id: 1, name: 'Chocolate Delight', price: 'Rs.2900', image: '/cake1.jpeg' },
    { id: 2, name: 'Vanilla Dream', price: 'Rs.2500', image: '/cake2.jpeg' },
    { id: 3, name: 'Red Velvet', price: 'Rs.3200', image: '/cake3.jpeg' },
    { id: 4, name: 'Strawberry Surprise', price: 'Rs.3500', image: '/cake4.jpeg' },
    { id: 5, name: 'Lemon Zest', price: 'Rs.3400', image: '/cake5.jpeg' },
  ];

  return (
    <div className="cake-list">
      <h2>Our Cakes</h2>
      <div className="cake-items">
        {cakes.map(cake => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h3>{cake.name}</h3>
            <p>{cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeList;
