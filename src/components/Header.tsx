import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h2>PickAGift</h2>
      </Link>
      <nav>
        <Link to="/cart" >
          <IconButton onClick={() => console.log("clicked")} aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
        <Link to="/favorites" >
          <IconButton onClick={() => console.log("clicked")} aria-label="cart">
            <Badge badgeContent={1} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Link>
      </nav>
    </div>
  )
}
