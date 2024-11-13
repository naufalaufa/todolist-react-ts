const SearchTodo = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (payload: string) => void;
}) => {
  return (
    <input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search...."
      className="rounded-lg outline-none p-1 text-xs my-4"
    />
  );
};

export default SearchTodo;
