import { AboutScreen } from 'modules/about';
import { Layout } from 'modules/ui/layout';

const About = () => {
  return <AboutScreen />;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
