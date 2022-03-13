import React from 'react'
import { Organization } from "schema-dts";
import { JsonLd } from "react-schemaorg";

const OrganizationSnippet: React.FC = (props) => {
    return (
        <JsonLd<Organization>
            item={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Spelling Game",
                "url": "https://www.spellinggame.com",
                "logo": "https://www.spellinggame.com/img/logo-spelling-game.png",
                "contactPoint": [{
                    "@type": "ContactPoint",
                    "telephone": "+55-27-999999999",
                    "contactType": "customer service"
                    }],
                    "sameAs": [
                    "https://www.instagram.com/spellinggame/",
                    ]
            }}
        />
    )
}

export default OrganizationSnippet
