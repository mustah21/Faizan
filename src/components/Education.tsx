import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Laws in International Business Law",
    honors: "LLM (Hons)",
    institution: "University of Sydney",
    period: "2017 - 2018",
    location: "Sydney, Australia",
  },
  {
    degree: "Bachelor of Law",
    honors: "LLB (Hons)",
    institution: "University of Central Lancashire",
    period: "2013 - 2016",
    location: "Preston, UK",
  },
];

const certifications = [
  {
    title: "Directors Training Program",
    issuer: "Institute of Chartered Accountants of Pakistan (ICAP)",
    description:
      "Corporate governance best practices, relevant regulations, Listed Companies Code 2019 & Public Sector Rules 2013, and financial/strategic management. (2025)",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Education & <span className="text-gradient-gold">Certifications</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elegant p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-medium mb-4">{edu.honors}</p>
                  
                  <p className="text-foreground font-medium mb-4">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
              Professional Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-elegant p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                
                <div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-accent font-medium mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
