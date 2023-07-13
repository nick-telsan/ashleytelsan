export const Hero = () => {
  return (
    <div
      className="flex h-[390px] items-center justify-center bg-cover bg-top px-32 shadow-inset-25 lg:h-[794px]"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-center text-[3rem] font-bold">
          Hi there, I&apos;m Ashley!
        </h1>
        <div className="flex w-full max-w-[460px] flex-col gap-16">
          <p className="text-left font-bold">Chattanooga, TN</p>
          <p className="text-center sm:text-left">
            UX/UI Designer with an emphasis on accessibility. I believe in
            building intuitive and meaningful experiences that bring communities
            together.
          </p>
        </div>
      </div>
    </div>
  );
};
