import { ComponentChildren } from "preact";

type BodyProps = {
  children: ComponentChildren;
};

export const Body = ({ children }: BodyProps) => {
  return (
    <div class="flex w-full justify-center">
      <div class="px-124 w-full max-w-[1440px]">
        {children}
      </div>
    </div>
  );
};
