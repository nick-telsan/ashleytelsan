import Image from 'next/image';
import triCountyRequstRepair from './tri-county-images/tri-county-reqest-repair.png';
import triCountyHomepage from './tri-county-images/tri-county-homepage.png';
import triCountyFAQ from './tri-county-images/tri-county-faq.png';

export const TriCountyHeader = () => {
  return (
    <div className="flex w-full flex-col items-center px-32 md:px-124">
      <div className="flex w-full flex-col items-center pt-32 sm:pt-96">
        <h1 className="pb-20 text-36 font-bold">Tri County Appliance Repair</h1>
        <p>A website for a local appliance repair business </p>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-56 pb-36 pt-48 sm:pb-96">
        <Image
          src={triCountyRequstRepair}
          alt="An image of the Tri County site showing the request repair page"
          className="w-[64px] sm:w-[171px]"
        />
        <Image
          src={triCountyHomepage}
          alt="An image of the Tri County site showing the homepage"
          className="w-[64px] sm:w-[171px] lg:w-[189px]"
        />
        <Image
          src={triCountyFAQ}
          alt="An image of the Tri County site showing the FAQ page"
          className="w-[64px] sm:w-[171px]"
        />
      </div>
    </div>
  );
};
