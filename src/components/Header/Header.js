import './Header.css'
import AmazonLogo from './Images/pngimg.com - amazon_PNG1.png'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Header(){
    return(
        <div className='header'>
            <a href='/'>
                <img className="logo" src={AmazonLogo} alt="Amazon Logo"/>
            </a>

            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className='header_nav'>
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
        
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

        
                <div className="header__optionBasket">
                    <AddShoppingCartIcon />
                    
                </div>
            </div>
        </div>
    )
}