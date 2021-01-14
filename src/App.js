import React from 'react';
import './App.css';
import MyDocument from './documents/MyDocument';
import { PDFViewer } from '@react-pdf/renderer';

function App() {

  return (
    <PDFViewer style={{boxSizing: 'border-box', width:'100%', height:'99.5vh', border:'none'}}>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
