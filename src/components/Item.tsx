import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { getItem } from '../services/itemService';
import FullScreenLoadingIndicator from './FullScreenLoadingIndicator';
import Carousel from 'react-material-ui-carousel';
import DetailItem, { caracteristic } from '../interfaces/DetailItem';
import TabPanel from './TabPanel';
import CardItem from '../interfaces/CardItem';
import '../styles/Item.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Item({ setCart }: { setCart: React.Dispatch<React.SetStateAction<{ item: DetailItem, quantity: number }[] | []>> }) {
  let { id } = useParams();
  const [item, setItem] = useState<DetailItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(0);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const item = await getItem(id!);
      setItem(item);
    }
    fetchData()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id])


  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setTab(newValue);
  };

  function addToCart() {
    if (item) {
      setCart((prev) => [...prev, { item: item, quantity: quantity }]);
      setQuantity(0);
    }
  }

  if (isLoading) {
    return <FullScreenLoadingIndicator />
  } else {
    return (
      <div className="Item">
        <Carousel className="Item__carousel">
          {item && item.photo.map((url, index) => {
            return (
              <div key={index}>
                <img src={url} />
              </div>
            )
          })}
        </Carousel>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Description" />
              <Tab label="Caractéristiques" />
            </Tabs>
          </Box>


          <TabPanel value={tab} index={0}>
            {item?.description}
          </TabPanel>

          <TabPanel value={tab} index={1}>
            {item && item?.caracteristics.map((el: caracteristic, index: number) => {
              return (
                <div key={index}>
                  {el.key}: {el.value}
                </div>
              )
            })}
          </TabPanel>
        </Box>

        <div className="Item__add-basket">
          <TextField value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value)) } type="number" id="standard-basic" label="Quantité" variant="standard" />
          <Button onClick={addToCart} disabled={quantity > 0 ? false : true} size="large" variant="contained">
            Ajouter au panier
          </Button>
        </div>

      </div>
    )
  }
}
