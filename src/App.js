import { Route } from 'wouter';
import Main from './Views/Main';

function App() {
  return (
    <>
      <Route path='/'>
        <Main></Main>
      </Route>
      <Route path="/p/:id?">
        working
      </Route>
    </>
  );
}

export default App;
