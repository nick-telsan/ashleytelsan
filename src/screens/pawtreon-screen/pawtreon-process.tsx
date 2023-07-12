import Link from 'next/link';

export const PawtreonProcess = () => {
  return (
    <div className="flex w-full flex-col items-center p-32 md:px-124 md:pb-124 md:pt-72">
      <h2 className="text-center text-36 font-bold">Design Process</h2>
      <div className="flex w-full max-w-1192 grid-cols-4 flex-col items-center gap-32 pt-16 md:grid md:items-start md:pt-36">
        <div className="flex flex-col items-center gap-16 md:items-start">
          <Link href="#research" className="text-32 font-bold underline">
            Research
          </Link>
          <p>User Data</p>
          <p>User Personas</p>
          <p>Competitive Analysis</p>
        </div>

        <div className="flex flex-col items-center gap-16 md:items-start">
          <Link href="#strategy" className="text-32 font-bold underline">
            Strategy
          </Link>
          <p>How-Might-We</p>
          <p>Product Roadmap</p>
        </div>

        <div className="flex flex-col items-center gap-16 md:items-start">
          <Link href="#design" className="text-32 font-bold underline">
            Design
          </Link>
          <p>User Flows</p>
          <p>Sketches</p>
          <p>Wireframes</p>
        </div>

        <div className="flex flex-col items-center gap-16 md:items-start">
          <Link
            href="#prototype-and-test"
            className="text-32 font-bold underline"
          >
            Prototype & Test
          </Link>
          <p>Branding</p>
          <p>Prototype</p>
          <p>Usability Test</p>
          <p>Final Prototype</p>
        </div>
      </div>
    </div>
  );
};
