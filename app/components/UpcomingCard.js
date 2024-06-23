import './UpcomingCard.css'

export default function UpcomingCard({anime}) {
    return (
        <div className="media-card">
            <img className='image' src={anime.images.jpg.image_url} alt='card'/>
            <div className='anime'>
                <h3>{anime.title}</h3>
            </div>
        </div>
    );
}