import {useState} from 'react';
import SearchIcon from './search.svg';
import './App.css';
import OfferUpCard from './OfferUpCard';
import MarketplaceCard from './MarketPlaceCard';
//c84ab3e4

const Offerup_URL = 'https://offerup2.p.rapidapi.com/searchByKeyword?'
const Offerupoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1af120a179msh88df489b3efd787p1db9fajsne4a1b1564f6b',
		'x-rapidapi-host': 'offerup2.p.rapidapi.com'
	}
};

const Marketplace_URL ='https://facebook-marketplace1.p.rapidapi.com/search?'
const Marketplaceoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1af120a179msh88df489b3efd787p1db9fajsne4a1b1564f6b',
		'x-rapidapi-host': 'facebook-marketplace1.p.rapidapi.com'
	}
};

const App = () => {
    const [offerUpArray, setOfferUpArray] = useState([])
    const [marketplaceArray, setMarketPlaceArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

        const SearchMarketplace = async (Carmodel) => {

            const response = await fetch(`${Marketplace_URL}query=${Carmodel}&minPrice=2000`, Marketplaceoptions);
            const data = await response.json();
            setMarketPlaceArray(data);
        }

        const SearchOfferup = async (Carmodel) => {
            const response = await fetch(`${Offerup_URL}keyword=${Carmodel}&zipCode=92653&minPrice=750&distance=10000`,Offerupoptions);
            const data = await response.json();
            setOfferUpArray(data);
        }
        const handleSearches = (searchTerm) => {
            SearchMarketplace(searchTerm);
            SearchOfferup(searchTerm);
        }
    return(
        <div className="app">
            <h1>CARBOT</h1>
            <div className="search">
                <input 
                placeholder="search for cars"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => handleSearches(searchTerm)}
                />
            </div>
            { marketplaceArray?.length > 0 ? (
            <div className="container">
                {marketplaceArray.map((car) => (
                    <MarketplaceCard car={car}/>
                ))} 
                </div> ) : (
                    <div className="empty">
                        <h3>No Marketplace listings found</h3>
                    </div>
                )}

            <div>
            
            {offerUpArray?.length > 0 ? (
            <div className="container">
                {offerUpArray.map((car) => (
                    <OfferUpCard car ={car}/>
                ))}
                </div>) :(
                    <div className="empty">
                        <h3>No Offerup listings found</h3>
                    </div>
                )}    
                </div>
            </div>
    );
}

export default App;