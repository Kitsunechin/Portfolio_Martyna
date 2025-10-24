import { useState } from "react";
import { X } from "lucide-react";

interface ImageShowcaseProps {
  images: {
    src: string;
    alt: string;
  }[];
  caption?: string;
  variant?: "default" | "dark";
}

const ImageShowcase = ({ images, caption, variant = "default" }: ImageShowcaseProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full">
        <div className={`w-full rounded-lg overflow-hidden ${variant === "dark" ? "bg-gray-900" : "bg-gray-100"} p-4`}>
          <div className="flex flex-col md:flex-row gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex-1 min-w-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setExpandedImage(image.src)}
                />
              </div>
            ))}
          </div>
        </div>
        {caption && (
          <p className="text-sm text-gray-500 mt-2">{caption}</p>
        )}
      </div>

      {/* Image Overlay */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={expandedImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageShowcase;
