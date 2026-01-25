import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from '../page';

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* <Route path="/actualidad" element={<Actualidad />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
