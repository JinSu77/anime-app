import Header from "@/app/components/Header";

export default function PopularPage() {
    return (
        <div className="anime-app">
          <div className="container">
            <Header />
            <div className="content">
              <div className="media-section">
                <div className="media-header">
                  <div className="media-title">
                    <h2>ANIME POPULAIRE</h2>
                  </div>
                </div>
                <div className="anime-grid upcoming">
                    ANIME POPULAIRE
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}