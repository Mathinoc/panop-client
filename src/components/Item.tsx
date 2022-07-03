import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItem } from '../services/itemService';
import FullScreenLoadingIndicator from './FullScreenLoadingIndicator';
import Carousel from 'react-material-ui-carousel';
import DetailItem, { caracteristic } from '../interfaces/DetailItem';
import TabPanel from './TabPanel';
import '../styles/Item.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function Item() {
  let { id } = useParams();
  const [item, setItem] = useState<DetailItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const item = await getItem(id!);
      setItem(item);
    }
    fetchData()
      .then(el => console.log(el))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id])

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


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
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Description" />
              <Tab label="Caractéristiques" />
            </Tabs>
          </Box>


          <TabPanel value={value} index={0}>
            {item?.description}
          </TabPanel>

          <TabPanel value={value} index={1}>
            {item && item?.caracteristics.map((el: caracteristic) => {
              return (
                <p>
                  {el.key}: {el.value}
                </p>
              )
            })}
          </TabPanel>
        </Box>

      </div>
    )
  }
}
