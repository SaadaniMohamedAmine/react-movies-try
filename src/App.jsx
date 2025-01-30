import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";

const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=> {
    console.log("the searchTerm now is : ", searchTerm)
  },[searchTerm])
  return (
    <QueryClientProvider client={queryClient}>
      <div className="!my-10">
        <Header />
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Movies searchTerm={searchTerm}/>
      </div>
    </QueryClientProvider>
  );
};

export default App;
