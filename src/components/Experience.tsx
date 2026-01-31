import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Partner",
    company: "Silverline Law Chambers",
    period: "Oct 2022 - Present",
    location: "Lahore, Pakistan",
    description: "Legal firm specializing in commercial and corporate law.",
    highlights: [
      "Spearheaded legal aspects of a public-private partnership (PPP) project for a water treatment plant on the Ravi River",
      "Consulted for Punjab Procurement Regulatory Authority (PPRA), advising on legislative changes for e-procurement system",
      "Led civil litigation matters related to banking law, property law, agreements, and contracts",
      "Played pivotal role in facilitating FIFA's return to Pakistan as Chair of the Election Committee",
      "Advisory capacity to the Public Private Partnership Authority of Pakistan",
    ],
  },
  {
    title: "Senior Associate",
    company: "Cheema & Co",
    period: "Oct 2020 - Oct 2022",
    location: "Lahore, Pakistan",
    description: "Law firm with a focus on corporate and commercial law.",
    highlights: [
      "Advised on numerous cross-border commercial and corporate transactions with Chinese/Japanese energy companies",
      "Drafted and negotiated SaaS, franchise, and lease agreements for local and international clients",
      "Developed a SaaS parking application for Riyadh with master franchise agreements",
      "Advised Saudi Ministry of Commerce on attracting international businesses including Formula 1",
      "Provided legal guidance to startups ensuring regulatory compliance",
    ],
  },
  {
    title: "Senior Associate",
    company: "A. W. Butt & Associates",
    period: "Aug 2018 - Oct 2020",
    location: "Lahore, Pakistan",
    description: "Law firm specializing in service and banking law.",
    highlights: [
      "Managed all service law cases for Pakistan Railways in district and High Courts",
      "Conducted research and drafted pleadings for Supreme Court cases in service and banking law",
      "Advised Habib Bank Limited on agricultural financing",
      "Spearheaded property and civil law litigation in Lahore's civil courts",
    ],
  },
  {
    title: "Junior Political Attaché",
    company: "Foreign Office of Pakistan",
    period: "May 2015 - Aug 2015",
    location: "Washington, United States",
    description: "Government organization focused on diplomatic relations.",
    highlights: [
      "Planned & organized meetings for foreign dignitaries",
      "Supported Finance Attaché in negotiating trade agreements between US & Pakistani fabric manufacturers",
      "Aided Political Attaché in promoting Pakistan's commitment to peace",
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
