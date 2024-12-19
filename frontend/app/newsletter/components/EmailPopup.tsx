type PopupProps = {
    isSuccess: boolean;
    isVisible: boolean;
    onClose: () => void;
}  

const CustomEmailPopup = ({ isSuccess, isVisible, onClose }: PopupProps) => {
  if (!isVisible) return null;

  return (
        <div className="w-[35vw] md:w-[10vw] h-[5.5vh] md:h-[7vh]">
            <div className="relative bg-orange-200 text-center text-black border-orange-300 font-inknut p-4 rounded-lg border shadow-lg animate-in fade-in slide-in-from-top-3">
                <button 
                onClick={onClose}
                className="absolute right-2 top-2 p-1 rounded-full hover:bg-black/5"
                aria-label="Close"
                >
                <span className="text-black text-xl">&times;</span>
                </button>
                
                <div className="font-medium text-black text-lg mb-2">
                {isSuccess ? 'Success!' : 'Error'}
                </div>
                
                <div className="text-black">
                    {isSuccess 
                        ? 'Email successfully submitted!' 
                        : 'Error submitting email. Please try again.'
                    }
                </div>
            </div>
        </div>
  );
};

export default CustomEmailPopup;