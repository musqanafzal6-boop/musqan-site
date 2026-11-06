import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import {
  skillsSection,
  creativeSkills,
  technicalSkills,
} from "../data/skillsData";

// =====================================================
// Skills
// The Skills section, divided into two columns:
//   Creative Skills  |  Technical Skills
// All content comes from src/data/skillsData.js.
// =====================================================

// ---------- One column of skills ----------
function SkillColumn({ group, label, delayClass }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`reveal ${delayClass}`}>
      <div className="h-full rounded-2xl border border-gold/40 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl sm:p-10">
        <p className="eyebrow">{label}</p>
        <h3 className="mt-3 font-display text-3xl font-medium text-forest sm:text-4xl">
          {group.title}
        </h3>
        <div className="gold-line mt-5"></div>

        <ul className="mt-8 space-y-6">
          {group.items.map((skill) => (
            <li key={skill.name} className="flex gap-4">
              {/* Small gold diamond bullet */}
              <span
                className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold"
                aria-hidden="true"
              ></span>
              <div>
                <h4 className="font-display text-xl font-semibold text-forest">
                  {skill.name}
                </h4>
                <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/70">
                  {skill.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- The whole section ----------
export default function Skills() {
  return (
    <section id={skillsSection.id} className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={skillsSection.eyebrow}
          heading={skillsSection.heading}
          text={skillsSection.text}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <SkillColumn
            group={creativeSkills}
            label="The Art Side"
            delayClass=""
          />
          <SkillColumn
            group={technicalSkills}
            label="The Digital Side"
            delayClass="reveal-delay-1"
          />
        </div>
      </div>
    </section>
  );
}