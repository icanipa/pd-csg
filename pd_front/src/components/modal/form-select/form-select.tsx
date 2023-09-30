import { SelectHTMLAttributes } from 'react';
interface Props {
    label: string
    required?: boolean
    disabled?: boolean
    name: string
    defaultValue?: string
    value?: string
    options: string[]
}
const FormSelect = ({ label, options, value, ...otherProps }: Props & SelectHTMLAttributes<HTMLSelectElement>) => {
    return (
        <>
            <label>{`${label}: `}</label>
            <select key={1} value={value} {...otherProps}>
                <option key='default' disabled value="" >Select Value</option>
                {
                    options.map(option => {

                        return (
                            <option 
                                key={option} 
                                disabled={option=='triggered'} 
                                value={option}>
                                    {option}
                            </option>
                        )
                    })
                }
            </select>

        </>
    )
}

export default FormSelect