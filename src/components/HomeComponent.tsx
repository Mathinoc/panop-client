import FullScreenLoadingIndicator from './FullScreenLoadingIndicator';
import CardItem from '../interfaces/CardItem';
import GiftCard from './GiftCard';

export default function HomeComponent({isLoading, itemList}: {isLoading: boolean, itemList: CardItem[] | null}) {

  if (isLoading) {
    return <FullScreenLoadingIndicator />
  } else {
    return (
      <>
        <div>
          {itemList && itemList.map(item => {
            return (
              <div key={item.id}>
                <GiftCard item={item} />
              </div>
            )
          })}
        </div>
      </>)

  }
}

