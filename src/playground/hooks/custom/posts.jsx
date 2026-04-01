import useFetch from "./use-fetch";

function Posts() {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <p>{isError.message}</p>;
  }
  return (
    <>
      <h1>Posts coming soon...</h1>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
}

export default Posts;
