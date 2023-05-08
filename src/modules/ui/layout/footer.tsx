import Link from 'next/link';
import { LinkedInIcon } from '../icons';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const MotionLink = motion(Link);

type FooterProps = {
  color: 'green' | 'eggplant';
};

export const Footer = ({ color }: FooterProps) => {
  const classes = clsx(
    'flex min-h-[90px] w-full shrink items-center justify-center px-124',
    color === 'green' ? 'bg-green-light' : 'bg-eggplant-light',
  );

  return (
    <footer className={classes}>
      <MotionLink
        whileHover={{ scale: 1.05 }}
        href="https://www.linkedin.com/in/ashley-telsan-351190229/"
      >
        <LinkedInIcon />
      </MotionLink>
    </footer>
  );
};
