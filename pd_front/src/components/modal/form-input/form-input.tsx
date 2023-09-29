import { InputHTMLAttributes} from 'react';
interface Props {
    label: string
    required?: boolean
    type: string
    disabled?: boolean 
    name: string
    defaultValue?: string
    value?: string
}
const FormInput = ({label, ...otherProps}: Props & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <>
            <label>{`${label}: `}</label>
            <input {...otherProps} />

        </>
    )
} 

export default FormInput