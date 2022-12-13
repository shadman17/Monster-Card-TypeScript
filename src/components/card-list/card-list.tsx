import { Monster } from "../../App";
import './card-list.css';
import Card from '../card/card'

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({monsters}: CardListProps) =>  (
    <div className='card-list' >
      {monsters.map((monster) => {
        return (
          <Card key= {monster.id} monster={monster}/>
        );
      })}
    </div>
  );

export default CardList;
