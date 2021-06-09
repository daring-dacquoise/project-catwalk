import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Just sample data, will be removed once data from API/Database is set up
import data from './exampleData.json';

// This is the container
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: auto;
  border-style: solid;
  margin-left: 10vw;
  margin-right: 10vw;
  overflow: hidden;
  flex: 0 0 30%;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 5em;
  font-weight: bold;
  font-family: Sans-serif;
`;

// Convert CardList into a carousel
const CardList = () => (
  <>
    <Title>Related Items!</Title>
    <Wrapper>
      {data.items.map((item, index) => (
        <Card
          key={index}
          itemName={item.itemName}
          category={item.category}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </Wrapper>
  </>
);

export default CardList;