import { Layout } from 'modules/ui/layout';
import { PawtreonScreen } from 'screens/pawtreon-screen';

const PawtreonPage = () => {
  return <PawtreonScreen />;
};

PawtreonPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout color="eggplant">{page}</Layout>;
};

export default PawtreonPage;
