import React, {useState} from 'react'
import styles from './Taskmaster.module.css'
const Taskmaster =() =>{
    const [input, setInput] = useState('');
    const [task, setTask] = useState([])

    
    return(
        <h1 className={styles.heading}>TaskMaster</h1>
        
    )
}

export default Taskmaster;