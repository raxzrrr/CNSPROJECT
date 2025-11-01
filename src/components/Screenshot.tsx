import { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const Screenshot = ({ src, alt, caption, className = "" }: ScreenshotProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-lg border border-border bg-muted/50 shadow-md">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={() => setIsOpen(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        {caption && (
          <p className="text-sm text-muted-foreground text-center mt-2">
            {caption}
          </p>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {caption && (
              <div className="p-4 bg-background border-t">
                <p className="text-sm text-muted-foreground">{caption}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Screenshot;

