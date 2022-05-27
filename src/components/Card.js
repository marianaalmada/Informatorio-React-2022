
function Card() {

    return (
        <div className="container">
            <img className="card__img" src="https://arielfuggini.com/static/d00325bbd9f153f8a3bfb2a3d4cd87e3/32ccb/react.png"></img>
            <div className="card__info">
                <div className="card__title">Title</div>
                <div className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt imperdiet tellus in rhoncus. Sed fringilla nulla sit amet libero vestibulum, ut pulvinar ante fringilla. Donec sit amet vehicula ex.</div>
                <a className="card__link" href="">GO TO COURSE</a>
            </div>
        </div>
    )
}

export default Card