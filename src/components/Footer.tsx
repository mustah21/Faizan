import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-bold text-foreground">
              Muhammad <span className="text-accent">Faizan</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Partner at Silverline Law Chambers
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:Muhammadfaizan520@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-faizan111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muhammad Faizan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
