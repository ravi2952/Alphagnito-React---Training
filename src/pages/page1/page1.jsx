import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/whatweoffer/content/content';
import Form from '../../components/whatweoffer/form/form';
import Last from '../../components/LastComponent/last';

export default function page1() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Form/>
      <Last/>
    </div>
  )
}
