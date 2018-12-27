import { headers, domain } from "./config";


export const api = (urlPart, data) =>
    fetch(`https://${domain}/${urlPart}`, {
        ...data,
        headers,
    }).then(res => res.json()); 
