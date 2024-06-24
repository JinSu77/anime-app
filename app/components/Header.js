'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "./Header.css";
import { logout } from "../logout/actions";
import { Search } from "@mui/icons-material";
import CircularProgress from '@mui/material/CircularProgress';

export default function Header() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
  };

  const handleSearch = () => {
    if (query.length > 2) {
      setLoading(true);
      router.push(`/pages/search?keyword=${query}`);
    }
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="header">
      <div className="menu">
        <h2 onClick={() => navigateTo('/')}>HOME</h2>
        <h2 onClick={() => navigateTo('/pages/anime-list')}>LISTE ANIME</h2>
        <h2 onClick={() => navigateTo('/pages/new-season')}>NOUVELLE SAISON</h2>
        <h2 onClick={() => navigateTo('/pages/anime-movies')}>FILMS</h2>
        <h2 onClick={() => navigateTo('/pages/popular')}>POPULAIRE</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Rechercher un anime..."
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          <Search />
        </button>
        {loading && <CircularProgress size={20} className="loader" />}
      </div>
      <form action={logout}>
        <button type="submit" className="logout-button">Logout</button>
      </form>
    </div>
  );
}
