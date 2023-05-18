"use client";

import Link from "next/link";

import Title from "@/components/Title";
import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Description from "@/components/Description";

export default function Error({ reset, error }) {
  return (
    <PageContainer>
      <Main>
        <Title>
          try go to the <Link className="hover:underline" href="/"> home page</Link>
        </Title>
        <Description>it looks like something went wrong</Description>
      </Main>
    </PageContainer>
  );
}