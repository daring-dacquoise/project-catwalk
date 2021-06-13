import React, {useState} from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  min-height: 500px;
  border-radius: 4px;
  border: solid 2px #767676;
  padding: 5px;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Name = styled.p`
  font-family: 'Montserrat'
  color: gray;
  font-size: 20px;
  font-weight: 200;
  text-align: left;
  flex-basis:0.1rem;
  margin-top: -35px;
`;

const Description = styled.p`
  color: gray;
  text-align:left;
  margin-top: -35px;

`;

const Category = styled.p`
  color: gray;
  text-align: left;
  margin-top:-20px;
`;

const Image = styled.img`
  border-radius: 5px;
  width: 250px;
  height: 350px;
  object-fit: cover;
`;

const Line = styled.hr`
  color: black;
  width: 100%;
  margin-top: -10px;
`;

const Card = ({
  itemName, image, price, rating, category, id
}) => {
  const[url, setURL] = useState('');
  axios.get(`products/${id}/styles`)
    .then((res) => {
      let url = res.data.results[0].photos[0].url;
      setURL(url);
    })
    .catch((err)=> {
      console.log('Error: ', err);
    })
  return (
    <Wrapper data-testid="card">
    <Image src={url} alt="empty" />
    <div><Line /></div>
    <Category>{category}</Category>
    <Name>{itemName}</Name>
    <Description>
      ${price}
    </Description>
    <Stars stars={rating} />
  </Wrapper>
  )
};

export default Card;
