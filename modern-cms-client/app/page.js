import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";
import List from "@/components/List";


export default async function Home() {

  const data = await getPosts();
 
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
       
      </Main>
    </PageContainer>
  );
}


async function getPosts() {
  const res = await fetch(`
  ${process.env.API_URL}/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data from API");
  }
  return res.json();
}