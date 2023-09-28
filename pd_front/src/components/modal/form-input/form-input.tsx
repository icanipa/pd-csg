interface Props {
    label: string
    required?: boolean
    type: string
    disabled?: boolean 
    name: string
    defaultValue: string
}
const FormInput = ({label, ...otherProps}: Props) => {
    return (
        <>
            <label>{`${label}: `}</label>
            <input {...otherProps} />

        </>
    )
} 

export default FormInput