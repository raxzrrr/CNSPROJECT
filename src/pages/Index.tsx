import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Shield, Lock, Key, FileKey, Network, Code2 } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "CAPTCHA Verification System",
      description: "A secure web application requiring CAPTCHA verification before storing text data in CSV database. Demonstrates security principles and authentication mechanisms.",
      icon: Shield,
      link: "/projects/captcha",
      tags: ["Flask", "PIL", "Security", "Web Development"],
    },
    {
      title: "Cryptography Library",
      description: "Comprehensive Python library implementing classical and modern cryptographic algorithms including Caesar, Vigenère, RSA, and various hash functions.",
      icon: Lock,
      link: "/projects/crypto-library",
      tags: ["Python", "Cryptography", "Algorithms", "Education"],
    },
    {
      title: "Password Cracking Tool",
      description: "Multi-functional security testing tool supporting dictionary attacks, brute force, hash cracking, and cipher decryption for vulnerability assessment.",
      icon: Key,
      link: "/projects/password-cracker",
      tags: ["Security Testing", "Hash Cracking", "Python"],
    },
    {
      title: "Substitution Cipher",
      description: "GUI-based substitution cipher implementation with encryption, decryption, and automatic key generation using Tkinter interface.",
      icon: FileKey,
      link: "/projects/substitution-cipher",
      tags: ["Classical Cipher", "GUI", "Tkinter"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-20">
        <div className="academic-container text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-foreground/10 rounded-full">
              <Code2 className="h-16 w-16 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cryptography and Network Services
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
            Course Portfolio - Computer Science and Engineering
          </p>
          <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-lg font-medium">7th Semester | D Division | KLE Technological University</p>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="academic-section bg-background">
        <div className="academic-container">
          <h2 className="section-title text-center">Course Overview</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              This portfolio showcases practical implementations and comprehensive studies in{" "}
              <span className="font-semibold text-accent">Cryptography and Network Services</span>.
              The projects demonstrate understanding of cryptographic principles, network security
              mechanisms, and practical security implementations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <Network className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Network Security</h3>
                <p className="text-sm text-muted-foreground">Firewall configuration and access control</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <Lock className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Cryptography</h3>
                <p className="text-sm text-muted-foreground">Classical and modern encryption techniques</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Security Testing</h3>
                <p className="text-sm text-muted-foreground">Vulnerability assessment and penetration testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container">
          <h2 className="section-title text-center">Portfolio Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Firewall Configuration CTA */}
      <section className="academic-section bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="academic-container text-center">
          <Network className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl font-bold mb-4">Firewall Configuration Demonstration</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Step-by-step tutorial and documentation on implementing firewall rules for network access control
          </p>
          <a href="/firewall">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:shadow-lg">
              View Firewall Configuration
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
