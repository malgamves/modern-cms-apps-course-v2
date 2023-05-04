import Link from "next/link";
import '@/app/globals.css';

const List = ({ allPosts }) => {
  
function truncateSummary(content) {
  return content.slice(0,100).trimEnd();
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4); 
}

  return (
    <>
      <div className="flex left-0 content-start justify-center flex-wrap max-w-lg">
        {allPosts.data.map((post) => (
          <div key={post.attributes.slug}>
            <h2 className="ml-6 text-left text-red-500 no-underline pb-1 max-w-md rounded-md font-bold text-2xl">
              <Link href={{ pathname: `/${post.attributes.slug}` }} passHref>
                {post.attributes.title}
              </Link>
              <p className="text-black text-base font-semibold"> by <span className="text-red-500"> {post.attributes.author} </span> on { reformatDate(post.attributes.date)}</p>
            </h2>
            <p className="ml-6 pb-4 text-black leading-normal text-base max-w-xl m-0"> {`${truncateSummary(post.attributes.body)}` + "..."}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
