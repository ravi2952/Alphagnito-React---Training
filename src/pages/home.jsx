import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/Header';
import Caroesal from '../components/caroesal/caroesal';
import Card from '../components/card/card';
import Footer from '../components/Footer/footer';
import Last from '../components/LastComponent/last';

export default function home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Caroesal/>
      <Card/>
      <Footer/>
      <Last/>
    </div>
  );
}
