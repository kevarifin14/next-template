import React from 'react';

import { AlertType } from '../../utils/tailwind';
import { alertTypeToIcon } from '../Icon';

type AlertProps = {
  title: string,
  description?: string,
  type?: AlertType,
};

export function Alert({ title, description, type = 'info' }: AlertProps) {
  const icon = alertTypeToIcon[type];

  return (
    <div className="p-4">
      <div className="flex">

        <div className="flex-shrink-0 flex items-center">
          {icon({})}
        </div>

        <div className="ml-3">

          <h3 className="font-medium">{title}</h3>

          {description && (
            <p className="mt-2">
              {description}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
