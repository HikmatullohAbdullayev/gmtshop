import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Wrapper from '../style/Wrapper';

function MainLayout(props) {
    return (
       
       <>
     <Wrapper>
     <div className="box">
      <Header/>
       <main>
        <Outlet/>
       </main>
      </div>
       <Footer/>
     </Wrapper>
       
       
       </>
    );
}

export default MainLayout;MainLayout