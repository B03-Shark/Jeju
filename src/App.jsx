import GlobalStyle from './GlobalStyle';
import QueryProvider from './provider/QueryProvider';
import Router from './shared/Router';

function App() {
  return (
    <>
      <QueryProvider>
        <GlobalStyle/>
        <Router />
      </QueryProvider>
    </>
  );
}

export default App;
