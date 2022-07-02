import { useEffect, useState } from 'react';
import './styles/App.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailView from './views/ItemDetailView';
import FavoriteView from './views/FavoriteView';
import CartView from './views/CartView';
import { getAllItems } from './services/itemService';
import CardItem from './interfaces/CardItem';


function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [itemList, setItemList] = useState<CardItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getAllItems();
      setItemList(list.items);
    }
    fetchData()
      .catch(console.error)
      .finally(() => setIsLoading(false));

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView isLoading={isLoading} itemList={itemList} />} />
          <Route path="/item/:id" element={<ItemDetailView />} />
          <Route path="/favorites" element={<FavoriteView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
