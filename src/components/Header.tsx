import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <h1>PickAGift</h1>
      <nav>
        <IconButton onClick={() => console.log("clicked")} aria-label="cart">
          <Badge badgeContent={4} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={() => console.log("clicked")} aria-label="cart">
          <Badge badgeContent={1} color="secondary">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      </nav>
    </div>
  )
}
