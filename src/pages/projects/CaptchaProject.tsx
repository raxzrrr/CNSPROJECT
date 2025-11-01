import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import { Shield, Check, FileText, Eye } from "lucide-react";

const CaptchaProject = () => {
  const captchaGenerationCode = `from PIL import Image, ImageDraw, ImageFont
import random
import string

def generate_captcha():
    # Create 5-character random code
    captcha_text = ''.join(random.choices(
        string.ascii_uppercase + string.digits, k=5
    ))
    
    # Create image with distortion
    img = Image.new('RGB', (200, 80), color='white')
    draw = ImageDraw.Draw(img)
    
    # Add rotation and noise
    for i, char in enumerate(captcha_text):
        angle = random.randint(-30, 30)
        # Draw character with rotation
        draw.text((30 + i*30, 25), char, fill='black')
    
    # Add noise lines and dots
    for _ in range(5):
        draw.line([(random.randint(0, 200), random.randint(0, 80)),
                   (random.randint(0, 200), random.randint(0, 80))],
                  fill='gray', width=1)
    
    return captcha_text, img`;

  const flaskRouteCode = `@app.route('/verify', methods=['POST'])
def verify_captcha():
    user_input = request.form.get('captcha', '').upper()
    user_text = request.form.get('user_text', '')
    
    # Verify CAPTCHA (case-insensitive)
    if user_input == session.get('captcha'):
        # Save to CSV with timestamp
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        with open('user_data.csv', 'a') as f:
            f.write(f"{timestamp},{user_text}\\n")
        
        # Clear CAPTCHA from session (one-time use)
        session.pop('captcha', None)
        
        return redirect('/success')
    else:
        return redirect('/?error=invalid_captcha')`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            CAPTCHA Verification & Text Storage System
          </h1>
          <p className="text-center text-xl text-primary-foreground/90">
            Secure web application with CAPTCHA verification
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            A secure web application that requires CAPTCHA verification before allowing users to store text data 
            in a CSV database. This project demonstrates security principles and user authentication mechanisms 
            critical to web application security.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <h3 className="subsection-title">Key Objectives</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Implement visual CAPTCHA generation with random characters and distortion</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Validate user input before allowing data storage</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Store verified data in CSV format with timestamps</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Demonstrate session management and one-time CAPTCHA use</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">CAPTCHA Generation</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Creates visual CAPTCHA with random characters, rotation effects, and noise patterns to prevent automated submissions
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <Check className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">CAPTCHA Verification</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Validates user input before allowing data storage, ensuring human interaction
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <FileText className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">CSV Storage</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Saves verified user text to CSV file with timestamps for data persistence
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <Eye className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Data Viewing</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                View all stored entries in a formatted table interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Technical Implementation</h2>
          
          <div className="mb-8">
            <h3 className="subsection-title">Technology Stack</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium mb-2">Backend</p>
                <p className="text-sm text-foreground/80">Python Flask</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium mb-2">Frontend</p>
                <p className="text-sm text-foreground/80">HTML, CSS, JavaScript</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium mb-2">Image Generation</p>
                <p className="text-sm text-foreground/80">PIL (Pillow)</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium mb-2">Storage</p>
                <p className="text-sm text-foreground/80">CSV File System</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="subsection-title">Code Implementation</h3>
            
            <CodeBlock 
              title="CAPTCHA Generation Function"
              code={captchaGenerationCode}
              language="python"
            />

            <CodeBlock 
              title="Flask Route for CAPTCHA Verification"
              code={flaskRouteCode}
              language="python"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">How It Works</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">1. CAPTCHA Generation Process</h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Creates a 5-character random code using uppercase letters and digits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Generates a distorted image with rotation, noise lines, and dots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Stores the correct answer in the user session</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">2. Verification Process</h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>User must enter the CAPTCHA text correctly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>CAPTCHA is case-insensitive (converted to uppercase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>After verification, CAPTCHA is cleared from session (one-time use)</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">3. Data Storage</h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Only after successful CAPTCHA verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Text is saved to user_data.csv with timestamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>CSV format: timestamp, user_text</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Screenshot
              src="/images/captcha/Captcha Verification.png"
              alt="CAPTCHA Verification Main Interface"
              caption="Main form with CAPTCHA image and text input"
            />
            <Screenshot
              src="/images/captcha/Stored Data Example.png"
              alt="Stored Data View"
              caption="View of all stored entries with timestamps"
            />
          </div>
        </div>
      </section>

      {/* Security Features & Learning Outcomes */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="subsection-title">Security Features</h2>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Session-based CAPTCHA validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">One-time CAPTCHA use</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Case-insensitive matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Input validation</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="subsection-title">Learning Outcomes</h2>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Understanding CAPTCHA mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Web security principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Session management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Flask web development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaptchaProject;
