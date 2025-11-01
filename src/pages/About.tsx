import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, User, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="h-12 w-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h1>
          <p className="text-center text-xl text-primary-foreground/90">Student Information</p>
        </div>
      </section>

      {/* Personal Information */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-4xl">
          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <h2 className="subsection-title flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-accent" />
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Name</p>
                <p className="text-lg font-semibold">Mohit Sherkhane</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">University Serial Number</p>
                <p className="text-lg font-semibold">01FE22BCS072</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Semester</p>
                <p className="text-lg font-semibold">7th Semester, D Division</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Department</p>
                <p className="text-lg font-semibold">Computer Science and Engineering</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground mb-1">Institution</p>
                <p className="text-lg font-semibold">KLE Technological University</p>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <h2 className="subsection-title flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-accent" />
              Academic Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Course</p>
                <p className="text-lg font-semibold">Cryptography and Network Services (CNS)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Areas of Interest</p>
                <p className="text-foreground/80 leading-relaxed">
                  My academic focus lies in <span className="font-medium text-accent">cybersecurity</span> and{" "}
                  <span className="font-medium text-accent">cryptography</span>. I am particularly interested 
                  in understanding the mathematical foundations of encryption algorithms, network security protocols, 
                  and practical security implementations. Through this coursework, I have developed a strong foundation 
                  in both classical and modern cryptographic techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Description */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-accent/20 p-8">
            <h2 className="subsection-title flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-accent" />
              Portfolio Overview
            </h2>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                This portfolio represents a comprehensive collection of projects and implementations developed 
                during my study of Cryptography and Network Services. Each project demonstrates practical 
                application of theoretical concepts learned in the course.
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground mb-3">Portfolio Contents:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">
                      <span className="font-medium">CAPTCHA Verification System:</span> Web security and authentication implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">
                      <span className="font-medium">Cryptography Library:</span> Comprehensive implementation of classical and modern ciphers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">
                      <span className="font-medium">Password Cracking Tool:</span> Security testing and vulnerability assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">
                      <span className="font-medium">Substitution Cipher:</span> GUI-based classical cipher implementation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">
                      <span className="font-medium">Firewall Configuration:</span> Network security and access control demonstration
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4">
                <span className="font-medium">Purpose:</span> This portfolio demonstrates my understanding of 
                cryptography concepts, network security principles, and ability to implement secure systems 
                through practical, working implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
