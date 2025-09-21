import { Select, SelectProps } from '@/components/Select'
import { FormField, FormFieldProps } from '.'

type SelectFormProps = FormFieldProps & SelectProps

export const SelectForm = (props: SelectFormProps) => {
  const { title, required, description, error, ...rest } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <Select required={required} {...rest} />
    </FormField>
  )
}
