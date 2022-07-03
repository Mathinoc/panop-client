import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItem } from '../services/itemService';
import FullScreenLoadingIndicator from './FullScreenLoadingIndicator';
import Carousel from 'react-material-ui-carousel';
import DetailItem, {caracteristic} from '../interfaces/DetailItem';
import '../styles/Item.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




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
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Caractéristiques" {...a11yProps(1)} />
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
