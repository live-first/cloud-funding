import React from 'react'
import { FormField, FormFieldProps } from '.'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DateTimeValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers/models'
import { PickerValue } from '@mui/x-date-pickers/internals'

type DateTimePickerProps = FormFieldProps & {
  onChange: (
    value: PickerValue,
    context: PickerChangeHandlerContext<DateTimeValidationError>,
  ) => void
}

export const DateTimePickerForm = (props: DateTimePickerProps) => {
  const { title, required, description, error, onChange } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <DateTimePicker label={title} onChange={onChange} />
    </FormField>
  )
}
