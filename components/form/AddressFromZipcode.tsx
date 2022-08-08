import React from 'react';
import { useFormContext } from 'react-hook-form';
import { usePostalJp } from 'use-postal-jp';

type Props = JSX.IntrinsicElements['div'];

export const AddressFromZipcode = (props: Props) => {
  const { watch } = useFormContext();
  const [address, loading, error] = usePostalJp(
    watch('zipcode'),
    watch('zipcode')?.length >= 7,
  );

  return (
    <div {...props}>
      {address?.address1} {address?.address2} {address?.address3}
    </div>
  );
};
