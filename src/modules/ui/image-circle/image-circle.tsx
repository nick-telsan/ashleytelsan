import clsx from 'clsx';
import { motion } from 'framer-motion';

type ImageCircleProps = {
  children: React.ReactElement;
  color: 'green-light' | 'green-medium' | 'eggplant-light' | 'eggplant-medium';
};

export const ImageCircle = ({ children, color }: ImageCircleProps) => {
  const classes = clsx(
    'flex h-[308px] w-[308px] items-center justify-center rounded-full md:h-[526px] md:w-[526px]',
    color === 'green-light' && 'bg-green-light',
    color === 'green-medium' && 'bg-green-medium',
    color === 'eggplant-light' && 'bg-eggplant-light',
    color === 'eggplant-medium' && 'bg-eggplant-medium',
  );

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={classes}>
      {children}
    </motion.div>
  );
};
