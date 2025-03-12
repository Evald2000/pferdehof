import React, { useEffect, useState } from "react";
import Header from "../Header";
import api from "../api/api";
import axios from "axios";
const TermineNeu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories/?include_events=true');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Programmübersicht 2025
      </h1>

      <div className="space-y-12">
        {categories.map(category => (
          <CategorySection 
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

const CategorySection = ({ category }) => (
  <section className="bg-background p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-lightBrown mb-4 border-b pb-2">
      {category.name}
    </h2>
    <div className="space-y-4">
      {category.events?.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  </section>
);

const EventItem = ({ event }) => (
  <div className="bg-gray-50 p-4 rounded-md">
    <h3 className="font-semibold text-lg text-lightBrown mb-2">{event.title}</h3>
    <div className="flex space-x-1">
      {event.dates?.map((date, index) => (
        <div key={index} className="text-sm text-gray-600">
          {' '}
          {new Date(date.start_date).toLocaleDateString('de-DE')}
          {date.end_date && (
            <>
              {' - '}
              {new Date(date.end_date).toLocaleDateString('de-DE')}
            </>
          )}
          {event.dates.length > 1 && ' | '}
        </div> 
        
      ))}
    </div>
  </div>
);
export default TermineNeu;
