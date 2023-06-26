import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  heading: string;
};

export const Section = ({ children, heading }: SectionProps) => {
  return (
    <div className="flex w-full flex-col items-center px-32 md:px-124">
      <section className="flex w-full max-w-1192 flex-col gap-16 pt-24 md:pt-72">
        <h3 className="text-32 font-bold">{heading}</h3>
        {children}
      </section>
    </div>
  );
};
