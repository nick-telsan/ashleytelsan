import { asset } from "$fresh/runtime.ts";

export function Navbar() {
  return (
    <nav class="w-full bg-green-100 flex items-center justify-between py-16 px-32 md:px-124 sticky top-0 shadow-25">
      <div class="flex items-center gap-16">
        <div class="w-[60px] h-[60px] rounded-full bg-gray-100 flex justify-center items-center">
          <img src={asset("/logo.png")} width={40} />
        </div>
        <a href="/" class="text-32 font-bold text-gray-900 hidden md:block">
          Ashley Telsan
        </a>
      </div>
    </nav>
  );
}
