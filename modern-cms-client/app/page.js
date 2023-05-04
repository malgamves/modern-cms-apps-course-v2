import PageContainer from "@/components/PageContainer";
import Hello from "@/components/Hello"

export default async function Home() {
 
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold underline"> 
        Hello World
      </h1>
    </PageContainer>
  );
}
