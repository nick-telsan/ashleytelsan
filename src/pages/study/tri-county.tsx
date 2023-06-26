import { Layout } from 'modules/ui/layout';
import { TriCountyScreen } from 'screens/tri-county-screen/tri-county-screen';

const TriCountyPage = () => {
  return <TriCountyScreen />;
};

TriCountyPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout color="eggplant">{page}</Layout>;
};

export default TriCountyPage;
