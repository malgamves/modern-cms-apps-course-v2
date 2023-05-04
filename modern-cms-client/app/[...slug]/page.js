import Description from "@/components/Description";
import LeftGrid from "@/components/LeftGrid";
import Centered from "@/components/Centered";
import Title from "@/components/Title";
import Back from "@/components/Back";
import RightGrid from "@/components/RightGrid";
import Content from "@/components/Content";
import PageContainer from "@/components/PageContainer";

import Link from "next/link"
export default async function Blog({ params }) {

  const { slug } = params;
  const data = await getPage(slug);
  const posts = data.data[0];


  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4); 
  }

  return (
    <PageContainer>
      <LeftGrid>
        <Centered>
          <Title>
            {posts.attributes.title}
          </Title>
          <Description className="text-black text-base font-semibold"> by <span className="text-red-500"> {posts.attributes.author} </span> on { reformatDate(posts.attributes.date)}</Description>

          <Back>
            <Link href="/"> &larr; go back home</Link>
          </Back>

        </Centered>
        </LeftGrid>
        <RightGrid>
          <Centered>
            <Content>
              {posts.attributes.body}
            </Content>
          </Centered>
        </RightGrid>
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