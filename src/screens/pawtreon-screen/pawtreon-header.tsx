import Image from 'next/image';
import pawtreonHeaderLogin from './pawtreon-images/pawtreon-header-login.png';
import pawtreonHeaderFeed from './pawtreon-images/pawtreon-header-feed.png';
import pawtreonHeaderRewards from './pawtreon-images/pawtreon-header-rewards.png';

export const PawtreonHeader = () => {
  return (
    <div className="flex w-full flex-col items-center px-32 md:px-124">
      <div className="flex w-full flex-col items-center pt-32 sm:pt-96">
        <h1 className="pb-20 text-36 font-bold">Pawtreon</h1>
        <p>A mobile app to increase donations to local animal shelters</p>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-56 pb-36 pt-48 sm:pb-96">
        <Image
          src={pawtreonHeaderFeed}
          alt="An image of the Tri County site showing the request repair page"
          className="w-[64px] sm:w-[171px]"
        />
        <Image
          src={pawtreonHeaderLogin}
          alt="An image of the Tri County site showing the homepage"
          className="w-[64px] sm:w-[171px] lg:w-[189px]"
        />
        <Image
          src={pawtreonHeaderRewards}
          alt="An image of the Tri County site showing the FAQ page"
          className="w-[64px] sm:w-[171px]"
        />
      </div>
    </div>
  );
};
