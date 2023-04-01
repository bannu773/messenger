import './App.css';
import {useEffect, useState} from 'react'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {
  const [ input ,setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username,setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt("Enter the user Name"))

    db.collection('messenger')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message:doc.data()})))
    })
  }, [])
  
  
  const sendMessage = (event) => {
    event.preventDefault();
  
    db.collection('messenger').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programming</h1>
      <h2>Welcome {username}</h2>
      
      <form className='app_form' onSubmit={sendMessage}>
        <FormControl className='app_formControl'> 
          <InputLabel >Enter a message</InputLabel>
          <Input className='app_input' placeholder='Enter a Message.... ' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconButton' type='submit' disabled={!input} variant="contained" color='primary' text="submit"  onClick={sendMessage} >
            <SendIcon />
          </IconButton>
         
        </FormControl>  
      </form>
      <FlipMove>

        {
          messages.map(({id, message}) => {
            return <Message key={id} username={username} message={message} />
          })
        }
      </FlipMove>
    


    </div>
  );
}

export default App;
