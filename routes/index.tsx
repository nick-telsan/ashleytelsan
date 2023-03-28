import { Body } from "../components/Body.tsx";
import { Footer } from "../components/Footer.tsx";
import { Hero } from "../components/Hero.tsx";
import { ImageCircle } from "../components/ImageCircle.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Body>
        <div class="pt-[84px] pb-[64px]">
          <div class="flex flex-wrap gap-[134px]">
            <ImageCircle color="green-100" />
            <div class="w-full max-w-[480px] flex items-center">
              <div class="flex flex-col gap-16">
                <h2 class="text-36 font-bold">Project Title</h2>
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap pt-[84px] gap-[134px]">
            <div class="md:order-2">
              <ImageCircle color="eggplant-100" />
            </div>
            <div class="w-full max-w-[480px] flex items-center md:order-1">
              <div class="flex flex-col gap-16">
                <h2 class="text-36 font-bold">Project Title</h2>
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap pt-[84px] gap-[134px]">
            <ImageCircle color="green-500" />
            <div class="w-full max-w-[480px] flex items-center">
              <div class="flex flex-col gap-16">
                <h2 class="text-36 font-bold">Project Title</h2>
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Body>

      <Footer />
    </>
  );
}
