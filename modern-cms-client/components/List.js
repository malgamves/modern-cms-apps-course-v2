import Link from "next/link";
import '@/app/globals.css';

const List = ({ allPosts }) => {
  
  return (
    <>
      <div className="flex left-0 content-start justify-center flex-wrap max-w-lg">
        {allPosts.data.map((post) => (
          <div key={post.attributes.slug}>
            <h2 className="ml-6 text-left text-red-500 no-underline pb-1 max-w-md rounded-md font-bold text-2xl">
              <Link href={{ pathname: `/${post.attributes.slug}` }} passHref>
                {post.attributes.title}
              </Link>{" "}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
