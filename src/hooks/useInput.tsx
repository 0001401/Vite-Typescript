import { useCallback, useState } from "react";

//하나의 input만 받아올 때 임시 초기값 String
export function useInput(initialvalue: String) {
  const [value, setValue] = useState(initialvalue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => setValue(initialvalue), []);
  return [value, setValue, onChange, reset];
}

//여러개의 input에서 정보를 받아올 때
export function useInputs(initialValue: String) {
  const [values, setValues] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: values }));
  };

  const reset = useCallback(() => setValues(initialValue), []);
  return [values, onChange, reset];
}
