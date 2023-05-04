import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";

export default async function About() {
  return (
    <PageContainer>
      <Main>
        <Title>
          about this
        </Title>
        <Description>
          some info about us
        </Description>
      </Main>
    </PageContainer>
  )
}