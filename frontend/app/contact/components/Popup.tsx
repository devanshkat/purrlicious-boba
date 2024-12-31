type PopupProps = {
    isSuccess: boolean;
    isVisible: boolean;
    onClose: () => void;
}  

const CustomPopup = ({ isSuccess, isVisible, onClose }: PopupProps) => {
  if (!isVisible) return null;
  const styles = isSuccess ? "fixed top-4 right-4 z-[500] rounded-md bg-green-600 text-white max-w-md animate-in fade-in slide-in-from-top-3 shadow-lg font-inknut p-4 text-center text-black " 
  : "fixed top-4 right-4 z-[500] rounded-md bg-red-600 text-white max-w-xs animate-in fade-in slide-in-from-top-3 shadow-lg font-inknut p-4 text-center text-black ";

  return (
        // <div className="w-[35vw] md:w-[12vw] h-[5.5vh] md:h-[7vh]">
        <div className={styles}>
            {/* <div className="relative text-center text-black border-orange-300 font-inknut p-4 rounded-lg border shadow-lg animate-in fade-in slide-in-from-top-3"> */}
            <div>
                <button 
                onClick={onClose}
                className="absolute right-2 top-2 p-1 rounded-full hover:bg-black/5 "
                aria-label="Close"
                >
                <span className="text-black font-bold text-xl">&times;</span>
                </button>
                
                <div className="font-large text-black text-sm mb-2">
                {isSuccess ? 'Success!' : 'Error'}
                </div>
                
                <div className="text-black text-xs">
                    {isSuccess 
                        ? 'Message successfully sent!' 
                        : 'Error sending message. Please try again.'
                    }
                </div>
            </div>
        </div>
  );
};

export default CustomPopup;