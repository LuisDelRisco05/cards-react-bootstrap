import React from 'react';
import styles from '../components/Styles.module.css';

const Card = ({image, tittle, text, url}) => {
    return (
        <div className={`card my-3 ${styles.height_card} ${styles.card_shadow}`}>
            <img src={image} alt="img" className="card-img-top"/>
            <div className="card-body bg-dark">
                <h4 className="card-tittle text-white text-decoration-underline">{tittle}</h4>
                <p className="card-text text-white">{text}</p>
            </div>
            <a href={url} className={`btn rounded-0  ${styles.background}`} target="_blank"  rel="noreferrer" >Go to this website</a>
        </div> 
    );
}
 
export default Card;