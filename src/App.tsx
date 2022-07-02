import './styles/App.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailView from './views/ItemDetailView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/item/:id" element={<ItemDetailView />} />
          {/* <Route path="/favorites" element={<HomeView />} />
          <Route path="/cart" element={<HomeView />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
