import React, { cloneElement, isValidElement, ReactElement } from "react";

type RadioGroupProps = {
  value: string | boolean;
  onChange: (any: any) => any;
  children: React.ReactNode;
};

export function RadioGroup({ value, onChange, children }: RadioGroupProps) {
  return (
    <fieldset>
      <ul className="space-y-4" role="radiogroup">
        {React.Children.map<React.ReactNode, React.ReactNode>(
          children,
          (child) => {
            if (isValidElement(child)) {
              return cloneElement(child as ReactElement<any>, {
                selected: value == child.props.value,
                onClick: () => onChange(child.props.value),
              });
            }
            return null;
          }
        )}
      </ul>
    </fieldset>
  );
}
