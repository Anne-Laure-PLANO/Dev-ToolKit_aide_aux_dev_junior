export async function fetchNews (){
    const url = "https://www.developpez.com/index/rss"

    const response = await fetch(`https://x2j.dev/rss?url=${url}`);
    if (!response.ok) {
        throw new Error('Erreur API');
    }
    // code parsing
    const data = await response.json()


    // code formatting
    const cleanArticles = data.rss.channel.item.map((article)=>{
        return {
            ...article,
            title: htmlToText(article.title),
            description: htmlToText(article.description),
            guid: getOrigin(article.guid),
            pubDate: formatDate(article.pubDate),
            image: article.enclosure?.["@_url"] ?? null
        }
    })
    return cleanArticles;
}
/*
 Converts HTML into plain text by parsing it into a DOM and extracting textContent.
 Strips all HTML tags and returns readable text only.
 */
export function htmlToText (html){
    const doc = new DOMParser()
        .parseFromString(html, "text/html");
    return doc.body.textContent || "";
}

// Extracts and returns the origin (protocol + host + port) from a URL string.
export function getOrigin(link) {
    const url = new URL(link);
    return url.origin;
}

/*
  Formats a date string into a French localized date format (fr-FR).
  Displays year, full month name, and day.
  Example: "8 juin 2026"
  */
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}