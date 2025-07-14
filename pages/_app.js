import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../2-main (22)/2-main/assets/css/bundle.css';
import '../2-main (22)/2-main/assets/css/splash.css';
import '../2-main (22)/2-main/assets/css/transitions.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
