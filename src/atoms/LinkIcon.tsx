import React from 'react';
import { LinkIconCss } from '../styles/atoms/LinkIcon-css';

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

  type LinkData = WithChildren<{
    side : string
    onClick: any
  }>

export const LinkIcon = ({side, onClick, children } : LinkData) => {

    return (
        <LinkIconCss>
        {side == "left" && 
            <div className="jump" onClick={onClick}>
              {children}<span>jump</span> 
            </div>
        }
        {side == "right" && 
            <div className="jump" onClick={onClick}> 
              <span>jump</span>{children}
            </div>
        }
        </LinkIconCss>
    )
}