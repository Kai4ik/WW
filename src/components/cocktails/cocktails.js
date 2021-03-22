import React from "react";
import styles from "./cocktails.module.css";
import Slider from "../swiper";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import $ from "jquery";

export const CocktailsSection = () => {
  const showRecipe = (e) => {
    const id = $(e.currentTarget).parents()[1].id;
    $(`#${id}`).css("cssText", "transform: rotateY(180deg);");
    $(`#${e.target.id}`).css("cssText", "pointer-events: none;");
  };

  const hideRecipe = (e) => {
    const id = $(e.target).parent()[0].id;
    $(`#${id}`).css("cssText", "transform: rotateY(0deg);");
    const buttonID = $(e.target).siblings().children("button")[0].id;
    $(`#${buttonID}`).css("cssText", "pointer-events: all;");
  };

  const products = [
    {
      title: "Black Russian",
      image: c1,
      ingredients:
        "2 oz Forty Creek Copper Pot 3/4 oz Lemon Juice 3/4 oz Orange Pekoe Tea Syrup* Egg White",
      directions:
        "Combine all ingredients in shaker tin and dry shake for 5 seconds. Add ice and shake again for 10 seconds. Strain into chilled cocktail glass. Garnish with drops of Angostura bitters.",
    },
    {
      title: "Moscow Mule",
      image: c2,
      ingredients:
        "2 oz Forty Creek Copper Pot 3/4 oz Lemon Juice 3/4 oz Orange Pekoe Tea Syrup* Egg White",
      directions:
        "Combine all ingredients in shaker tin and dry shake for 5 seconds. Add ice and shake again for 10 seconds. Strain into chilled cocktail glass. Garnish with drops of Angostura bitters.",
    },
    {
      title: "Vodka & Cranberry",
      image: c3,
      ingredients:
        "2 oz Forty Creek Copper Pot 3/4 oz Lemon Juice 3/4 oz Orange Pekoe Tea Syrup* Egg White",
      directions:
        "Combine all ingredients in shaker tin and dry shake for 5 seconds. Add ice and shake again for 10 seconds. Strain into chilled cocktail glass. Garnish with drops of Angostura bitters.",
    },
    {
      title: "Cosmopolitan",
      image: c4,
      ingredients:
        "2 oz Forty Creek Copper Pot 3/4 oz Lemon Juice 3/4 oz Orange Pekoe Tea Syrup* Egg White",
      directions:
        "Combine all ingredients in shaker tin and dry shake for 5 seconds. Add ice and shake again for 10 seconds. Strain into chilled cocktail glass. Garnish with drops of Angostura bitters.",
    },
  ];

  return (
    <section className={styles.cocktailsSection} id="cocktailsSection">
      <div className={styles.transition}></div>
      <svg>
        <filter id="wavy3">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.05"
            numOctaves="3"
            seed="4"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.03;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="25"></feDisplacementMap>
        </filter>
      </svg>
      <h2> Drink Suggestions</h2>
      <div className={styles.cocktails}>
        <Slider>
          {products.map((product, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.slideInner} id={index}>
                <div className={styles.cardFront}>
                  <p> {product.title} </p>
                  <img
                    src={product.image}
                    alt="img"
                    className={styles.product}
                  />
                  <button
                    className={styles.showRecipe}
                    onMouseOver={showRecipe}
                    id={`showRecipe${index}`}
                  >
                    Show Recipe
                  </button>
                </div>
                <div className={styles.cardBack} onMouseLeave={hideRecipe}>
                  <p>
                    <b>Ingredients:</b> {product.ingredients}
                  </p>
                  <p>
                    <b>Directions:</b> {product.directions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
