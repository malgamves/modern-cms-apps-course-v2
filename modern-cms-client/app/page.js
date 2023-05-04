import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";
import List from "@/components/List";
import Pagination from "@/components/Pagination";



export default async function Home({ searchParams }) {

  const { page } = searchParams;
  const pageParam = page === undefined ? 1 : page;
  const data = await getPosts(pageParam);
 
  return (
    <PageContainer>
      <Main>
        <Title>
          words from others (for me)
        </Title>
        <Description>
          a recipe for disaster
        </Description>
        <List allPosts={data} />
        <Pagination paginationData={data.meta.pagination} />
       
      </Main>
    </PageContainer>
  );
}


async function getPosts(pageParam) {
  const res = await fetch(`
  ${process.env.API_URL}/api/posts?pagination[page]=${pageParam}&pagination[pageSize]=3`);

  if (!res.ok) {
    throw new Error("Failed to fetch data from API");
  }
  return res.json();
}