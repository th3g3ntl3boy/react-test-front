// Library
import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Halaman
import Beranda from './Beranda.js';
import Faq from '../FAQ/Faq.js';
import About from '../About/About.js';
import Descriptive from '../../Descriptive/Descriptive.js';
import Classification from '../../Classification/Classification.js';
import Clustering from '../../Clustering/Clustering.js';
import Prediction from '../../Prediction/Prediction.js';
import Forecasting from '../../Forecasting/Forecasting.js';
import Article from '../../Article/Article.js';
import DetailsArticle from '../../Article/DetailsArticle.js';
import SearchResult from '../../Article/SearchResult.js';

// komponen
import NavBar from '../../../Komponen/NavBar.js';


// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})


class App extends Component {
  render(){
    return(
        <div>
          <ApolloProvider client={client}>
            <NavBar />
            <Routes>
                  <Route exact path="/" element={<Beranda />} />
                  <Route path="/algorithm" element={<Beranda />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/about" element={<About/>} />
                  <Route path="algorithm/descriptive" element={<Descriptive />} />
                  <Route path="algorithm/classification" element={<Classification />} />
                  <Route path="algorithm/clustering" element={<Clustering />} />
                  <Route path="algorithm/prediction" element={<Prediction />} />
                  <Route path="algorithm/forecasting" element={<Forecasting />} />
                  <Route path="algorithm/article" element={<Article />} />
                  <Route path="algorithm/article/:id" element={<DetailsArticle />} />
                  <Route path="algorithm/article/search/:name" element={<SearchResult/>} />
            </Routes>
          </ApolloProvider>
        </div>
    )
  }
}

export default App;
