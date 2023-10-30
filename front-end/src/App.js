import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import Login from './components/login/Login';
import Homepage from './components/Home/Homepage';
import SignUp from './components/SignUp/SignUp';
import SearchResults from "./components/SearchResults/SearchResults";
import BuyerVerProductDetail from './components/BuyerVerProductDetail/BuyerVerProductDetail';
import SellerVerProductDetail from './components/SellerVerProductDetail/SellerVerProductDetail';
import Account from './components/Account/Account';
import EditProfile from './components/EditProfile/EditProfile';
import OrderHistory from './components/OrderHistory/OrderHistory';


const App = props => {
  return (
    <div className="App">
      <Router>
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route path="/home" element={<Homepage />} />

            {/* a route for the login page */}
            <Route path="/" element={<Login />} />

             {/* a route for the search page */}
             <Route path="/signup" element={<SignUp />} />

              {/* a route for the search page */}
              <Route path="/searchresults/for/:prompt" element={<SearchResults />} />

              {/* a route for the buyerverproductdetail page */}
              <Route path="/buyerverproductdetail/for/:prompt" element={<BuyerVerProductDetail />} />

              {/* a route for the sellerverproductdetail page */}
              <Route path="/sellerverproductdetail/for/:prompt" element={<SellerVerProductDetail />} />

              {/* a route for the account page*/}
              <Route path="/Account" element={<Account />} />

              {/* a route for the EditProfile page*/}
              <Route path="/EditProfile" element={<EditProfile />} />

              {/* a route for the EditProfile page*/}
              <Route path="/OrderHistory" element={<OrderHistory />} />

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
