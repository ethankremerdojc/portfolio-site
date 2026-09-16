import TextIcon from '@/components/TextIcon/TextIcon';
import Button from '@/components/Button/Button';

import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-title">
          <div className="header-icon">
            <TextIcon
              text="EK"
            />
          </div>
          <div className="header-title-block">
            <h3>Ethan Kremer</h3>
            <h4>Full stack &amp; Systems</h4>
          </div>
        </div>

        <div className="header-nav">
          <a href="#">Overview</a>
          <a href="#">Experience</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">Console</a>
        </div>

        <div className="header-contact-item">
          <Button
            href="#"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  )
}
