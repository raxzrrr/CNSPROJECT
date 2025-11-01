import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import { FileKey, KeyRound, Lock, Unlock } from "lucide-react";

const SubstitutionCipher = () => {
  const keyGenCode = `def generate_key():
    letters = list(string.ascii_uppercase)
    shuffled = letters.copy()
    random.shuffle(shuffled)
    return ''.join(shuffled)`;

  const encryptCode = `def encrypt(message, key):
    key = key.upper()
    mapping = dict(zip(string.ascii_uppercase, key))
    result = ''
    for ch in message.upper():
        result += mapping.get(ch, ch)
    return result`;

  const decryptCode = `def decrypt(ciphertext, key):
    key = key.upper()
    mapping = dict(zip(key, string.ascii_uppercase))
    result = ''
    for ch in ciphertext.upper():
        result += mapping.get(ch, ch)
    return result`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex justify-center mb-4">
            <FileKey className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Substitution Cipher Implementation
          </h1>
          <p className="text-center text-xl text-primary-foreground/90">
            GUI-based classical cipher with key generation and validation
          </p>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            A graphical user interface implementation of the substitution cipher, allowing users to encrypt and decrypt 
            messages using a custom 26-letter key. This project demonstrates classical cryptography principles with an 
            intuitive and interactive interface built using Python's Tkinter library.
          </p>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <Lock className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Encryption</h3>
              <p className="text-sm text-foreground/80">
                Encrypt plaintext messages using a 26-letter substitution key with character-by-character mapping
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Unlock className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Decryption</h3>
              <p className="text-sm text-foreground/80">
                Decrypt ciphertext messages using the same substitution key to recover original plaintext
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <KeyRound className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Key Generation</h3>
              <p className="text-sm text-foreground/80">
                Automatically generate random 26-letter keys ensuring all letters are unique
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <FileKey className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Key Validation</h3>
              <p className="text-sm text-foreground/80">
                Validates that keys are exactly 26 unique uppercase letters (A-Z)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">How It Works</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent flex items-center gap-2">
                <KeyRound className="h-5 w-5" />
                1. Key Generation
              </h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Creates a random permutation of all 26 letters (A-Z)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ensures all letters are unique in the key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Returns a 26-character string representing the substitution alphabet</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                2. Encryption Process
              </h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Maps each letter in plaintext to corresponding position in substitution key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Example: If key is "ZYXWVUTSRQPONMLKJIHGFEDCBA", then A→Z, B→Y, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Preserves case by converting to uppercase for processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Non-alphabetic characters (spaces, punctuation) remain unchanged</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent flex items-center gap-2">
                <Unlock className="h-5 w-5" />
                3. Decryption Process
              </h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Reverses the mapping using the same substitution key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Maps key letters back to their original alphabet positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Restores the original plaintext message</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Code Implementation</h2>
          
          <CodeBlock 
            title="Key Generation Function"
            code={keyGenCode}
          />
          
          <CodeBlock 
            title="Encryption Function"
            code={encryptCode}
          />
          
          <CodeBlock 
            title="Decryption Function"
            code={decryptCode}
          />
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Screenshot
              src="/images/substitution-cipher/SUBSTITUTION CIPHER ENCRYPT WITH KEY.png"
              alt="Encryption Interface"
              caption="Encryption interface with generated key and encrypted output"
            />
            <Screenshot
              src="/images/substitution-cipher/SUBSTITUTION DECRYPT WITH KEY.png"
              alt="Decryption Interface"
              caption="Decryption interface showing ciphertext decryption with key"
            />
          </div>
        </div>
      </section>

      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="subsection-title">GUI Components</h2>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Text input area for message/ciphertext</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Key entry field (26 characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>"Generate Key" button</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>"Encrypt" and "Decrypt" buttons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Output display area</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="subsection-title">Key Validation Rules</h2>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Must be exactly 26 characters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Must contain only uppercase letters A-Z</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Must have no duplicate letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Each letter appears exactly once</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-section bg-accent/5">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Cryptanalysis Notes</h2>
          <div className="bg-card border border-accent/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Vulnerabilities of Substitution Ciphers</h3>
            <ul className="space-y-2 ml-4 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Can be broken using frequency analysis of letter patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Common letter frequencies in English (E, T, A, O, I, N) reveal patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Digraph and trigraph analysis improves cryptanalysis accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Not suitable for secure communications - educational implementation only</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubstitutionCipher;
