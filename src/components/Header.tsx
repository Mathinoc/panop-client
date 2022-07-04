import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header({cartLength}:{cartLength: number}) {
  return (
    <div className="Header">
      <Link to="/">
        <h2>PickAGift</h2>
      </Link>
      <nav>
        <Link to="/cart" >
          <IconButton onClick={() => console.log("clicked")} aria-label="cart">
            <Badge badgeContent={cartLength} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
        <Link to="/favorites" >
          <IconButton onClick={() => console.log("clicked")} aria-label="cart">
            <Badge badgeContent={0} color="primary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Link>
      </nav>
    </div>
  )
}
