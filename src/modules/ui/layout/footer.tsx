import Link from 'next/link';
import { LinkedInIcon, MailIcon } from '../icons';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const MotionLink = motion(Link);

type FooterProps = {
  color: 'green' | 'eggplant';
};

export const Footer = ({ color }: FooterProps) => {
  const classes = clsx(
    'flex min-h-[90px] w-full shrink items-center justify-center gap-36 px-124',
    color === 'green' ? 'bg-green-light' : 'bg-eggplant-light',
  );

  return (
    <footer className={classes}>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="https://www.linkedin.com/in/ashley-telsan-351190229/"
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a whileHover={{ scale: 1.05 }} href="mailto:me@ashleytelsan.com">
        <MailIcon width={62} />
      </motion.a>
    </footer>
  );
};
