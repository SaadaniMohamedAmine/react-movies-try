import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Header from "./components/Header";
import Movies from "./components/Movies";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="!my-10">
        <Header />
        <Movies />
      </div>
    </QueryClientProvider>
  );
};

export default App;
