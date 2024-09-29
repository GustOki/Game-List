import './formInput.css'

const FormInput = ({inputName, ...props}) => {
    return (
        <div className="form-input">
            <label htmlFor={props.id}>{inputName}:</label>
            <input type={props.type}></input>
        </div>
    )
}

export default FormInput;