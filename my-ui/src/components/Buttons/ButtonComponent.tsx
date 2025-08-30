import React, { forwardRef } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'color' | 'size'
> & {
    /** Visible text on the button */
    label: string;
    /** Background color (any valid CSS color as string) */
    bgColor?: string;
    /** Text color (any valid CSS color as string) */
    textColor?: string;
    /** Font size in px, this is override size prset */
    fontSize?: number;
    size?: ButtonSize;
    radius?: number;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg',
};

export const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            bgColor =  '#111827',
            textColor = '#ffffff',
            fontSize,
            size = 'md',
            radius,
            fullWidth = false,
            leftIcon,
            rightIcon,
            className = '',
            ...rest

        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={[
                    "inline-flex items-center justify-center gap-2 select-none",
                    "font-medium transition-opacity shadow-sm",
                    "hover:opacity-90 active:opacity-80",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30",
                    sizeClasses[size],
                    fullWidth ? "w-full" : "",
                    className,
                ].join(" ")}
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    borderRadius: `${radius}px`,
                    fontSize: fontSize ? `${fontSize}px` : undefined,
                }}
                {...rest}
            >
                {leftIcon}
                <span>{label}</span>
                {rightIcon}
            </button>
        );
    }
);

ButtonComponent.displayName = "Button";
export default ButtonComponent;