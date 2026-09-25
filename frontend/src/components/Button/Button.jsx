import './Button.css'

const Button = ({
  type = 'default',
  href = '',

  children,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={
        `button button-type-${type} ${className}`
      }
      disabled={disabled}
      style={disabled ? { opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' } : {}}
      {...props}
    >
      { href ? <a href={href}>{children}</a> : children }
    </button>
  )
};

export default Button
