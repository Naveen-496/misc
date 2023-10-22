

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function OtpVal() {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      inputType='tel'
      renderInput={(props) => <input {...props} />}
    />
  );
}
