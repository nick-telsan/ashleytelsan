import { CubsScreen } from 'modules/studies/cubs';
import { Layout } from 'modules/ui/layout';

const CubsPage = () => {
  return <CubsScreen />;
};

CubsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout color="eggplant">{page}</Layout>;
};

export default CubsPage;
