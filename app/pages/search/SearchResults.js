'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import "./search.css";
import Header from '../../components/Header';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      const fetchResults = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${keyword}&sfw`);
          const sortedResults = response.data.data.sort((a, b) => a.title.localeCompare(b.title));
          setResults(sortedResults);
        } catch (error) {
          console.error("Erreur lors de la récupération des données : ", error);
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }
  }, [keyword]);

  return (
    <div className="anime-app">
      <div className="container">
        <Header />
        <div className="content">
          <div className="media-section">
            <div className="media-header">
              <div className="media-title">
                <h2>Résultats de recherche pour : {keyword}</h2>
              </div>
            </div>
            <div className="anime-grid upcoming">
              {loading && <CircularProgress size={50} />}
              {results.map((anime) => (
                <div key={anime.mal_id} className="anime-card">
                  <img className="image" src={anime.images.jpg.image_url} alt={anime.title} />
                  <div className='anime'>
                    <h3>{anime.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
