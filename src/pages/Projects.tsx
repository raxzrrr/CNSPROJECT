import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Shield, Lock, Key, FileKey } from "lucide-react";

const Projects = () => {
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
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Course Projects</h1>
          <p className="text-center text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Practical implementations demonstrating cryptography principles, network security, and security testing methodologies
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="academic-section bg-background">
        <div className="academic-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
