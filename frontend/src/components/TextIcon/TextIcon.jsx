import './TextIcon.css';

export default function TextIcon({
  className='',
  text,
  color='blue',
  size='medium'
}) {
  return (
    <div className={`text-icon ${className} text-icon-${color} text-icon-${size}`}>
      <span>{text}</span>
    </div>
  )
}
