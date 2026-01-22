export default function Contact() {
    const linkedin = "www.linkedin.com/in/lacey-merryman-930b23a7"
    const github = "https://github.com/LaceyMerryman"
    const email = "laceymerryman@ufl.edu"

    return (
        <section className="stack">
            <h1>Contact Me</h1>
            <p>
                Want to collaborate or chat about a role? Feel free to contact me with the links below.
            </p>

            <div className="grid">
                <a className="card link-card" href={linkedin} target="_blank" rel="noreferrer">
                    <h2 className="card-title">LinkedIn</h2>
                    <p className="card-desc">Connect with me professionally</p>
                </a>

                <a className="card link-card" href={github} target="_blank" rel="noreferrer">
                    <h2 className="card-title">GitHub</h2>
                    <p className="card-desc">View my public repositories</p>
                </a>

                <a className="card link-card" href={`mailto:${email}`}>
                    <h2 className="card-title">Email</h2>
                    <p className="card-desc">{email}</p>
                </a>
            </div>
        </section>
    )
}