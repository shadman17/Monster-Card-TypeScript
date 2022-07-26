import { Component } from "react";
import './card-list.css';
import Card from '../card/card.jsx'

const CardList = ({monsters}) =>  (
    <div className='card-list' >
      {monsters.map((monster) => {
        return (
          <Card key= {monster.id} id = {monster.id} name= {monster.name} email = {monster.email}/>
        );
      })}
    </div>
  );

export default CardList;
