import React, { FC } from 'react';
import { MaterialInput } from './MaterialInput';
import { css } from '@emotion/react';
import { FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import { CgCloseO } from 'react-icons/cg';
import { Button } from '@/libs/Button';

const styles = {
  base: css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
  input: css`
    flex-grow: 1;
  `,
  button: css`
    background-color: white;
    border: 0px;
  `,
};

type Props = JSX.IntrinsicElements['div'];

export const MaterialInputs = (props: Props) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'materials',
    rules: { minLength: 1 },
  });

  return (
    <div {...props}>
      {fields.map((item, index) => {
        return (
          <div key={item.id} css={styles.base}>
            <div css={styles.input}>
              <MaterialInput name={`materials[${index}]`} />
            </div>
            <button
              type="button"
              css={styles.button}
              onClick={() => remove(index)}
            >
              <CgCloseO size={20} />
            </button>
          </div>
        );
      })}

      <Button
        size={'mid'}
        onClick={() => append('回収物')}
        disabled={fields.length > 9}
      >
        追加
      </Button>
    </div>
  );
};
