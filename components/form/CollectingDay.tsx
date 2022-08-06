import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ja'; // 日本語ローカライズ
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

export const CollectingDay = (props: Props) => {
  const { name } = props;
  const { control } = useFormContext();
  const [state, setState] = useState<{
    date: moment.Moment | null;
    focused: boolean;
  }>({
    date: null,
    focused: false,
  });
  return (
    <div>
      <Controller
        render={({ field }) => {
          return (
            <SingleDatePicker
              placeholder="日付"
              date={state.date}
              numberOfMonths={1}
              displayFormat={'YYYY/MM/DD'}
              focused={state.focused}
              onDateChange={(date) => {
                setState((p) => ({ ...p, date }));
                field.onChange(date);
              }}
              onFocusChange={({ focused }) =>
                setState((p) => ({ ...p, focused }))
              }
              id="select"
            />
          );
        }}
        control={control}
        name={name}
      />
    </div>
  );
};
