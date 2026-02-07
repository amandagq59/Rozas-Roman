'use client';

import React from 'react';
import './../../components/ServicesExplication/pageservice.css';

interface PageServiceProps {
  title: React.ReactNode;      // Acepta string o JSX
  description: string;
  list: string[];
}

export default function PageService({ title, description, list }: PageServiceProps) {
  return (
    <div className="page-service">
      <h1 className="page-service-title">{title}</h1>
      <p className="page-service-description">{description}</p>
      {list && list.length > 0 && (
        <ul className="page-service-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
