import HomeComponent from "../components/HomeComponent";
import CardItem from "../interfaces/CardItem";

export default function HomeView({ itemList}: { itemList: CardItem[] | null}) {
  return (
    <>
      <HomeComponent itemList={itemList}/>
    </>
  )
}
