import React, {useState} from 'react'
import styles from './Taskmaster.module.css'
const Taskmaster = () =>{
    const [input, setInput] = useState('');
    const [task, setTask] = useState([])
    
    
    // creando el task en un objeto con el texto y un valor booleano
    //  unciamente si el input no es un string vacio ademas de limpiar el texto del input 
    const add = ( e ) =>{
        e.preventDefault();
        if (input === '') return;
        setTask([...task,{
            text:input,
            completed:false
        }]);
        setInput('');
    }
    
    //
    //filtra el array de objetos y retorna los que cumplen la condicion
    const  remove = (index) => {
        
        setTask(task.filter((_item,i)=> i !== index));
    
    }

    
    return(
        
        <div className='container'>
            <h1 className={styles.heading}>TaskMaster</h1>
                {/* creando un formulario para obtener el valor del nuevo task*/}
                <form onSubmit={add}>
                    <input
                        placeholder='New Task?'
                        className='in-text'
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        />
                    <button className='add-btn'>Add</button>
                </form>
                {task.map((item, i) => (
                    <div className='raws' key={i}>
                        <span>{item.text}</span>
                        <button className='delete-btn' onClick={() => remove(i)}>Delete</button>
                    </div>
                ))}
        </div>
        
    )
}

export default Taskmaster;