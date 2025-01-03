
interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
    text,
    textColor = "white",  // default değer
    backgroundColor = "gray-600",
    onClick,
    disabled = false,
}: ButtonProps) {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
      className={`bg-${backgroundColor} text-${textColor} px-4 py-2 rounded-3xl w-30 text-[14px] sm:text-[15px] ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
}
