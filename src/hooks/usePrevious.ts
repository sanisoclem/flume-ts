import React from 'react'

const usePrevious = <T>(value:T ) => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
  return ref.current;
}

export default usePrevious
