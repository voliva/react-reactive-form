import { FormRef } from '../internal/formRef';
import { getKeyValues, getMapValue, KeySelector } from '../internal/path';

export const setInitialValue = <TValues, T>(
  formRef: FormRef<TValues>,
  keySelector: KeySelector<TValues, T>,
  value: T
) => getMapValue(keySelector, formRef.initialValues).setValue(value);

export const setFormInitialValue = <TValues, T>(
  formRef: FormRef<TValues>,
  value: T
) => {
  Object.entries(getKeyValues(value)).forEach(([key, value]) => {
    getMapValue(key, formRef.initialValues).setValue(value);
  });
};
