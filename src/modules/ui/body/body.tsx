type BodyProps = {
  children: React.ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-1440 px-32 md:px-124">{children}</div>
    </div>
  );
};
