import React, {useState} from 'react';
import Title from './../../../components/Title/Title';
import CardForm from './../../../components/CardForm/CardForm';
import Input from './../../../components/Input/Input';
import { createUserValidation } from './../../../utils/validation';

const Form = () => {
    const [ displayName, setDisplayName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const handleOnBlur = (event) => {
        const target = event.currentTarget;
        const { name, value } = target;
        createUserValidation({[name]: value});
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log({ displayName, email, password, confirmPassword });
    }
    return (
        <>
            <Title title="Create User Form" />
            <CardForm btnLabel="Submit" btnType="submit" onSubmit={handleOnSubmit}>
                <Input 
                    label="Display Name"
                    placeholder="John Carter"
                    type="text"
                    name="displayName"
                    required={true}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    onBlur={handleOnBlur}
                />
                <Input 
                    label="Display Name"
                    placeholder="johncarter@email.com"
                    type="text"
                    name="email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleOnBlur}
                />
                <Input 
                    label="password"
                    placeholder="At least 6 charactors"
                    type="password"
                    name="password"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handleOnBlur}
                />
                <Input 
                    label="confirm password"
                    placeholder="Repeat password"
                    type="password"
                    name="confirmPassword"
                    required={true}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleOnBlur}
                />
            </CardForm>
        </>
    );
}
 
export default Form;