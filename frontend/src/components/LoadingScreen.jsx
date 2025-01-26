import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // GSAP animation for the loading numbers
    gsap.fromTo(
      ".loading-text",
      {
        innerText: 0,
      },
      {
        innerText: 100,
        duration: 3, // Duration of the loading animation
        ease: "none",
        snap: { innerText: 1 },
        onUpdate: function () {
          this.targets()[0].textContent = this.targets()[0].textContent.padStart(3, "0");
        },
        onComplete: () => {
          setIsLoaded(true);
          onComplete();  // Notify parent component that loading is complete
        }
      }
    );
  }, [onComplete]);

  return (
    <div className="loading-container fixed inset-0 bg-black flex justify-start items-end p-4">
      {/* Make sure the text is positioned at the left-bottom and stays responsive */}
      <div className="text-white text-9xl">
        <div className="loading-text">000</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
