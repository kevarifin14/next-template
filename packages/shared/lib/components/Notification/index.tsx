import { classNames } from "../../utils/tailwind";
import React from "react";
import toast, { Toast } from "react-hot-toast";

export interface INotification {
  t: Toast;
  title: string;
  description?: string;
}

type NotificationProps = {
  notification: INotification;
};

export function Notification({ notification }: NotificationProps) {
  const { title, description, t } = notification;

  const notificationClassName = classNames(
    t.visible ? "animate-enter" : "animate-leave",
    "max-w-md w-full dark:bg-dark-light rounded-lg pointer-events-auto flex",
    "prose dark:prose-invert"
  );

  return (
    <div className={notificationClassName}>
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="text-sm ml-3 flex-1 space-y-1">
            <p className="font-bold my-0">{title}</p>
            {description && <p className="my-0">{description}</p>}
          </div>
        </div>
      </div>

      <div className="flex border-l border-dark">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
