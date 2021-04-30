import React from 'react';
import Cards from './components/Cards';
import styles from './components/Styles.module.css';


function App() {
  return (
    <div className={`${styles.body} vh-100`}>
        <Cards />
    </div>
  )
}

export default App
