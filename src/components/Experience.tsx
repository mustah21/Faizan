import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Associate",
    company: "Silverline Law Chambers",
    period: "Oct 2022 - Present",
    location: "Lahore, Pakistan",
    description: "Leading commercial and corporate law firm.",
    highlights: [
      "Led legal structuring of a high-profile PPP for a water treatment plant on the Ravi River, ensuring regulatory compliance",
      "Served as legal consultant to Punjab Procurement Regulatory Authority (PPRA), advising on legislative reforms and e-procurement implementation",
      "Oversaw civil litigation matters relating to banking, property, and contractual disputes",
      "Contributed legal insight to the Public Private Partnership Authority of Pakistan",
      "Instrumental in facilitating FIFA's return to Pakistan as Chair of the Election Committee",
    ],
  },
  {
    title: "Senior Associate",
    company: "Cheema & Co",
    period: "Oct 2020 - Oct 2022",
    location: "Lahore, Pakistan",
    description: "Renowned law firm with a focus on corporate and commercial law.",
    highlights: [
      "Advised on cross-border transactions, facilitating joint ventures with Chinese and Japanese energy firms",
      "Drafted and negotiated SaaS, franchise, lease, and master service level agreements (MSLAs)",
      "Collaborated with Saudi Arabian government on SaaS-based parking app development in Riyadh",
      "Advised Saudi Ministry of Commerce on strategies to attract global businesses including Formula 1",
      "Provided legal structuring and regulatory compliance guidance to startups",
    ],
  },
  {
    title: "Senior Associate",
    company: "A. W. Butt & Associates",
    period: "Aug 2018 - Oct 2020",
    location: "Lahore, Pakistan",
    description: "Law firm specializing in service and banking law.",
    highlights: [
      "Managed all service law litigation for Pakistan Railways across district and High Courts",
      "Drafted persuasive pleadings in complex service and banking law matters argued before Supreme Court",
      "Advised multiple banks on agricultural and corporate financing matters",
      "Represented banks in banking recovery suits before the Special Banking Court",
    ],
  },
  {
    title: "Compliance Officer",
    company: "InDebted",
    period: "Jan 2017 - Jan 2018",
    location: "Sydney, Australia",
    description: "Debt recovery solutions firm.",
    highlights: [
      "Oversaw regulatory compliance related to bank loan recoveries across multiple jurisdictions",
      "Ensured all bid documents met legal and procedural requirements",
      "Coordinated inter-provincial regulatory alignment",
      "Contributed to securing AUD $45 million in funding for strategic expansion",
    ],
  },
  {
    title: "Junior Legal Advisor",
    company: "Foreign Office of Pakistan",
    period: "May 2015 - Aug 2015",
    location: "Washington, D.C., United States",
    description: "Diplomatic assignment supporting bilateral relations.",
    highlights: [
      "Supported Political Attaché in promoting Pakistan's commitment to regional peace",
      "Planned and coordinated high-level meetings for visiting foreign dignitaries",
      "Assisted Finance Attaché in trade negotiations between U.S. and Pakistani fabric manufacturers",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              </div>

              <div className="card-elegant p-6 md:p-8 ml-4">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 italic">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
