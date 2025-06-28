import React, {useState} from 'react';

functio TodoList(){
	const [task,setTask]=useState('');
	const [tasks,setTasks]=useState([]);
	
	const handleAddTask=()=>{
		if(task.trim()==='')return;
		setTasks([...tasks,task]);
		setTask('');
	};
	return(
		<div>
			<input
			type="text"
			value={task}
			onChange={(e)=>setTask(e.target.value)}
			placeholder="Enter a task"
			/>
			<button onClick={handleAddTask}>Add </button>
			
			<ul>
				{tasks.map((t,index)=>(
					<li key={index}>{t}</li>
				))}
			</ul>
		</div>
		
	
	);
}

export default TodoList;