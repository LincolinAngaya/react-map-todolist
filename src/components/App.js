
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const contacts=[
    {
      id:"1",
      name:"lincolin",
      email:"lincolin@gmail.com"
    },
    {
      id:"2",
      name:"linox",
      email:"linox@gmail.com"
    },
    {
      id:"3",
      name:"larry",
      email:"larry@gmail.com"
    },
    {
      id:"4",
      name:"lavin",
      email:"lavin@gmail.com"
    },
  ]
  return (
   <div className='ui container'>
<Header/>
<AddContact />
<ContactList contact={contacts} />


   </div>
  );
}

export default App;
