import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "python", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4">
      {title && (
        <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-t-lg font-medium text-sm">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className={`code-block ${title ? 'rounded-t-none' : ''}`}>
          <code>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-primary-foreground hover:text-accent hover:bg-primary/20"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeBlock;
