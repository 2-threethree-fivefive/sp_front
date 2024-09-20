import { getSearchResults } from '@/actions/search/searchActions';
import MainHeaderNav from '@/components/layouts/MainHeaderNav';
import SearchResultSection from '@/components/pages/main/result/SearchResultSection';
import { productUuidDataType } from '@/types/ResponseTypes';
import React from 'react';

async function Page({ searchParams }: { searchParams: { query: string } }) {
  console.log(searchParams.query);
  const productUuidList: productUuidDataType[] = await getSearchResults({
    searchValue: searchParams.query,
  });
  return (
    <>
      <MainHeaderNav />
      <SearchResultSection
        searchValue={searchParams.query}
        productUuidList={productUuidList}
      />
    </>
  );
}

export default Page;
