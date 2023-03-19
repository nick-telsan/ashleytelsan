type ImageCircleProps = {
  color: "green-100" | "green-500" | "eggplant-100" | "eggplant-500";
};

export const ImageCircle = ({ color }: ImageCircleProps) => {
  const classes = `bg-${color} h-[526px] w-[526px] rounded-full`;

  return (
    <div class={classes}>
    </div>
  );
};
