'use client';

import { useEffect, useState } from "react";
import AuthGuard from "./components/AuthGuardComponent";
import Header from "./components/Header";
import UpcomingCard from "./components/UpcomingCard";
import AiringCard from "./components/AiringCard";

export default function Home() {
  const [upcommingAnime, setUpcommingAnime] = useState([]);
  const [airingAnime, setAiringAnime] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);

  const formatAnimeTitles = (animeList) => {
    const updatedAnimeList = animeList.map((anime) => {
      const isLongTitle = anime.title.split(" ").length > 5;
      const newTitle = isLongTitle ? anime.title.slice(0, 25) : anime.title;
      return {...anime, title: newTitle};
    });
    return updatedAnimeList;
  }

  const getAnime = async (category) => {
    try {
      const response = await fetch(`/api/anime/${category}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });

      if (!response.ok) {
        throw new Error(
          `Failed to get anime for ${category}, Status: ${response.status}`);
      }

      const {data} = await response.json();

      updateAnimeState(category, data);
    } catch(err) {
      console.error("Error getting anime", err);
    }
  }

  const updateAnimeState = (category, animeList) => {
    const formattedAnimeList = formatAnimeTitles(animeList);

    switch(category) {
      case "upcoming":
        setUpcommingAnime(formattedAnimeList.slice(0, 8));
        break;
      case "airing":
        setAiringAnime(formattedAnimeList.slice(0, 20));
        break;
      case "bypopularity":
        setPopularAnime(formattedAnimeList.slice(0, 15));
        break;
    }
  }

  useEffect(() => {
    const request = (category, delay) => {
      setTimeout(() => getAnime(category), delay);
    }
    request("upcoming", 0);
    request("airing", 500);
    request("bypopularity", 600);
  }, [])

  return (
    <AuthGuard>
      <div className="anime-app">
        <div className="container">
          <Header />
          <div className="content">
            <div className="media-section">
              <div className="media-header">
                <div className="media-title">
                  <h2>UPCOMING</h2>
                </div>
                <div className="pagination">
                  {
                    Array.from({ length: 5 }, (_, i) => (
                      <h2 key={i}>{i + 1}</h2>
                    ))
                  }
                </div>
              </div>
              <div className="anime-grid upcoming">
                {upcommingAnime.map((anime) => (
                  <UpcomingCard key={anime.mal_id} anime={anime}/>
                ))}
              </div>
              <div className="media-header">
                <div className="media-title">
                  <h2>CURENTLY AIRING</h2>
                </div>
              </div>
              <div className="anime-grid airing">
                {airingAnime.map((anime) => (
                  <AiringCard key={anime.mal_id} anime={anime}/>
                ))}
              </div>
            </div>
            <div className="lists-section">
            <div className="media-header">
                <div className="media-title">
                  <h2>ADVERTISEMENT</h2>
                </div>
              </div>
              <div className="advertisement">
                <img src="/images/advertisement.jpg" alt="haikyu"/>
              </div>
              <div className="media-header">
                <div className="media-title">
                  <h2>POPULAR</h2>
                </div>
              </div>
              <div className="popular-anime">
              {popularAnime.map((popAnime) => (
                <p>{popAnime.title}</p>
              ))}
              </div>
              <div className="media-header">
                <div className="media-title">
                  <h2>GENRES</h2>
                </div>
              </div>
              <div className="genres-anime">

              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
