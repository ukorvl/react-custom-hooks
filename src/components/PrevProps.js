import { usePrevProps } from '../hooks';

export const PrevProps = ({count}) => {
  const prevCount = usePrevProps(count);

  return (
    <>
      <div>
        <span>Previous value: { prevCount }</span>
      </div>
      <div>
        <span>Current value: { count }</span>
      </div>
    </>
  );
};