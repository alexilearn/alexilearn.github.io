import './InputField.css';

export default function InputField({
    name,
    value,
    setValue,
    onChange,
    placeholder,
    multiline,
    error,
    setFormErrors,
}) {
    return multiline ? (
        <textarea
            className={`input ${error && 'error'}`}
            name={name}
            value={value}
            onChange={(e) => {
                onChange && onChange(e);
                setValue &&
                    setValue((prevValue) => ({
                        ...prevValue,
                        [name]: e.target.value,
                    }));
                setFormErrors &&
                    setFormErrors((prevFormErrors) => ({
                        ...prevFormErrors,
                        [name]: false,
                    }));
            }}
            placeholder={placeholder}
        ></textarea>
    ) : (
        <input
            className={`input ${error && 'error'}`}
            name={name}
            type="text"
            value={value}
            onChange={(e) => {
                onChange && onChange(e);
                setValue &&
                    setValue((prevValue) => ({
                        ...prevValue,
                        [name]: e.target.value,
                    }));
                setFormErrors &&
                    setFormErrors((prevFormErrors) => ({
                        ...prevFormErrors,
                        [name]: false,
                    }));
            }}
            placeholder={placeholder}
        />
    );
}
