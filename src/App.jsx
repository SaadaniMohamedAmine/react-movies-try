import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import {useDebounce} from "react-use"
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";

const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch]=useState("")
  useDebounce(() => setDebouncedSearch(searchTerm), 1000, [searchTerm]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="!my-10">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Movies searchTerm={debouncedSearch}/>
      </div>
    </QueryClientProvider>
  );
};

export default App;
