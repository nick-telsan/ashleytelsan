import { Layout } from 'modules/ui/layout';

const About = () => {
  return <div>CUBS</div>;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout color="eggplant">{page}</Layout>;
};

export default About;
