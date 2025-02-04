import styled from "styled-components";

export const SectionProd = styled.section`
  max-width: 97.69vw;
  width: 100%;
  min-width: 600px;
  position: relative;
  margin-left: 0.9vw;
`;

// Контейнер для заголовка с скорпионами
export const LavaJava = styled.div`
  max-width: 97.69vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: var(--border);
  border-top: 0;
  padding: 5vh;
  box-sizing: border-box;

  h2 {
    font-size: 4em;
    text-transform: uppercase;
    text-align: center;
  }

  img {
    margin: 1vw;
  }
`;

// Контейнер для карточек продуктов и огней
export const ContainerForProductsCardsAndFires = styled.div`
  border: var(--border);
  width: 100%;
  height: 50vw;
  display: inline-block;
  position: relative;
`;

// Контейнер для огней
export const ContainerForFires = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  img {
    padding: 2vw;
    width: 5vw;
  }
`;

// Контейнер для карточек продуктов
export const ContainerForCards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98vw;
  position: absolute;
  z-index: 1;
  top: 3vw;
`;

// Карточка продукта
export const ProductsCard = styled.div`
  position: relative;
  display: grid;

  img {
    width: 30vw;
  }
`;

// Контейнер для информации о продукте
export const ContainerForProductInfo = styled.div`
  position: absolute;
  z-index: 2;
  top: 8vw;
  left: 1vw;
  text-align: center;
  width: 28vw;

  img {
    width: 27vw;
  }
`;

// Описание продукта
export const ProductDescription = styled.p`
  font-size: 2em;
  margin: 1vw;
`;

// Название продукта
export const ProductName = styled.p`
  font-size: 2.3em;
  margin: 1vw;
`;

// Контейнер для слогана
export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  border-left: var(--border);
  border-right: var(--border);
`;

// Содержимое слогана
export const SloganContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    padding: 1.1vw;
    width: 10%;
  }

  span {
    font-size: 1.5em;
    margin: 0.5vw;
  }
`;