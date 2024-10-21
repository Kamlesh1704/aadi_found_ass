/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-image.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Three months Full stack internship experience",
    description:
      "I contributed to the development of a cross-border payment solution website at an early-stage startup. this experience allowed me to gained valuable insights.",
    url: "https://www.gocrosspe.com/",
  },
  {
    title: "MERN Stack Instagram Clone",
    description:
      "Built a full-stack Instagram clone using MERN stack, featuring user authentication, profile management, and CRUD operations for posts.",
    url: "https://insta-clonee-kc.vercel.app/",
  },
  {
    title: "React Nxtwatch Project",
    description:
      "Developed a YouTube alternative with login, trending, gaming, and video search features. Integrated JWT tokens for secure authentication and implemented theme customization",
    url: "https://nxtwatchkc.ccbp.tech/",
  },
  {
    title: "My Portfolio",
    description:
      "Explore my portfolio to discover more about my skills, projects, and experiences.",
    url: "https://kamlesh-pf.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
