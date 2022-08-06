import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

// registerへの登録につかうprops
// rules: バリデーションのrules
export type HookFormProps<T extends FieldValues> = {
  name: FieldPath<T>;
  rules?: Omit<RegisterOptions<FieldValues, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
};
