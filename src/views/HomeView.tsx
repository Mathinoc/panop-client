import AppBody from "../components/AppBody";
import HomeComponent from "../components/HomeComponent";
import CardItem from "../interfaces/CardItem";

export default function HomeView({isLoading, itemList}: {isLoading: boolean, itemList: CardItem[] | null}) {
  return (
    <AppBody>
      <HomeComponent isLoading={isLoading} itemList={itemList}/>
    </AppBody>
  )
}
