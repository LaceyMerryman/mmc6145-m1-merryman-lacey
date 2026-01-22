import styles from '../index.css'
import Project from "../components/project.jsx"

export default function Home() {
  const projects = [
    {
      title: "Lacey M Art + Design",
      description:
        "As an artist and Graphic Designer, I developed a webpage utilizing Wix.com mediasite to build my own website and online shop. With my website, I'm able to showcase my abilities within a creative portfolio, sell artwork, and also receive inquires and contact information from prospective customers and clients.",
      tech: ["Wix", "HTML", "CSS"],
      href: "https://merrymanlacey.wixsite.com/laceymartdesign"
    },
    {
      title: "Personal Website",
      description:
      "During my first semester at University of Florida, we created personal websites to showcase our early abilities. Including this original webpage provides a visual update for how far my coding skills have come in comparison to viewing this website now. From HTML and CSS to React with Vite and deploying using third party apps, I couldn't have guessed how far I'd come until now.",
      tech: ["HTML", "CSS", "GitHub"],
      href: "https://laceymerryman.github.io/m14-hw14-merryman-lacey/"
    },
  ];

  return (
    <section className="stack">
      <div className="hero">
      <h1 className="hero-title">Home</h1>
      <p className="hero-subtitle">
        I'm a student Web Developer, learning to use React to build clean, user-friendly online experiences.
      </p>
      </div>

      <div className="stack">
        <h2>Featured Projects</h2>
        <div className="grid">
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>
      </div>
   </section>
  )
}