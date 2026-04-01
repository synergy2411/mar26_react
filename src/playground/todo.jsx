import { useQuery } from "@tanstack/react-query";

function Todo() {
  const { data, isLoading } = useQuery({
    queryKey: ["the_ey"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      return await response.json();
    },
  });

  console.log(isLoading, data);
  return (
    <>
      <h1>Todo</h1>
      {/* {data && data.map} */}
    </>
  );
}

export default Todo;
