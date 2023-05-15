import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import style from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({});
    
    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    };

    function handleChange(e) {
        
        setService({ ...service, [e.target.name]: e.target.value })
    };
    return (
        <form onSubmit={submit} className={style.form}>
            <Input type="text" text="Nome da tarefa" name="name" placeholder="Digite o nome da tarefa" handleOnChange={handleChange} />
            <Input type="text" text="Descrição" name="description"placeholder="Digite uma descrição(opcional)" handleOnChange={handleChange}/>
            <SubmitButton text={btnText}/>
        </form>
    )
};

export default ServiceForm;
