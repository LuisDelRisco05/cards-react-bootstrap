import React from 'react';
import Card from './Card';
import mariokart from '../assets/mariokart.jpg';
import mariobros from '../assets/mariobros.jpg';
import supersmash from '../assets/supersmash.jpg';
import pikachu from '../assets/pikachu.jpg';

const Cards = () => {

    const cardsList = [
        {
            id: 1,
            tittle: "Mario Kart 8",
            image: mariokart,
            text: "Mario Kart 8 Deluxe es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es la undécima entrega de la serie Mario Kart, novena en consolas de Nintendo, lanzado mundialmente el 28 de abril de 2017. Cuenta con todo lo visto previamente en Mario Kart 8.",
            url: "https://www.nintendo.com/es_LA/games/detail/mario-kart-8-deluxe-switch/"
        },
        {
            id: 2,
            tittle: "Super Mario Odyssey",
            image: mariobros,
            text: "Super Mario Odyssey es un videojuego de plataformas de mundo abierto para Nintendo Switch que se lanzó en Japón y los Estados Unidos el 27 de octubre de 2017.",
            url: "https://www.nintendo.com/es_LA/games/detail/super-mario-odyssey-switch/"
        },
        {
            id: 3,
            tittle: "Super Smash Bros",
            image: supersmash,
            text: "Super Smash Bros. Ultimate es un videojuego de lucha crossover de la serie Super Smash Bros. desarrollada por Bandai Namco Games y Sora Ltd. y publicado por Nintendo. Este salió a la venta para Nintendo Switch a nivel mundial el 7 de diciembre de 2018.",
            url: "https://www.nintendo.com/es_LA/games/detail/super-smash-bros-ultimate-switch/"
        },
        {
            id: 4,
            tittle: "Pokémon Let's Go",
            image: pikachu,
            text: "Pokémon Let's Go, Pikachu! es un videojuego RPG perteneciente a la franquicia Pokémon desarrollado por Game Freak y publicado por Nintendo y The Pokémon Company para Nintendo Switch.",
            url: "https://www.nintendo.com/es_LA/games/detail/pokemon-lets-go-pikachu-switch/"
        }
    ]

    return (  
        <div className="container d-flex justify-content-center align-items-center ">
            <div className="row">
                {
                    cardsList.map( card => ( 
                        <div className="col-12 col-sm-6 col-lg-3" key={card.id}>
                            <Card 
                                image={card.image}
                                tittle={card.tittle}
                                text={card.text}
                                url={card.url}
                            />
                        </div> 
                    ))
                }                  
            </div>    
        </div>
    );
}
 
export default Cards;