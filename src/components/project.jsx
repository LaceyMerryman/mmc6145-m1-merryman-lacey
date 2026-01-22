export default function Project({ title, description, tech, href }) {
return (
    <article className="card project">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        {tech?.length ? (
            <ul className="tag-row" aria-label={`${title} technologies`}>
                {tech.map((t) => (
                    <li key={t} className="tag">
                        {t}
                    </li>
                ))}
                </ul>

        ) : null}

        <div className="card-actions">
            {/* External link = regular anchor tag */}
            <a className="button" href={href} target="blank" rel="noreferrer">
                View Project 
            </a>
        </div>
    </article>
)
}