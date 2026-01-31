import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const teachingRoles = [
  {
    institution: "Beaconhouse International College",
    location: "Lahore, Pakistan",
    period: "2021",
    courses: [
      "LLB (Hons) program of Liverpool John Moors University",
      "University of London Program",
      "Legal Jurisprudence",
      "Justice Human Rights and the State",
      "Foundation in Independent Legal Learning",
      "Civil Dispute Resolution and Legal Ethics",
    ],
  },
  {
    institution: "University of Lahore",
    location: "Lahore, Pakistan",
    period: "2020 - 2022",
    courses: [
      "Logic, Reasoning and Argumentation (course designed with focus on legal thought and reasoning)",
      "Designed for second year law students under HEC Pakistan guidelines",
    ],
  },
];

const Teaching = () => {
  return (
    <section id="teaching" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Academic <span className="text-gradient-gold">Teaching</span>
          </h2>
          <div className="section-divider mt-6" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Committed to shaping the next generation of legal professionals through quality education
            at prestigious institutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {teachingRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elegant p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        Professor of Law
                      </h3>
                      <p className="text-accent font-medium">{role.institution}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      Courses & Programs
                    </h4>
                    <ul className="space-y-2">
                      {role.courses.map((course, cIndex) => (
                        <li key={cIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
