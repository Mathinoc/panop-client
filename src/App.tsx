import { useEffect, useState } from 'react';
import './styles/App.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailView from './views/ItemDetailView';
import FavoriteView from './views/FavoriteView';
import CartView from './views/CartView';
import { getAllItems } from './services/itemService';
import CardItem from './interfaces/CardItem';
import DetailItem from './interfaces/DetailItem';
import Header from './components/Header';
import Payment from './components/Payment';
import FullScreenLoadingIndicator from './components/FullScreenLoadingIndicator';


function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [itemList, setItemList] = useState<CardItem[] | []>([]);
  const [cart, setCart] = useState<{ item: DetailItem, quantity: number }[] | []>([{
    item: {
      "title": "EPONGE LAVABLE BIO - COSSE NATURE - CONFECTION FRANÇAISE 🌱🇫🇷",
      "id": "eco-responsable_1",
      "photo": [
        "https://cdn.shopify.com/s/files/1/0322/9994/2026/products/pan-accessoiresalimentaires-1-PHOTO-SITELABEL_2_1100x.png?v=1626863552",
        "https://cdn.shopify.com/s/files/1/0322/9994/2026/products/pan-accessoiresalimentaires-1-PHOTO2_1100x.png?v=1626863552",
        "https://cdn.shopify.com/s/files/1/0322/9994/2026/products/pan-accessoiresalimentaires-1-PHOTO6_1100x.png?v=1626863552",
        "https://cdn.shopify.com/s/files/1/0322/9994/2026/products/pan-accessoiresalimentaires-1-PHOTO8_1100x.png?v=1626863552",
        "https://cdn.shopify.com/s/files/1/0322/9994/2026/products/eponge-lavable-bio-cosse-nature-confection-francaise-111174_1100x.gif?v=1626867900"
      ],
      "price": 703,
      "category": "eco-responsable",
      "description": "La guillotine à saucisson permet de présenter vos apéritifs de façon original et de couper facilement des fines tranches de saucissons au fur et à mesure de la soirée pour un apéro ultra convivial.",
      "caracteristics": [
        {
          "key": "Poids",
          "value": "1,740 kg"
        },
        {
          "key": "Délais de livraison en jours ouvrés",
          "value": "15"
        }
      ],
      "supplierId": "supplier_1"
    }, quantity: 4
  }])

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
        <Header cartLength={cart.length} />
        {isLoading ?
          <FullScreenLoadingIndicator />
          :
          <main>
            <Routes>
              <Route path="/" element={<HomeView itemList={itemList} />} />
              <Route path="/item/:id" element={<ItemDetailView setCart={setCart} />} />
              <Route path="/favorites" element={<FavoriteView />} />
              <Route path="/cart" element={<CartView cart={cart} setCart={setCart} />} />
              <Route path="/payment" element={<Payment cart={cart} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        }
      </BrowserRouter>
    </div >
  );
}

export default App;
