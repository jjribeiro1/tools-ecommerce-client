import React from 'react';
import * as Toast from '@radix-ui/react-toast';

interface RadixToastProps {
  title: string;
  description: string;
  open: boolean;
  onOpenChange(value: boolean): void;
}
export default function RadixToast({ title, description, open, onOpenChange }: RadixToastProps) {
  return (
    <>
      <Toast.Root
        className="bg-white rounded-md p-3 flex flex-col gap-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={onOpenChange}
      >
        <Toast.Title className="font-medium">
          {title}
        </Toast.Title>
        <Toast.Description asChild>
          <p className='text-sm'>{description}</p>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </>
  );
}
