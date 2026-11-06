import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { toneGradients } from "./Lightbox";
import { projectsSection, webProjects } from "../data/projectsData";

// =====================================================
// WebProjects
// The Web Development section: professional project cards.
// Each card shows a screenshot, name, description, the
// technologies used, and Live Demo / GitHub buttons.
// All content comes from src/data/projectsData.js.
// =====================================================

// ---------- Small icons used on the buttons ----------
function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// ---------- One project card ----------
function ProjectCard({ project, index }) {
  const ref = useReveal();

  const isLightTone = project.tone === "gold" || project.tone === "cream";
  const barColor = isLightTone ? "bg-forest/30" : "bg-ivory/40";

  const buttonBase =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 font-body text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300";

  return (
    <div
      ref={ref}
      className="reveal h-full"
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-ivory shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* ----- Screenshot area ----- */}
        <div className="relative aspect-[16/10] overflow-hidden bg-cream">
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                toneGradients[project.tone] || toneGradients.forest
              }`}
            >
              {/* A simple browser-window drawing as the placeholder */}
              <div className="mx-auto mt-6 h-full w-[84%] rounded-t-lg bg-white/90 p-3 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold"></span>
                  <span className="h-2 w-2 rounded-full bg-cream"></span>
                  <span className="h-2 w-2 rounded-full bg-forest/40"></span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className={`h-2 w-2/3 rounded-full ${barColor}`}></div>
                  <div className="h-2 w-1/2 rounded-full bg-forest/15"></div>
                  <div className="h-2 w-3/5 rounded-full bg-forest/15"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ----- Text and buttons ----- */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-2xl font-semibold text-forest">
            {project.name}
          </h3>

          <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
            {project.description}
          </p>

          {/* Technology tags */}
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-gold/60 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-[0.12em] text-forest"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Buttons: pushed to the bottom so all cards line up */}
          <div className="mt-auto flex gap-3 pt-7">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} bg-forest text-ivory hover:bg-gold hover:text-forest`}
              >
                <ExternalIcon />
                Live Demo
              </a>
            ) : (
              <span
                className={`${buttonBase} cursor-not-allowed bg-forest/10 text-forest/50`}
                aria-label="Live demo coming soon"
              >
                <ExternalIcon />
                Coming Soon
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} border border-forest text-forest hover:bg-forest hover:text-ivory`}
              >
                <GithubIcon />
                GitHub
              </a>
            ) : (
              <span
                className={`${buttonBase} cursor-not-allowed border border-forest/20 text-forest/50`}
                aria-label="GitHub link coming soon"
              >
                <GithubIcon />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

// ---------- The whole section ----------
export default function WebProjects() {
  return (
    <section
      id={projectsSection.id}
      className="relative overflow-hidden bg-forest py-24 sm:py-32"
    >
      {/* Soft gold glow in the corner */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"></div>

      <div className="container-page relative">
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          heading={projectsSection.heading}
          text={projectsSection.text}
          light
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}