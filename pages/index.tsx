import type { NextPage } from 'next';
import { CustomHead } from '@/components/common/CustomHead';
import { Lp } from '@/components/lp';
import { TCompanyList } from '@/components/lp/CompanyList';
import { getAxiosApi, AxiosApiResponse } from '@/utils/axiosApi';

export const getStaticProps = async () => {
  const axiosApi = getAxiosApi();
  const res: AxiosApiResponse<{ companies: TCompanyList}> = await axiosApi.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/companies`);
  const companyList: TCompanyList = res.data.companies

  return {
    props: {
      companyList
    }
  }
}

const IndexPage: NextPage<{ companyList: TCompanyList }> = ({ companyList }) => {
  return (
    <>
      <CustomHead title="トップページ" />
      <Lp companyList={companyList} />
    </>
  );
};

export default IndexPage;
