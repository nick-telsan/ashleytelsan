import { TriCountyConclusion } from './tri-county-conclusion';
import { TriCountyDesign } from './tri-county-design';
import { TriCountyHeader } from './tri-county-header';
import { TriCountyOverview } from './tri-county-overview';
import { TriCountyProcess } from './tri-county-process';
import { TriCountPrototype } from './tri-county-prototype';
import { TriCountyResearch } from './tri-county-research';
import { TriCountyStrategy } from './tri-county-strategy';

export const TriCountyScreen = () => {
  return (
    <div className="w-full">
      <TriCountyHeader />
      <TriCountyOverview />
      <TriCountyProcess />
      <TriCountyResearch />
      <TriCountyStrategy />
      <TriCountyDesign />
      <TriCountPrototype />
      <TriCountyConclusion />
    </div>
  );
};
