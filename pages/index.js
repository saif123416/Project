import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from './Homepage';
import PrimarySearchAppBar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div >
      <PrimarySearchAppBar />
      
      <Homepage />
      <Slider />
      <Footer />
    </div>
  )
}
