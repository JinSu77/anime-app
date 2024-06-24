import Header from "@/app/components/Header";

export default function AnimeListPage() {
    return (
        <div className="anime-app">
          <div className="container">
            <Header />
            <div className="content">
              <div className="media-section">
                <div className="media-header">
                  <div className="media-title">
                    <h2>ANIME LISTE</h2>
                  </div>
                </div>
                <div className="anime-grid upcoming">
                    ANIME LISTE
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}