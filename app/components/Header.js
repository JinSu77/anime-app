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
      router.push(`/search?keyword=${query}`);
    }
  };

  return (
    <div className="header">
      <div className="menu">
        <h2>HOME</h2>
        <h2>LISTE ANIME</h2>
        <h2>NOUVELLE SAISON</h2>
        <h2>FILMS</h2>
        <h2>POPULAIRE</h2>
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
