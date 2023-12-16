import { ReactNode, MouseEvent, forwardRef } from 'react';

interface Props {
  variant: string;
  className: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

function Button_TW(props: Props, ref: React.Ref<HTMLButtonElement>) {
  const { variant, className, onClick, children } = props;
  
  return (
    <button ref={ref} className={`h-10 px-6 ${variant} ${className} rounded-md hover:brightness-90`} onClick={onClick}>{children}</button>
  );
}

export default forwardRef(Button_TW);
