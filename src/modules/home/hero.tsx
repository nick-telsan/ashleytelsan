export const Hero = () => {
  return (
    <div
      className="flex h-[390px] items-center justify-center bg-cover bg-right-top px-32 shadow-inset-25 lg:h-[794px]"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-36 font-bold">Hi there, I&apos;m Ashley!</h1>
        <p className="max-w-[520px] text-center">
          UX/UI Designer with an emphasis on accessibility. I believe in
          building intuitive and meaningful experiences that bring communities
          together.
        </p>
      </div>
    </div>
  );
};
