const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="academic-container py-8">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Course Information</h3>
            <p className="text-primary-foreground/80">Cryptography and Network Services</p>
            <p className="text-primary-foreground/80">7th Semester, D Division</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Student Details</h3>
            <p className="text-primary-foreground/80">Mohit Sherkhane</p>
            <p className="text-primary-foreground/80">USN: 01FE22BCS072</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Institution</h3>
            <p className="text-primary-foreground/80">Department of Computer Science</p>
            <p className="text-primary-foreground/80">KLE Technological University</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} CNS Course Portfolio. Academic Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
