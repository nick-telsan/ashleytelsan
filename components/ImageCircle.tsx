type ImageCircleProps = {
  color: "green-100" | "green-500" | "eggplant-100" | "eggplant-500";
};

export const ImageCircle = ({ color }: ImageCircleProps) => {
  const classes =
    `bg-${color} h-[308px] w-[308px] md:h-[526px] md:w-[526px] rounded-full`;

  return (
    <div class={classes}>
    </div>
  );
};
