import styled from 'styled-components';
import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import {ThemeContext} from './components/ThemeContext/ThemeContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CountryDetail from './components/MainContent/CountryDetail';
import Footer from './components/Footer/Footer';

function App() {
  const themeContext = useContext(ThemeContext)

  return (

    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ConstantContent>
          <Routes>
            <Route exact path='/' element={<MainContent/>} />     
            <Route path='/region/:regionName' element={<MainContent/>} />     
            <Route path='/country/:countryName' element={<CountryDetail/>} />     
            <Route path='/search/:name' element={<MainContent/>} />     

          </Routes>
        </ConstantContent>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
    height:100vh;
    width:100%;
    overflow: hidden;

`
const ConstantContent = styled.div`
 max-width:1280px;
 diplay:block;
 width:100%;
 margin: 0 auto;
 padding: 0 12px;


`
