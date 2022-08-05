import type { NextPage } from 'next';
import { CustomHead } from '@/components/common/CustomHead';
import { Lp } from '@/components/lp';

const IndexPage: NextPage = () => {
  return (
    <>
      <CustomHead title="トップページ" />
      <Lp />
    </>
  );
};

export default IndexPage;
