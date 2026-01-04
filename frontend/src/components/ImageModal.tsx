import { X } from 'lucide-react';

interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[80vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage}
          alt="Expanded view"
          className="w-full h-full object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-foreground hover:text-primary transition-colors bg-background/80 p-2 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
