/**
 * A transparent button with an outlined border.
 * @param {Object} props
 * @param {string} [props.borderColor] - Any CSS color for the border, e.g. "#417D6E"
 * @param {boolean} [props.rounded] - Pill-shaped (fully rounded) corners when true
 * @param {string} [props.className] - Extra classes to add
 * @param {React.ReactNode} props.children - Button label
 * @param {() => void} [props.onClick] - Runs when the button is clicked
 * @param {'button' | 'submit' | 'reset'} [props.type] - Defaults to "button"
 * @param {boolean} [props.disabled] - Disables the button
*/
const OutlineBtn = ({
  borderColor,
  rounded,
  className = "",
  children,
  onClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent border cursor-pointer ${rounded ? "rounded-full" : ""} ${className}`}
      style={{ borderColor }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineBtn;
