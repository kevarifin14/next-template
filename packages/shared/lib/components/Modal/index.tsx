import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactNode, useState } from 'react';
import { HiX } from 'react-icons/hi';

import { useAppearanceContext } from '../../contexts/appearance';
import { classNames } from '../../utils/tailwind';
import { Alert } from '../Alert';
import { Button } from '../Button';
import Overlay from './Overlay';

export type ModalProps = {
  open: boolean,
  children?: ReactNode,
  onClose?: () => void,
  title?: string,
  closable?: boolean
};

export function Modal({
  open, onClose, title, children, closable = true,
}: ModalProps) {
  const { dark } = useAppearanceContext();
  const handleClose = () => {
    if (closable && onClose) {
      onClose();
    }
  };

  const dialogClassName = classNames(
    'fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen',
    dark ? 'dark' : '',
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog static as="div" className={dialogClassName} open={open} onClose={handleClose}>
        <Overlay />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="bg-light dark:bg-dark rounded-lg p-4 overflow-hidden transform transition-all max-w-sm w-full">

            {(closable || title) && (
              <div className="flex justify-between">

                <h1>{title}</h1>

                <button
                  onClick={handleClose}
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <HiX className="h-6 w-6" aria-hidden="true" />
                </button>

              </div>
            )}

            <div className="py-4">
              {children}
            </div>

          </div>
        </Transition.Child>

      </Dialog>
    </Transition.Root>
  );
}

export type ConfirmModalProps = {
  title: string,
  onOk: () => void,
  okText?: string,
  cancelText?: string,
};

export function ConfirmModal({
  title, onOk, okText = 'Ok', cancelText = 'Cancel',
}: ConfirmModalProps) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    await onOk();
    setLoading(false);
    setOpen(false);
  };

  return (
    <Modal closable={false} open={open}>

      <Alert title={title} type="warning" />

      <div className="grid grid-cols-2 space-x-2">
        <Button type="secondary" onClick={() => setOpen(false)}>
          {cancelText}
        </Button>

        <Button type="primary" onClick={handleOk} loading={loading}>
          {okText}
        </Button>
      </div>

    </Modal>
  );
}
