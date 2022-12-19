import React from 'react'
import { PulseLoader } from 'react-spinners'

const Button = ({
    type,
    onClick,
    className,
    bgColor,
    textColor,
    text,
    activeRingColor,
    disabled = false,
    loading = false,
    loadingColor,
  }) => {
    return (
        <button
          className={`w-full py-2 rounded-md ${textColor} font-bold ${bgColor} active:ring-2 ${activeRingColor} active:ring-offset-1 hover:opacity-90 duration-300 disabled:bg-gray-300 disabled:ring-0 disabled:cursor-not-allowed ${className}`}
          type={type ?? "button"}
          onClick={onClick}
          disabled={disabled}
        >
          {loading ? <PulseLoader color={loadingColor} /> : text}
        </button>
      );
}

export default Button