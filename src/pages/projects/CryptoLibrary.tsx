import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { Lock, Hash, Key, Shield } from "lucide-react";

const CryptoLibrary = () => {
  const caesarCode = `from crypto_library import CaesarCipher

message = "HELLO WORLD"
encrypted = CaesarCipher.encrypt(message, shift=3)
# Output: KHOOR ZRUOG

decrypted = CaesarCipher.decrypt(encrypted, shift=3)
# Output: HELLO WORLD`;

  const vigenereCode = `from crypto_library import VigenereCipher

encrypted = VigenereCipher.encrypt("ATTACK AT DAWN", "LEMON")
decrypted = VigenereCipher.decrypt(encrypted, "LEMON")`;

  const rsaCode = `from crypto_library import RSACipher

public_key, private_key = RSACipher.generate_keypair(p=61, q=53)
encrypted = RSACipher.encrypt("HELLO", public_key)
decrypted = RSACipher.decrypt(encrypted, private_key)`;

  const hashCode = `from crypto_library import HashFunctions

md5_hash = HashFunctions.md5("Hello, World!")
sha256_hash = HashFunctions.sha256("Hello, World!")`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex justify-center mb-4">
            <Lock className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Cryptography Library Implementation
          </h1>
          <p className="text-center text-xl text-primary-foreground/90">
            Comprehensive Python library for cryptographic algorithms
          </p>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            A complete Python library implementing various classical and modern cryptographic algorithms with full demonstrations. 
            This library serves as an educational resource for understanding cryptography fundamentals, from classical ciphers 
            to modern public key cryptography and hashing algorithms.
          </p>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Library Contents</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title flex items-center gap-2">
                <Key className="h-6 w-6 text-accent" />
                Classical Ciphers
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Caesar Cipher", desc: "Simple shift cipher implementation" },
                  { name: "Substitution Cipher", desc: "Letter replacement with key generation" },
                  { name: "Vigenère Cipher", desc: "Polyalphabetic substitution cipher" },
                  { name: "Playfair Cipher", desc: "Digraphic substitution cipher" },
                  { name: "Hill Cipher", desc: "Matrix-based substitution cipher" },
                  { name: "Rail Fence Cipher", desc: "Transposition cipher" },
                ].map((cipher, idx) => (
                  <div key={idx} className="bg-card rounded-lg border border-border p-4">
                    <h4 className="font-semibold mb-1">{cipher.name}</h4>
                    <p className="text-sm text-foreground/70">{cipher.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="subsection-title flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                Modern Ciphers
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "XOR Cipher", desc: "Bitwise XOR encryption" },
                  { name: "One-Time Pad", desc: "Theoretically unbreakable cipher" },
                  { name: "RSA", desc: "Public key cryptography" },
                ].map((cipher, idx) => (
                  <div key={idx} className="bg-card rounded-lg border border-border p-4">
                    <h4 className="font-semibold mb-1">{cipher.name}</h4>
                    <p className="text-sm text-foreground/70">{cipher.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="subsection-title flex items-center gap-2">
                <Hash className="h-6 w-6 text-accent" />
                Hashing Algorithms
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "MD5 hash function",
                  "SHA-1 hash function",
                  "SHA-256 hash function",
                  "SHA-512 hash function",
                ].map((hash, idx) => (
                  <div key={idx} className="bg-card rounded-lg border border-border p-4">
                    <p className="font-semibold">{hash}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Code Examples</h2>
          
          <CodeBlock 
            title="Caesar Cipher Example"
            code={caesarCode}
          />
          
          <CodeBlock 
            title="Vigenère Cipher Example"
            code={vigenereCode}
          />
          
          <CodeBlock 
            title="RSA Example"
            code={rsaCode}
          />
          
          <CodeBlock 
            title="Hashing Example"
            code={hashCode}
          />
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Security Warnings</h2>
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-destructive">Important Educational Notes</h3>
            <ul className="space-y-2 ml-4">
              {[
                "Educational Purpose: Designed for learning, not production use",
                "RSA Implementation: Uses small primes for demonstration only",
                "Hashing: MD5 and SHA-1 are cryptographically broken - do not use in production",
                "Classical Ciphers: Can be easily broken with modern cryptanalysis techniques",
                "Best Practices: Always use established libraries (cryptography, PyCrypto) for production systems",
              ].map((warning, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-destructive mt-1">⚠</span>
                  <span className="text-foreground/80">{warning}</span>
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

export default CryptoLibrary;
