"use client"

import { useEffect, useState } from 'react';

const AnimationLottie = ({ animationPath, width }) => {
  const [LottieComp, setLottieComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('lottie-react').then((mod) => {
      if (mounted) setLottieComp(() => mod.default || mod);
    }).catch(() => {
      // ignore load errors on server/build
    });
    return () => { mounted = false };
  }, []);

  if (!LottieComp) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <LottieComp {...defaultOptions} />
  );
};

export default AnimationLottie;