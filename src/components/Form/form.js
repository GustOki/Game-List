import Button from '../Button/button';
import FormInput from '../FormInput/formInput';
import './form.css'

const Form = () => {
    return (
        <form className="form">
            <FormInput inputName="Nome" id="nome" type="text"/>
            <FormInput inputName="Email" id="email" type="email"/>
            <Button text="Enviar" type="submit"/>
        </form>
    )
}

export default Form;