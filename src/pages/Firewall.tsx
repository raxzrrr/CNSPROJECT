import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { Network, Shield, Check, Terminal, AlertCircle } from "lucide-react";

const Firewall = () => {
  const iptablesExample = `# Block specific IP address
sudo iptables -A INPUT -s 192.168.1.100 -j DROP

# Allow HTTP and HTTPS traffic
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Block all incoming traffic on port 23 (Telnet)
sudo iptables -A INPUT -p tcp --dport 23 -j DROP

# Save firewall rules
sudo iptables-save > /etc/iptables/rules.v4`;

  const natConfig = `# Configure NAT for outbound traffic
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Port forwarding (external port 8080 to internal 80)
sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 \\
  -j DNAT --to-destination 192.168.1.10:80`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="academic-container">
          <div className="flex justify-center mb-4">
            <Network className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Firewall Configuration for Network Access Control
          </h1>
          <p className="text-center text-xl text-primary-foreground/90">
            Practical implementation and documentation of firewall rules
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Introduction to Firewall Configuration</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3">What is a Firewall?</h3>
              <p className="text-foreground/80 leading-relaxed">
                A firewall is a network security system that monitors and controls incoming and outgoing network traffic 
                based on predetermined security rules. It acts as a barrier between trusted internal networks and untrusted 
                external networks, such as the Internet.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3">Role in Network Security</h3>
              <ul className="space-y-2 ml-4 text-foreground/80">
                {[
                  "Prevents unauthorized access to network resources",
                  "Filters malicious traffic and blocks known threats",
                  "Enforces network security policies and access control",
                  "Monitors and logs network traffic for security analysis",
                  "Segments network into security zones",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3">Types of Firewalls</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-muted/50 rounded p-4">
                  <h4 className="font-semibold mb-2 text-accent">Packet-Filtering</h4>
                  <p className="text-sm text-foreground/70">
                    Examines packets based on source/destination IP, port, and protocol
                  </p>
                </div>
                <div className="bg-muted/50 rounded p-4">
                  <h4 className="font-semibold mb-2 text-accent">Stateful</h4>
                  <p className="text-sm text-foreground/70">
                    Tracks connection states and makes decisions based on context
                  </p>
                </div>
                <div className="bg-muted/50 rounded p-4">
                  <h4 className="font-semibold mb-2 text-accent">Application-Layer</h4>
                  <p className="text-sm text-foreground/70">
                    Inspects application-level data for deeper security analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Objectives */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Configuration Objectives</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Security Requirements</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Block unauthorized access attempts</li>
                <li>• Allow legitimate business traffic</li>
                <li>• Implement least privilege principle</li>
                <li>• Enable logging for security audit</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Network className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Access Control Policies</h3>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>• Define allowed services and ports</li>
                <li>• Restrict administrative access</li>
                <li>• Implement network segmentation</li>
                <li>• Configure default deny policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Configuration */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title flex items-center gap-2">
            <Terminal className="h-8 w-8 text-accent" />
            Step-by-Step Configuration Tutorial
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title">Initial Setup</h3>
              <div className="bg-card rounded-lg border border-border p-6">
                <ol className="space-y-3 ml-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-accent">1.</span>
                    <div>
                      <span className="font-medium">Select Firewall Platform:</span>
                      <p className="text-sm mt-1">Choose appropriate firewall (iptables, pfSense, Cisco ASA, etc.)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-accent">2.</span>
                    <div>
                      <span className="font-medium">Access Firewall Interface:</span>
                      <p className="text-sm mt-1">Connect via SSH/Console with administrative credentials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-accent">3.</span>
                    <div>
                      <span className="font-medium">Configure Network Interfaces:</span>
                      <p className="text-sm mt-1">Set up WAN, LAN, and DMZ interfaces with appropriate IP addressing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-accent">4.</span>
                    <div>
                      <span className="font-medium">Test Basic Connectivity:</span>
                      <p className="text-sm mt-1">Verify network connectivity before implementing rules</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="subsection-title">Rule Configuration</h3>
              <CodeBlock 
                title="Basic iptables Rules Configuration"
                code={iptablesExample}
                language="bash"
              />
              
              <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent" />
                  Rule Configuration Best Practices
                </h4>
                <ul className="space-y-1 text-sm text-foreground/80 ml-4">
                  <li>• Order rules from most specific to most general</li>
                  <li>• Always test rules on non-production systems first</li>
                  <li>• Document each rule's purpose and business justification</li>
                  <li>• Use descriptive comments for complex rule sets</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="subsection-title">Advanced Configuration</h3>
              <CodeBlock 
                title="NAT and Port Forwarding Configuration"
                code={natConfig}
                language="bash"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Examples */}
      <section className="academic-section bg-muted/30">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Configuration Examples</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Example 1: Blocking Specific IP Addresses</h3>
              <p className="text-sm text-foreground/80 mb-3">
                <span className="font-medium">Objective:</span> Block all traffic from known malicious IP addresses
              </p>
              <div className="bg-muted/50 rounded p-3 mb-3">
                <code className="text-sm">iptables -A INPUT -s 203.0.113.0/24 -j DROP</code>
              </div>
              <p className="text-sm text-foreground/80">
                <span className="font-medium">Expected Result:</span> All packets from 203.0.113.0/24 subnet are dropped
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Example 2: Port-Based Access Control</h3>
              <div className="space-y-3 text-sm text-foreground/80">
                <div>
                  <p className="font-medium mb-2">HTTP/HTTPS Access:</p>
                  <div className="bg-muted/50 rounded p-3">
                    <code>iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT</code>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">SSH Access Restriction:</p>
                  <div className="bg-muted/50 rounded p-3">
                    <code>iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT</code>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Database Port Protection:</p>
                  <div className="bg-muted/50 rounded p-3">
                    <code>iptables -A INPUT -p tcp --dport 3306 -s 10.0.0.0/8 -j ACCEPT</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">Example 3: Default Deny Policy</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Implement security best practice of denying all traffic by default, then explicitly allowing needed services
              </p>
              <div className="bg-muted/50 rounded p-3 space-y-1">
                <code className="text-sm block">iptables -P INPUT DROP</code>
                <code className="text-sm block">iptables -P FORWARD DROP</code>
                <code className="text-sm block">iptables -P OUTPUT ACCEPT</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing and Validation */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Testing and Validation</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-3">Testing Tools</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <Terminal className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><code className="bg-muted px-1 rounded">ping</code> - Test basic connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><code className="bg-muted px-1 rounded">telnet</code> - Test port accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><code className="bg-muted px-1 rounded">nmap</code> - Port scanning and service detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Terminal className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><code className="bg-muted px-1 rounded">tcpdump</code> - Packet capture and analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-3">Test Methodology</h3>
              <ol className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">1.</span>
                  <span>Document current network state (before configuration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">2.</span>
                  <span>Apply firewall rules in controlled environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">3.</span>
                  <span>Test each rule individually for expected behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">4.</span>
                  <span>Verify allowed traffic passes correctly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">5.</span>
                  <span>Confirm blocked traffic is properly denied</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-semibold">6.</span>
                  <span>Review firewall logs for anomalies</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="academic-section bg-accent/5">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Security Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Principle of Least Privilege",
                items: [
                  "Only allow necessary traffic",
                  "Default deny all, explicitly allow needed",
                  "Restrict administrative access",
                  "Regular access review and cleanup",
                ],
              },
              {
                title: "Defense in Depth",
                items: [
                  "Multiple layers of security controls",
                  "Combine firewall with IDS/IPS",
                  "Segment network into security zones",
                  "Monitor and log all traffic",
                ],
              },
              {
                title: "Regular Maintenance",
                items: [
                  "Review rules quarterly",
                  "Remove obsolete rules",
                  "Update for new threats",
                  "Test after changes",
                ],
              },
              {
                title: "Logging and Monitoring",
                items: [
                  "Enable comprehensive logging",
                  "Regular log review",
                  "Alert on suspicious activity",
                  "Maintain log archives",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="academic-section bg-background">
        <div className="academic-container max-w-5xl">
          <h2 className="section-title">Learning Outcomes</h2>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20 p-8">
            <ul className="space-y-3">
              {[
                "Understanding of firewall technologies and their role in network security",
                "Practical experience with firewall rule configuration and management",
                "Knowledge of network access control mechanisms and policies",
                "Ability to implement and test security controls",
                "Understanding of defense-in-depth security strategies",
                "Experience with network security testing and validation",
              ].map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground/80">{outcome}</span>
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

export default Firewall;
