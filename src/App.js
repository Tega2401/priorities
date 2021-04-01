import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      type: task,
      completed: false
    }

    setTasks([...tasks].concat(newTask))
    setTask('')

  }

  function handleDelete (id)  {
      const updatedTask = [...tasks].filter((task) => task.id !== id)

      setTasks(updatedTask)
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();


  return (
    <div className='App'>
    <div className='Header'>
    <h1>Welcome to Priorities</h1>
    </div>
    <div className='Date'>
    <div className='today'> <h1> {new Date().getDate()}</h1> </div>
    <div className='monthh'> <h2>{(monthNames[d.getMonth()])}</h2></div>
    <div className='month'> <h2> {new Date().getFullYear()}</h2></div>
    </div>
    <div className='form'>
      <form onSubmit={handleAdd}>
        <TextField
          id="standard-basic"
          label="Enter Priority"
          type='text'
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="input" />
          <Button
          variant="contained"
          color="primary"
          type='submit'
          className='inputt'>
          +
          </Button>
      </form>
      </div>
      {tasks.map((task) =>
      <div key={task.id} className='todo'> <div className='tasks'>{task.type}</div> <div> <DeleteIcon className='delete' onClick={() => handleDelete(task.id)}/> </div>
      </div>)}
    </div>
  );
}

export default App;
