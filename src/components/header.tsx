type HeaderProps = {
  id: string;
  title: string;
};

export const Header = ({ id, title }: HeaderProps) => {
  return (
    <div
      id={id}
      className="flex h-150 w-full items-center justify-center bg-eggplant-lighter"
    >
      <h2 className="text-36 font-bold">{title}</h2>
    </div>
  );
};
