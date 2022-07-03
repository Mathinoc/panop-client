import { useEffect, useState } from 'react';
import './styles/App.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailView from './views/ItemDetailView';
import FavoriteView from './views/FavoriteView';
import CartView from './views/CartView';
import { getAllItems } from './services/itemService';
import CardItem from './interfaces/CardItem';
import Header from './components/Header';
import FullScreenLoadingIndicator from './components/FullScreenLoadingIndicator';


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
        <Header />
        {isLoading ?
          <FullScreenLoadingIndicator />
          :
          <main>
            <Routes>
              <Route path="/" element={<HomeView itemList={itemList} />} />
              <Route path="/item/:id" element={<ItemDetailView />} />
              <Route path="/favorites" element={<FavoriteView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        }
      </BrowserRouter>
    </div >
  );
}

export default App;
