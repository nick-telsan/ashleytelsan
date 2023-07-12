import { PawtreonConclusion } from './pawtreon-conclusion';
import { PawtreonDesign } from './pawtreon-design';
import { PawtreonHeader } from './pawtreon-header';
import { PawtreonOverview } from './pawtreon-overview';
import { PawtreonProcess } from './pawtreon-process';
import { PawtreonPrototype } from './pawtreon-prototype';
import { PawtreonResearch } from './pawtreon-research';
import { PawtreonStrategy } from './pawtreon-strategy';

export const PawtreonScreen = () => {
  return (
    <div className="w-full">
      <PawtreonHeader />
      <PawtreonOverview />
      <PawtreonProcess />
      <PawtreonResearch />
      <PawtreonStrategy />
      <PawtreonDesign />
      <PawtreonPrototype />
      <PawtreonConclusion />
    </div>
  );
};
