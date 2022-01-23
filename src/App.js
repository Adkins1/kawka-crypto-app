import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Cryptocurrency from './pages/Cryptocurrency'
import News from './pages/News'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/#/cryptocurrencies' element={<Cryptocurrencies />} />
        <Route exact path='/#/crypto/:coinId' element={<Cryptocurrency />} />
        <Route exact path="/#/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
