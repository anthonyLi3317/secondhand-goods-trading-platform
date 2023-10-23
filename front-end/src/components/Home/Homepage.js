import React from 'react';
import './Homepage.css';
import ItemListings from '../ItemListings/ItemListings.js';

function Homepage() {
    const items = Array(8).fill({
        name: 'Item name', 
        image: `${process.env.PUBLIC_URL}/listing-placeholder.png` 
    });

    const categories = [
        { name: 'furniture', icon: `${process.env.PUBLIC_URL}/furniture-icon.png` },
        { name: 'study', icon: `${process.env.PUBLIC_URL}/study-icon.png` },
        { name: 'electronics', icon: `${process.env.PUBLIC_URL}/electronics-icon.png` },
        { name: 'clothes', icon: `${process.env.PUBLIC_URL}/clothes-icon.png` },
    ];
    

    return (
        <div className="homepage-container">
            <header className="header">
                <button className="icon-button"><img src={`${process.env.PUBLIC_URL}/home-icon.png`} alt="Home"/></button>
                <input type="text" placeholder="Search here..." className="search-bar"/>
                <button className="icon-button"><img src={`${process.env.PUBLIC_URL}/search-icon.png`} alt="Go"/></button>
            </header>

            <section className="categories">
                {categories.map((category, index) => (
                <button key={index} className="category-icon-button">
                    <img src={category.icon} alt={category.name} />
                </button>
                ))}
            </section>

            <section className="actions">
                <button className="action-icon-button">
                    <img src={`${process.env.PUBLIC_URL}/seller-icon.png`} alt="Sell"/>
                    <span>View Your Products</span>
                </button>
                <button className="action-icon-button">
                    <img src={`${process.env.PUBLIC_URL}/account-icon.png`} alt="Account"/>
                    <span>Account Profile</span>
                </button>
            </section>

            <section className="items">
                <ItemListings /> 
            </section>
        </div>
    );
}

export default Homepage;
