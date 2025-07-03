import React, {useState} from 'react';

function TodoList() {
		const [task,setTask] = useState('');
		const [tasks,setTasks] = useState([]);
		
		const handleAddTask=()=>{
				if(task.trim()==='')return;
				setTasks([...tasks,task]);
				setTask('');
		}
		
		const handleDeleteTask=(indexToDelete)=>{
			
			const newTasks=tasks.filter((_,index)=>indext!==indexToDelete);
			setTask(newTasks);
		}
		
		
		const handleDeleteTask =(indextToDelete)=>{
			const newTask=task.filter((_,index)=>index !==indexToDelete);
			setTask(newTasks);
		}
		
		return (
			<div>
				<h2> Todo List</h2>
				<input
				type="text"
				value={task}
				onChange={(e)=>setTask(e.target.value)}
				placeholder="Enter a task"
				/>
				
				<button onClick={handleAddTask> Add task </button>
				
				
				<ul>
					{tasks.map((t,index)=>(
						<li key={index}>
						{t}
						<button onClick={()=>handleDeleteTask(index)}>Delete </button>
						<button onClick={()=>handleDeleteTask(indext)}>delete </button>
						</li>
					))}
				</ul>
			
			
			</div>
		
		
		);
	
}

export default TodoList;