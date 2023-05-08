import Link from 'next/link';
import { LinkedInIcon } from '../icons';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export const Footer = () => {
  return (
    <footer className="flex min-h-[90px] w-full shrink items-center justify-center bg-green-light px-124">
      <MotionLink
        whileHover={{ scale: 1.05 }}
        href="https://www.linkedin.com/in/ashley-telsan-351190229/"
      >
        <LinkedInIcon />
      </MotionLink>
    </footer>
  );
};
