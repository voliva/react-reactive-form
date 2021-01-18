import { FormRef } from '../internal/formRef';
import { buildObject } from '../internal/path';

export const readForm = <T>(formRef: FormRef<T>): T => {
  try {
    return buildObject(
      Object.fromEntries(
        Array.from(formRef.values.entries()).map(([key, value]) => [
          key,
          value.getState(),
        ])
      )
    );
  } catch (ex) {
    return {} as T;
  }
};
