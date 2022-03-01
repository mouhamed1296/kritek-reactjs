import './App.css'
import { useContactsQuery } from './services/api'
import { ErrorHandler, IsFetching, IsLoading, ShowContactList } from './components';
import { AddContactForm } from './components/forms';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  

  return (
    <div className="App">
      <h1>Contact CRUD App</h1>
      <div>
        <AddContactForm data={data} />
      </div>
      <br /><br />
      <div>
        {isLoading && <IsLoading />}
        {isFetching && <IsFetching />}
        {error && <ErrorHandler />}
        {isSuccess && <ShowContactList contacts={data} />}
      </div>
    </div>
  )
}

export default App
function addUser(arg0: { id: any; }): any {
  throw new Error('Function not implemented.');
}

