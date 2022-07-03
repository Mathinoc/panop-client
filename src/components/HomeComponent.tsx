import CardItem from '../interfaces/CardItem';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import '../styles/HomeComponent.css';

export default function HomeComponent({ itemList }: { itemList: CardItem[] | null }) {

  return (
    <div className="HomeComponent">
      {itemList && itemList.map(item => {
        return (
          <Link to={`/item/${item.id}`} key={item.id} className="HomeComponent__item">
            <ItemCard item={item} />
          </Link>
        )
      })}
    </div>
  )
}

