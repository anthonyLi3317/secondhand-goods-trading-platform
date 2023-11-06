import React, { useState, useEffect } from "react";
import "./ItemListings.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Item(props) {
    const imageUrl = props.details.download_url  || process.env.PUBLIC_URL + '/listing-placeholder.png';

    return (
            <article className="item">
                <Link to={`/buyerverproductdetail/for/${props.details.id}`}>
                    <img src={imageUrl} alt={props.details.author} />
                </Link>
                <Link to={`/buyerverproductdetail/for/${props.details.id}`}>
                    <p>{props.details.author}</p>
                </Link>

            </article>
    );
}

function ItemListings({ items }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (!items) { // Only fetch if items prop is not provided
                try {
                    const result = await axios('http://localhost:3001/api/item-listings');
                    setData(result.data);
                } catch (error) {
                    console.error('Error fetching item listings:', error);
                }
            }
        }
    
        fetchData();
    }, [items]);

    const displayItems = items || data; // Use items prop if provided, else use fetched data

    return (
        <section className="item-listings">
            {displayItems.map((item, index) => (
                <Item key={index} details={item} />
            ))}
        </section>
    );
}

export default ItemListings;
