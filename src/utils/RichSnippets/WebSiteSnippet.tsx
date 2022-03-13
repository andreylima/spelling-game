import React from 'react'
import { WebSite } from "schema-dts";
import { JsonLd } from "react-schemaorg";

const WebSiteSnippet: React.FC = (props) => {
    return (
        <JsonLd<WebSite>
            item={{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.spellinggame.com"
            }}
        />
    )
}

export default WebSiteSnippet
