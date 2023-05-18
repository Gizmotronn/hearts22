import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import GridGallery from '../components/gridGallery';
import Footer from '../components/Layout/Footer';

const IndexPage: NextPage = () => {
  return (
    <div className=''>
      <h1>Classname</h1>
      <Footer />
    </div>
  );
};

export default IndexPage;