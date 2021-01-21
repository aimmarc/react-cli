import { useState, useRef, useLayoutEffect } from "react";

/**
 * 试着给useState加回调
 * @param initialState 
 */
const usePureState = (initialState?: any) => {
  const [otherState, setState] = useState(initialState);
  const cbRef = useRef((res: any) => { });

  useLayoutEffect(() => {
    if (cbRef.current) {
      const cb = () => { cbRef.current(otherState) }
      cb();
    }
  }, [otherState]);

  const setOtherState = (state: any, callback?: (res: any) => void) => {
    if (callback) {
      cbRef.current = callback;
    }
    setState(state);
  }
  return [otherState, setOtherState];
}

export default usePureState;