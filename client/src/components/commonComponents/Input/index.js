const Input = ({type, name, class, label, placeholder, value, onChange }) => {
    return <input 
        type={type} 
        name={name} 
        className={class} 
        aria-label={label} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} />
}

export default Input;