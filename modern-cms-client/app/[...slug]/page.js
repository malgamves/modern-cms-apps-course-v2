import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";

export default async function Blog({ params }) {

  const { slug } = params;
  const data = await getPage(slug);
  const posts = data.data[0];

  return (
    <PageContainer>
      <Main>
        <Title>
          {posts.attributes.title}
        </Title>
      </Main>
    </PageContainer>
  )
}

async function getPage(pageSlug) {
  const res = await fetch(`
  ${process.env.API_URL}/api/posts?filters[slug][$eq]=${pageSlug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data from API");
  }
  return res.json();
}