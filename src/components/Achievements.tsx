import { motion } from "framer-motion";
import { Trophy, BookOpen, Users, Scale } from "lucide-react";

const achievements = [
  {
    icon: Scale,
    title: "Led Major PPP Project",
    description:
      "Spearheaded the legal framework for a public-private partnership to establish a large-scale water treatment plant on the Ravi River, including drafting complex agreements and ensuring regulatory compliance.",
  },
  {
    icon: BookOpen,
    title: "Professor of Law",
    description:
      "Taught programs of Liverpool John Moors University and University of London at prestigious law schools in Pakistan including Beaconhouse International College and University of Lahore.",
  },
  {
    icon: Users,
    title: "GCC Legal Experience",
    description:
      "Collaborated on government initiatives in Saudi Arabia and UAE, including SaaS-based parking app development and advising the Ministry of Commerce on attracting foreign investment.",
  },
  {
    icon: Trophy,
    title: "FIFA Election Committee Chair",
    description:
      "Played a pivotal role in facilitating FIFA's return to Pakistan as Chair of the Election Committee, ensuring compliance and fair electoral process.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Key <span className="text-gradient-gold">Achievements</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elegant p-8 hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
