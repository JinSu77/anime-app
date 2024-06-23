import "./Header.css"
import { logout } from "../logout/actions";
import { Search } from "@mui/icons-material";

export default function Header() {
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
            <Search />
        </div>
        <form action={logout}>
          <button type="submit" className="logout-button">Logout</button>
        </form>
    </div>
  );
}