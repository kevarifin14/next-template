import { Transition } from '@headlessui/react';
import React, {
  createContext, useState, useCallback, useContext, useEffect,
} from 'react';
import { IconType } from 'react-icons';
import { HiX } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';

import { CheckCircleIcon, ExclamationCircleIcon } from '../../components/Icon';

export interface INotification {
  id: string,
  title: string,
  description?: string,
  icon?: IconType,
}

export type NotificationContextProps = {
  notifications: INotification[],
  addNotification: (notification: Omit<INotification, 'id'>) => void,
  addSuccessNotification: (notification: Omit<INotification, 'id' | 'icon'>) => void,
  addErrorNotification: (notification: Omit<INotification, 'id' | 'icon'>) => void,
  removeNotification: (notification: INotification) => void,
};

export const NotificationContext = createContext<NotificationContextProps>(null);

export function useNotifications() {
  const notificationContext = useContext(NotificationContext);
  return notificationContext;
}

type NotificationProps = {
  notification: INotification,
};

export function Notification({ notification }: NotificationProps) {
  const { removeNotification } = useNotifications();
  const { id, title, description } = notification;

  useEffect(() => {
    const interval = setInterval(() => removeNotification(notification), 4000);
    return () => clearInterval(interval);
  }, [removeNotification, id]);

  const handleRemoveNotification = () => {
    removeNotification(notification);
  };

  return (
    <Transition
      key={id}
      show
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="max-w-sm w-full bg-white dark:bg-dark-light shadow-lg rounded-lg pointer-events-auto overflow-hidden z-50"
    >
      <div className="p-4 prose dark:prose-light">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {notification.icon && <notification.icon />}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-white m-0">
              {title}
            </p>
            <p className="mt-1 text-sm text-gray-500 m-0">
              {description}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={handleRemoveNotification}
            >
              <span className="sr-only">Close</span>
              <HiX className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const addNotification = useCallback((notification: INotification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { ...notification, id: uuid() },
    ]);
  }, [setNotifications]);

  const addSuccessNotification = useCallback((notification: INotification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        ...notification,
        icon: CheckCircleIcon,
        id: uuid(),
      },
    ]);
  }, [setNotifications]);

  const addErrorNotification = useCallback((notification: INotification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        ...notification,
        icon: ExclamationCircleIcon,
        id: uuid(),
      },
    ]);
  }, [setNotifications]);

  const removeNotification = useCallback((notification) => {
    setNotifications(
      (prevNotifications) => prevNotifications.filter(({ id }) => id !== notification.id),
    );
  }, [setNotifications]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        addSuccessNotification,
        addErrorNotification,
        removeNotification,
      }}
    >
      <div className="fixed max-w-sm w-full right-0 top-0 flex flex-col justify-end items-start space-y-4 pointer-events-none z-30 p-4">
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}
