import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import { routes } from './helpers/routes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((item,i) => {
            return (
              <Route
                exact
                key={i}
                path={item.path}
                element={<item.component />}>
                {item?.children?.map((child,i) => {
                  return (
                    <Route
                      key={i}
                      element={<child.component />}
                      path={child.path}
                    />
                  );
                })}
              </Route>
            );
          })}
          <Route path='*' element={<NotFound />} key='notfoundpage' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
