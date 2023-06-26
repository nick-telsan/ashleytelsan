import clsx from 'clsx';
import { motion } from 'framer-motion';

type ImageCircleProps = {
  children: React.ReactElement;
  color:
    | 'green-light'
    | 'green-medium'
    | 'eggplant-light'
    | 'eggplant-medium'
    | 'eggplant-lighter';
  size?: 'small' | 'variable';
};

export const ImageCircle = ({
  children,
  color,
  size = 'variable',
}: ImageCircleProps) => {
  const classes = clsx(
    'flex items-center justify-center rounded-full',
    color === 'green-light' && 'bg-green-light',
    color === 'green-medium' && 'bg-green-medium',
    color === 'eggplant-light' && 'bg-eggplant-light',
    color === 'eggplant-lighter' && 'bg-eggplant-lighter',
    color === 'eggplant-medium' && 'bg-eggplant-medium',
    size === 'variable' && 'h-308 w-308 md:h-526 md:w-526 ',
    size === 'small' && 'h-300 w-300',
  );

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={classes}>
      {children}
    </motion.div>
  );
};
