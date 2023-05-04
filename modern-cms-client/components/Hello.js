import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Link from "next/link";

const Hello = () => {
    return (
        <PageContainer>
        <Main>
          <Title>
            welcome to this template, 
          </Title>
          <Description>import a bunch of stuff to play with from the components directory.
            this template was used to create this <Link href="malgamves.dev"> course </Link>
          </Description>
        </Main>
      </PageContainer>
    );
  };
  
  export default Hello;
  