export function CondoCard ({ name_condo, id_img, location }) {
    //IMG Source
    const src_img = `./public/${id_img}.jpg`
    
    return (
        <div className="card-condo">
            <img src={src_img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{name_condo}</h2>
                <p className="card-text">{location}</p>
                <p className="card-text">Condominio {id_img}</p>
                <a href="#" className="btn btn-primary">Ver Condominio</a>
            </div>
        </div>
    )
}