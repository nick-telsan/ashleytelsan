import { HomeScreen } from 'modules/home';
import { Layout } from 'modules/ui/layout';

const Root = () => {
  return <HomeScreen />;
};

Root.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Root;
