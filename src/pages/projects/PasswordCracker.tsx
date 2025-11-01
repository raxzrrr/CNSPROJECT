import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { Key, Hash, Zap, Shield } from "lucide-react";

const PasswordCracker = () => {
  const hashCrackingCode = `def crack_hash(hash_value, hash_type='auto'):
    if hash_type == 'auto':
        hash_type = detect_hash_type(hash_value)
    
    # Try dictionary attack with variations
    for password in load_dictionary():
        for variation in generate_variations(password):
            if hash_password(variation, hash_type) == hash_value:
                return variation
    
    # Try brute force if dictionary fails
    return brute_force_attack(hash_value, hash_type)`;

  const dictionaryVariationsCode = `def generate_variations(password):
    variations = [
        password.lower(),
        password.upper(),
        password.capitalize(),
    ]
    
    # Add number suffixes
    for num in range(10):
        variations.append(password + str(num))
    
    # Add common suffixes
    for suffix in ['!', '123', '@', '#', '$']:
        variations.append(password + suffix)
    
    # Leetspeak variations
    leet = password.replace('a', '4').replace('e', '3')
                    .replace('i', '1').replace('o', '0')
    variations.append(leet)
    
    return variations`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex justify-center mb-4">
            <Key className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Password Cracking Tool
          </h1>
          <p className="text-center text-xl text-primary-foreground/90">
            Multi-functional security testing and vulnerability assessment tool
          </p>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            A comprehensive password cracking tool supporting various attack methods including dictionary attacks, 
            brute force, hash cracking, and cipher decryption. This tool demonstrates security testing principles 
            and vulnerability assessment techniques used in penetration testing and security auditing.
          </p>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <Hash className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Hash Cracking</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Supports MD5, SHA1, SHA256, SHA512</li>
                <li>• Dictionary attack with variations</li>
                <li>• Brute force attack (configurable length)</li>
                <li>• Auto-detects hash type for optimization</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Key className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Cipher Decryption</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Caesar cipher (tries all 26 shifts)</li>
                <li>• Substitution cipher (frequency analysis)</li>
                <li>• Vigenère cipher (brute force)</li>
                <li>• Base64 and hexadecimal decoding</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Zap className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Plain Password Attacks</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Dictionary attack from wordlist</li>
                <li>• Brute force attack (all combinations)</li>
                <li>• Case-insensitive matching</li>
                <li>• Progress tracking and timing</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Advanced Features</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Password variation generation</li>
                <li>• Leetspeak transformations</li>
                <li>• Number and symbol suffixes</li>
                <li>• Detailed attack statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Attack Methods Explained</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Dictionary Attack</h3>
              <p className="text-foreground/80 mb-4">
                Uses a wordlist of common passwords and generates variations including:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 ml-4 text-sm text-foreground/80">
                <li>• Case variations (lower, upper, capitalize)</li>
                <li>• Number suffixes (0-9, 00-99)</li>
                <li>• Common suffixes (!, 123, @, #, $, 2023, 2024)</li>
                <li>• Leetspeak transformations (a→4, e→3, i→1, o→0, s→5, t→7)</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Brute Force Attack</h3>
              <p className="text-foreground/80 mb-4">
                Systematically tries all possible character combinations:
              </p>
              <ul className="space-y-1 ml-4 text-sm text-foreground/80">
                <li>• Configurable maximum length (recommended: 4-6 for testing)</li>
                <li>• Progress tracking with attempt counts</li>
                <li>• Time statistics and performance metrics</li>
                <li>• Character set: lowercase, uppercase, digits, special characters</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Hash Type Detection</h3>
              <p className="text-foreground/80 mb-4">
                Automatically identifies hash types based on length:
              </p>
              <ul className="space-y-1 ml-4 text-sm text-foreground/80">
                <li>• MD5: 32 characters</li>
                <li>• SHA-1: 40 characters</li>
                <li>• SHA-256: 64 characters</li>
                <li>• SHA-512: 128 characters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Code Implementation</h2>
          
          <CodeBlock 
            title="Hash Cracking Function"
            code={hashCrackingCode}
          />
          
          <CodeBlock 
            title="Dictionary Variations Generator"
            code={dictionaryVariationsCode}
          />
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Usage Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-2">MD5 Hash Cracking</h3>
              <p className="text-sm text-foreground/70 mb-2">Input:</p>
              <code className="text-xs bg-muted p-2 rounded block mb-2">5f4dcc3b5aa765d61d8327deb882cf99</code>
              <p className="text-sm text-foreground/70 mb-2">Output:</p>
              <code className="text-xs bg-accent/10 p-2 rounded block">password</code>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-2">SHA256 Hash Cracking</h3>
              <p className="text-sm text-foreground/70 mb-2">Input:</p>
              <code className="text-xs bg-muted p-2 rounded block mb-2 break-all">ef92b778bafe771e89245b89ecbc08a44a4e166c...</code>
              <p className="text-sm text-foreground/70 mb-2">Output:</p>
              <code className="text-xs bg-accent/10 p-2 rounded block">password123</code>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-2">Caesar Cipher Decryption</h3>
              <p className="text-sm text-foreground/70 mb-2">Input:</p>
              <code className="text-xs bg-muted p-2 rounded block mb-2">KHOOR ZRUOG</code>
              <p className="text-sm text-foreground/70 mb-2">Output (shift 3):</p>
              <code className="text-xs bg-accent/10 p-2 rounded block">HELLO WORLD</code>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-2">Base64 Decoding</h3>
              <p className="text-sm text-foreground/70 mb-2">Input:</p>
              <code className="text-xs bg-muted p-2 rounded block mb-2">SGVsbG8gV29ybGQ=</code>
              <p className="text-sm text-foreground/70 mb-2">Output:</p>
              <code className="text-xs bg-accent/10 p-2 rounded block">Hello World</code>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-destructive/5">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title text-destructive">Security & Ethical Considerations</h2>
          <div className="bg-card border border-destructive/30 rounded-lg p-6">
            <ul className="space-y-3">
              {[
                "Educational purposes only - demonstrates importance of strong passwords",
                "Never use on systems without explicit authorization",
                "Shows vulnerability of weak passwords and common patterns",
                "Highlights need for proper security practices and strong password policies",
                "Demonstrates why password hashing alone is insufficient without salt",
              ].map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-destructive mt-1">⚠</span>
                  <span className="text-foreground/80">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PasswordCracker;
