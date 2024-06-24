import Header from "@/app/components/Header";

export default function AnimeMoviesPage() {
    return (
        <div className="anime-app">
          <div className="container">
            <Header />
            <div className="content">
              <div className="media-section">
                <div className="media-header">
                  <div className="media-title">
                    <h2>ANIME MOVIES</h2>
                  </div>
                </div>
                <div className="anime-grid upcoming">
                    ANIME MOVIES
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}