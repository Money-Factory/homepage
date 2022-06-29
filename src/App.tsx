import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://images.unsplash.com/photo-1513331006937-db9db75ac1a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    title={{
      text: 'Money Factory'
    }}
    description={{
      text: 'Our website is under construction.',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'mailto:contact@moneyfactory.money',
        image: 'https://cdn-icons-png.flaticon.com/512/2165/2165056.png',
      },
    ]}
  />
);

export default App;