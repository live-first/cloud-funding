import React from 'react'
import { FormField, FormFieldProps } from '.'
import { DateField } from '@mui/x-date-pickers/DateField'
import { DateTimeValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers/models'
import { PickerValue } from '@mui/x-date-pickers/internals'

type DateFieldProps = FormFieldProps & {
  onChange: (
    value: PickerValue,
    context: PickerChangeHandlerContext<DateTimeValidationError>,
  ) => void
}

export const DateFieldForm = (props: DateFieldProps) => {
  const { title, required, description, error, onChange } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <DateField onChange={onChange} />
    </FormField>
  )
}
