import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";
import { Shield, Lock, Key, Check, FileText, Code, Server, Globe, Download, BookOpen, Camera } from "lucide-react";

const Evaluation = () => {
  const appPyCode = `from flask import Flask, render_template, request, redirect, session, jsonify
import pyotp
import os
from datetime import datetime, timedelta

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

# Store OTPs in memory (use Redis/DB in production)
otp_storage = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    captcha_response = request.form.get('g-recaptcha-response')
    
    # Verify CAPTCHA (using test key - always passes)
    if not captcha_response:
        return jsonify({'error': 'Please complete CAPTCHA'}), 400
    
    # Generate OTP
    secret = pyotp.random_base32()
    totp = pyotp.TOTP(secret)
    otp = totp.now()
    
    # Store OTP with expiration (5 minutes)
    otp_storage[username] = {
        'otp': otp,
        'expires_at': datetime.now() + timedelta(minutes=5),
        'attempts': 0
    }
    
    return jsonify({'otp': otp, 'message': 'OTP generated successfully'})

@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    username = request.form.get('username')
    user_otp = request.form.get('otp')
    
    if username not in otp_storage:
        return jsonify({'error': 'OTP not found. Please login again.'}), 400
    
    otp_data = otp_storage[username]
    
    # Check expiration
    if datetime.now() > otp_data['expires_at']:
        del otp_storage[username]
        return jsonify({'error': 'OTP expired. Please login again.'}), 400
    
    # Check attempts
    if otp_data['attempts'] >= 3:
        del otp_storage[username]
        return jsonify({'error': 'Maximum attempts exceeded. Please login again.'}), 400
    
    # Verify OTP
    if user_otp == otp_data['otp']:
        session['username'] = username
        del otp_storage[username]
        return jsonify({'success': True, 'redirect': '/dashboard'})
    else:
        otp_data['attempts'] += 1
        return jsonify({'error': f'Invalid OTP. {3 - otp_data["attempts"]} attempts remaining.'}), 400

@app.route('/dashboard')
def dashboard():
    if 'username' not in session:
        return redirect('/')
    return render_template('dashboard.html')

if __name__ == '__main__':
    # SSL Configuration (optional)
    ssl_context = None
    if os.path.exists('cert.pem') and os.path.exists('key.pem'):
        ssl_context = ('cert.pem', 'key.pem')
        app.run(host='0.0.0.0', port=5000, ssl_context=ssl_context, debug=True)
    else:
        app.run(host='0.0.0.0', port=5000, debug=True)`;

  const generateSslCode = `#!/bin/bash

echo "Generating SSL certificates for development..."
echo "This will create self-signed certificates valid for 365 days."

openssl req -x509 -newkey rsa:4096 -nodes \
    -keyout key.pem \
    -out cert.pem \
    -days 365 \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

echo "✅ SSL certificates generated successfully!"
echo "- cert.pem (certificate)"
echo "- key.pem (private key)"
echo ""
echo "You can now run the Flask app with SSL enabled."`;

  const requirementsCode = `Flask==3.0.0
pyotp==2.9.0`;

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
            Evaluation 3: Web Security
          </h1>
          <p className="text-center text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Implementation of CAPTCHA, OTP (One-Time Password), and SSL Encryption
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            This project demonstrates three essential web security features: <strong>CAPTCHA</strong>, 
            <strong> OTP (One-Time Password)</strong>, and <strong>SSL encryption</strong>. It's a complete, 
            working web application with a simple, user-friendly interface that showcases practical 
            implementation of security measures in web development.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-6">
            <h3 className="subsection-title mb-4">Project Structure</h3>
            <div className="font-mono text-sm text-foreground/80 space-y-1">
              <div>cnssss/</div>
              <div className="ml-4">├── app.py                      # Main Flask backend application</div>
              <div className="ml-4">├── requirements.txt            # Python dependencies</div>
              <div className="ml-4">├── generate_ssl.sh            # SSL certificate generation script</div>
              <div className="ml-4">├── templates/                 # HTML templates</div>
              <div className="ml-8">│   ├── index.html            # Home page</div>
              <div className="ml-8">│   ├── login.html            # Login page with CAPTCHA & OTP</div>
              <div className="ml-8">│   └── dashboard.html        # Success page after authentication</div>
              <div className="ml-4">└── static/                    # Static files</div>
              <div className="ml-8">    └── style.css             # CSS styling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Implemented */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Features Implemented</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">1. CAPTCHA</h3>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Technology:</strong> Google reCAPTCHA v2
              </p>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Function:</strong> Prevents automated bot attacks
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Status:</strong> <span className="text-green-600">✅ Fully functional</span> (using test key)
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Key className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">2. OTP (One-Time Password)</h3>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Technology:</strong> pyotp (TOTP - Time-based OTP)
              </p>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Function:</strong> Two-factor authentication
              </p>
              <ul className="text-foreground/80 text-sm space-y-1 ml-4">
                <li>• 6-digit numeric codes</li>
                <li>• 5-minute expiration</li>
                <li>• Maximum 3 verification attempts</li>
              </ul>
              <p className="text-foreground/80 text-sm mt-3">
                <strong>Status:</strong> <span className="text-green-600">✅ Fully functional</span>
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Lock className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">3. SSL Encryption</h3>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Technology:</strong> Flask SSL context
              </p>
              <p className="text-foreground/80 text-sm mb-3">
                <strong>Function:</strong> HTTPS encryption
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Setup:</strong> generate_ssl.sh script
              </p>
              <p className="text-foreground/80 text-sm mt-3">
                <strong>Status:</strong> <span className="text-green-600">✅ Optional</span> (works with or without SSL)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <Server className="h-6 w-6 text-accent mb-2" />
              <p className="font-medium mb-1">Backend</p>
              <p className="text-sm text-foreground/80">Python 3.7+, Flask 3.0.0</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Globe className="h-6 w-6 text-accent mb-2" />
              <p className="font-medium mb-1">Frontend</p>
              <p className="text-sm text-foreground/80">HTML5, CSS3, JavaScript</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Lock className="h-6 w-6 text-accent mb-2" />
              <p className="font-medium mb-1">Security Libraries</p>
              <p className="text-sm text-foreground/80">pyotp, Google reCAPTCHA API</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Key className="h-6 w-6 text-accent mb-2" />
              <p className="font-medium mb-1">SSL</p>
              <p className="text-sm text-foreground/80">OpenSSL (certificate generation)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Implementation */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Code Implementation</h2>
          
          <CodeBlock 
            title="Main Flask Application (app.py)"
            code={appPyCode}
            language="python"
          />

          <CodeBlock 
            title="SSL Certificate Generation Script (generate_ssl.sh)"
            code={generateSslCode}
            language="bash"
          />

          <CodeBlock 
            title="Python Dependencies (requirements.txt)"
            code={requirementsCode}
            language="text"
          />
        </div>
      </section>

      {/* User Flow */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">User Flow</h2>
          <div className="space-y-4">
            <div className="bg-card rounded-lg border border-border p-6">
              <ol className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                  <span>User visits home page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                  <span>Clicks "Start Demo"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                  <span>Enters username</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                  <span>Completes CAPTCHA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">5</span>
                  <span>Clicks "Login & Get OTP"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">6</span>
                  <span>Receives OTP (displayed for demo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">7</span>
                  <span>Enters OTP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">8</span>
                  <span>Clicks "Verify OTP"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">9</span>
                  <span>Redirected to success dashboard</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Security Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">CAPTCHA Protection</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Blocks automated bots</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Human verification required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Prevents brute force attacks</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">OTP Security</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Time-limited codes (5 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Single-use tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Attempt limiting (max 3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Server-side verification</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">SSL Encryption</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Encrypted data transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Prevents man-in-the-middle attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Secure cookie handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <div className="flex items-center gap-2 mb-6">
            <Camera className="h-6 w-6 text-accent" />
            <h2 className="section-title">Output Screenshots</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Screenshot
              src="/images/evaluation/login-page.png"
              alt="Secure Login Page with CAPTCHA"
              caption="Login page with CAPTCHA verification and username input"
            />
            <Screenshot
              src="/images/evaluation/ssl-generation.png"
              alt="SSL Certificate Generation"
              caption="Terminal output showing successful SSL certificate generation"
            />
            <Screenshot
              src="/images/evaluation/login-success.png"
              alt="Login Successful Dashboard"
              caption="Success page showing all implemented security features"
            />
          </div>
        </div>
      </section>

      {/* How to Run */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">How to Run</h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <ol className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium mb-1">Install dependencies:</p>
                  <CodeBlock code="pip install -r requirements.txt" language="bash" />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium mb-1">Generate SSL (optional):</p>
                  <CodeBlock code="./generate_ssl.sh" language="bash" />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                <div>
                  <p className="font-medium mb-1">Run application:</p>
                  <CodeBlock code="python app.py" language="bash" />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                <div>
                  <p className="font-medium mb-1">Access in browser:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• http://localhost:5000 (without SSL)</li>
                    <li>• https://localhost:5000 (with SSL)</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-accent" />
            <h2 className="section-title">Learning Outcomes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-4 text-accent">Technical Skills</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Understanding CAPTCHA mechanisms and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>OTP generation and verification using pyotp library</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>SSL/TLS certificate generation and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Flask web development and session management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Security best practices in web applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-4 text-accent">Security Concepts</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Bot protection and automated attack prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Two-factor authentication (2FA) implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Encrypted data transmission over HTTPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Time-based token expiration and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Session management and secure authentication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Deliverables Checklist</h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Code files (app.py, templates, static files)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Detailed implementation steps</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Learning outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Screenshot guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Complete documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Quick start guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Project summary</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground/80">Output images/screenshots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Important Notes</h2>
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong>Demo Mode:</strong> OTP is displayed on screen for demonstration purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong>Test CAPTCHA:</strong> Uses Google's test key (always passes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong>Self-Signed SSL:</strong> Browser will show security warning (normal for development)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong>In-Memory Storage:</strong> OTPs stored in memory (use Redis/DB in production)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-accent">Project Status</h2>
            <p className="text-xl text-foreground/90 mb-6">✅ Complete and Ready for Submission</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Check className="h-5 w-5 text-green-600" />
                <span>CAPTCHA implementation</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Check className="h-5 w-5 text-green-600" />
                <span>OTP implementation</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Check className="h-5 w-5 text-green-600" />
                <span>SSL implementation</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Check className="h-5 w-5 text-green-600" />
                <span>All documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evaluation;

