"use client";

import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { PRIMARY_COLORS, SECONDARY_COLORS } from "@/constants/colors";

// Base input props interface
interface BaseInputProps {
  variant?: "default" | "search" | "floating" | "minimal";
  size?: "sm" | "md" | "lg";
  state?: "default" | "error" | "success" | "disabled";
  bgToken?: keyof typeof PRIMARY_COLORS | keyof typeof SECONDARY_COLORS; // background using colors.ts tokens
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

// Text input specific props
interface TextInputProps
  extends BaseInputProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
}

// Search input specific props
interface SearchInputProps
  extends BaseInputProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  type: "search";
  onClear?: () => void;
  showClearButton?: boolean;
}

// Date input specific props
interface DateInputProps
  extends BaseInputProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  type: "date";
  dateFormat?: string;
}

// Textarea specific props
interface TextareaProps
  extends BaseInputProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  type: "textarea";
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

// Union type for all input props
type InputProps =
  | TextInputProps
  | SearchInputProps
  | DateInputProps
  | TextareaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      state = "default",
      fullWidth = false,
      bgToken,
      label,
      placeholder,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      className,
      type = "text",
      ...restProps
    },
    ref
  ) => {
    const setRef = <T,>(
      targetRef: React.Ref<T> | undefined,
      value: T | null
    ) => {
      if (!targetRef) return;
      if (typeof targetRef === "function") {
        targetRef(value);
      } else {
        // Object ref
        (targetRef as any).current = value;
      }
    };
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // Handle clear button for search
    const handleClear = () => {
      if ("onClear" in restProps && restProps.onClear) {
        restProps.onClear();
      }
    };

    // Extract clean props for HTML elements (removing our custom props)
    const {
      onClear,
      showClearButton,
      dateFormat,
      rows,
      resize,
      ...cleanProps
    } = restProps as any;

    // Determine actual input type
    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    // Base classes for input container
    const containerClasses = cn("relative", fullWidth && "w-full", className);

    // Input wrapper classes
    // Resolve background color from token if provided
    const resolvedBg = bgToken
      ? (PRIMARY_COLORS as Record<string, string>)[bgToken] ||
        (SECONDARY_COLORS as Record<string, string>)[bgToken]
      : undefined;

    const wrapperClasses = cn(
      "relative flex items-center transition-all duration-200",

      // Variant styles
      {
        "border border-gray-300 rounded-lg bg-white": variant === "default",
        "border border-gray-300 rounded-full bg-white shadow-sm":
          variant === "search",
        "border-b border-gray-300 bg-transparent": variant === "minimal",
        "relative border border-gray-200 rounded-lg bg-gray-50":
          variant === "floating",
      },

      // Size styles
      {
        "h-10": size === "sm",
        "h-12": size === "md",
        "h-14": size === "lg",
      },

      // State styles
      {
        "border-gray-300 hover:border-gray-400": state === "default",
        "border-red-500 bg-red-50": state === "error",
        "border-green-500 bg-green-50": state === "success",
        "border-gray-200 bg-gray-100 cursor-not-allowed": state === "disabled",
      },

      // Custom background via colors.ts tokens
      resolvedBg && { backgroundColor: resolvedBg },

      // Focus styles
      {
        "ring-2 ring-blue-500/20 border-blue-500":
          isFocused && state === "default",
        "ring-2 ring-red-500/20": isFocused && state === "error",
        "ring-2 ring-green-500/20": isFocused && state === "success",
      }
    );

    // Local ref to control date picker programmatically
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Palette detection for contrast styling
    const isPrimaryBg =
      typeof bgToken === "string" && bgToken.startsWith("PRIMARY_");
    const isSecondaryBg =
      typeof bgToken === "string" && bgToken.startsWith("SECONDARY_");

    // Determine effective icon presence (includes auto icons and action buttons)
    const willShowClear =
      type === "search" &&
      !!(
        showClearButton &&
        (cleanProps as any)?.value?.toString()?.length &&
        state !== "disabled"
      );
    const hasLeftIconEffective =
      !!leftIcon || type === "search" || type === "date";
    const hasRightIconEffective =
      !!rightIcon || type === "password" || willShowClear;

    // Input field classes
    const inputClasses = cn(
      "flex-1 outline-none bg-transparent",

      // Contrast based on bg token
      isPrimaryBg && "text-white placeholder-white/80",
      !isPrimaryBg && isSecondaryBg && "text-gray-900 placeholder-gray-800/70",
      !bgToken && "text-gray-900 placeholder-gray-500",

      // Padding based on icons and size
      {
        "px-3 py-2": size === "sm",
        "px-4 py-3": size === "md",
        "px-5 py-4": size === "lg",
      },

      // Adjust padding for icons (consider auto icons and action buttons)
      {
        "pl-10": hasLeftIconEffective && size === "sm",
        "pl-12": hasLeftIconEffective && size === "md",
        "pl-14": hasLeftIconEffective && size === "lg",
        "pr-10": hasRightIconEffective && size === "sm",
        "pr-12": hasRightIconEffective && size === "md",
        "pr-14": hasRightIconEffective && size === "lg",
      },

      // Disabled state
      {
        "cursor-not-allowed text-gray-400": state === "disabled",
      },

      // Variant specific styles
      {
        "rounded-lg": variant === "default" || variant === "floating",
        "rounded-full": variant === "search",
        "rounded-none": variant === "minimal",
      },

      // Hide native browser controls for search/date to avoid duplicate icons
      type === "search" &&
        "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
      type === "date" &&
        "appearance-none [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none"
    );

    // Icon classes
    const iconClasses = cn(
      "absolute pointer-events-none",
      isPrimaryBg
        ? "text-white/80"
        : isSecondaryBg
        ? "text-black/80"
        : "text-gray-400",
      {
        "w-4 h-4": size === "sm",
        "w-5 h-5": size === "md",
        "w-6 h-6": size === "lg",
      }
    );

    const leftIconClasses = cn(iconClasses, {
      "left-3": size === "sm",
      "left-4": size === "md",
      "left-5": size === "lg",
    });

    const rightIconClasses = cn(iconClasses, {
      "right-3": size === "sm",
      "right-4": size === "md",
      "right-5": size === "lg",
    });

    // Password eye icon
    const EyeIcon = ({ open }: { open: boolean }) => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {open ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.757 6.757M9.878 9.878l4.242 4.242m0 0L17.121 17.121M14.12 14.12l3.001 3.001m-2.001-2.001L18.122 18.122"
          />
        )}
      </svg>
    );

    // Clear icon for search
    const ClearIcon = () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    // Search icon
    const SearchIcon = () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );

    // Calendar icon for date inputs
    const CalendarIcon = () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    );

    return (
      <div className={containerClasses}>
        {/* Label */}
        {label && (
          <label
            className={cn("block text-sm font-medium mb-2", {
              "text-gray-700": state === "default",
              "text-red-600": state === "error",
              "text-green-600": state === "success",
              "text-gray-400": state === "disabled",
            })}
          >
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div
          className={wrapperClasses}
          style={resolvedBg ? { backgroundColor: resolvedBg } : undefined}
        >
          {/* Left icon */}
          {leftIcon && <div className={leftIconClasses}>{leftIcon}</div>}

          {/* Auto-add search icon for search inputs */}
          {type === "search" && !leftIcon && (
            <div className={leftIconClasses}>
              <SearchIcon />
            </div>
          )}

          {/* Auto-add calendar icon for date inputs */}
          {type === "date" && !leftIcon && (
            <button
              type="button"
              aria-label="Open calendar"
              className={cn(
                leftIconClasses,
                "pointer-events-auto cursor-pointer hover:text-gray-600"
              )}
              onClick={() => {
                try {
                  inputRef.current?.focus();
                  // @ts-ignore: showPicker is available on supported browsers
                  inputRef.current?.showPicker?.();
                } catch {}
              }}
            >
              <CalendarIcon />
            </button>
          )}

          {/* Input field */}
          {type === "textarea" ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={cn(inputClasses, "resize-none")}
              placeholder={placeholder}
              disabled={state === "disabled"}
              rows={rows || 4}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...cleanProps}
            />
          ) : (
            <input
              ref={(node) => {
                inputRef.current =
                  node instanceof HTMLInputElement ? node : null;
                setRef(ref, node);
              }}
              type={inputType}
              className={inputClasses}
              placeholder={placeholder}
              disabled={state === "disabled"}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...cleanProps}
            />
          )}

          {/* Password visibility toggle */}
          {type === "password" && (
            <button
              type="button"
              className={cn(
                rightIconClasses,
                "pointer-events-auto cursor-pointer hover:text-gray-600"
              )}
              onClick={togglePasswordVisibility}
            >
              <EyeIcon open={showPassword} />
            </button>
          )}

          {/* Clear button for search (only when there's a value) */}
          {type === "search" &&
            showClearButton &&
            (cleanProps as any)?.value?.toString()?.length > 0 && (
              <button
                type="button"
                className={cn(
                  rightIconClasses,
                  "pointer-events-auto cursor-pointer hover:text-gray-600"
                )}
                onClick={handleClear}
              >
                <ClearIcon />
              </button>
            )}

          {/* Right icon */}
          {rightIcon && type !== "password" && (
            <div className={rightIconClasses}>{rightIcon}</div>
          )}
        </div>

        {/* Helper text or error message */}
        {(helperText || errorMessage) && (
          <p
            className={cn("mt-2 text-sm", {
              "text-gray-600": state === "default" && helperText,
              "text-red-600": state === "error" || errorMessage,
              "text-green-600": state === "success",
            })}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
