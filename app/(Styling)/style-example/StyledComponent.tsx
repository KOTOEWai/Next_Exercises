'use client'; // App Router တွင် မဖြစ်မနေ လိုအပ်ပါသည်


// Next.js မှာ CSS-in-JS (အထူးသဖြင့် Styled Components) ကို အသုံးပြုခြင်းဟာ JavaScript ဖိုင်ထဲမှာတင် CSS code တွေကို ရေးသားနိုင်ခွင့် ပေးပါတယ်။
//   ဒါဟာ Component-based styling အတွက် အရမ်းအသုံးဝင်ပေမယ့် Next.js ရဲ့ App Router မှာ သုံးမယ်ဆိုရင် အရေးကြီးတဲ့ အချက်အလက်အချို့ကို သိထားဖို့ လိုအပ်ပါတယ်။4

import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background: #bf4f74;
    color: white;
  }
`;

export default function MyComponent() {
  return <StyledButton>Click Me</StyledButton>;
}