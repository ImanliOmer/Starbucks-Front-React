import './style.css';
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Menu from 'pages/Menu';
import Home from 'pages/Home';
import Layout from 'Layout';
import SignIn from 'pages/SignIn';
import LoginIn from 'pages/LoginIn';
import Gift from 'pages/Gift';
import FindStore from 'pages/FindStore';
import Rewards from 'pages/Rewards';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path='gift' element={<Gift />} />
          <Route path='rewards' element={<Rewards/>} />
          <Route path="loginIn" element={<LoginIn />} />
          <Route path='findStore' element={<FindStore/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
