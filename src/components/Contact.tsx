import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="section-divider mt-6" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Available for consultations on commercial law, corporate transactions, and legal advisory services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:Muhammadfaizan520@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elegant p-8 flex items-center gap-6 hover:border-accent/50 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">Muhammadfaizan520@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muhammad-faizan111"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-elegant p-8 flex items-center gap-6 hover:border-accent/50 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">LinkedIn</h3>
                <p className="text-muted-foreground">Connect on LinkedIn</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-elegant p-8 flex items-center gap-6 md:col-span-2"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Lahore, Pakistan</p>
                <p className="text-sm text-muted-foreground mt-1">Silverline Law Chambers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
