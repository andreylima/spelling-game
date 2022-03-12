import { LinkIconCss } from '../styles/atoms/LinkIcon-css';

interface LinkData {
    side : string
    onClick: any
}

export const  LinkIcon: React.FC<LinkData> = (props) => {

    return (
        <LinkIconCss>
        {props.side == "left" && 
            <div className="jump" onClick={props.onClick}>
              {props.children}<span>jump</span> 
            </div>
        }
        {props.side == "right" && 
            <div className="jump" onClick={props.onClick}> 
              <span>jump</span>{props.children}
            </div>
        }
        </LinkIconCss>
    )
}