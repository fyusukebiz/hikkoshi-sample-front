import type { NextPage } from 'next';
import { CustomHead } from '@/components/common/CustomHead';
import { Lp } from '@/components/lp';
import { TCompanyList } from '@/components/lp/CompanyList';
import { getAxiosApi } from '@/components/utils/axiosApi';
import { useAxiosApi } from '@/hooks/useAxiosApi';

export const getStaticProps = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/companies`);
  // const data = await res.json();
  // const axiosApi = getAxiosApi();
  // const data: { companies: TCompanyList } = await axiosApi.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/companies`);
  // console.log(data)

  const axiosApi =  useAxiosApi();
  const data: { companies: TCompanyList } = await axiosApi.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/companies`);
  const companyList = data.companies

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
