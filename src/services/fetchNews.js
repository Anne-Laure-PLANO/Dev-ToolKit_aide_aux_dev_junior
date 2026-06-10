export async function fetchNews (){
    const url = "https://www.developpez.com/index/rss"

    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
    if (!response.ok) {
        throw new Error('Erreur API');
    }

    const data = await response.json()
        const cleanArticles = data.items.map((article)=>{
            return {
                ...article,
                title: htmlToText(article.title),
                description: htmlToText(article.description),
                guid: getOrigin(article.guid),
                pubDate: formatDate(article.pubDate)
            }
        })
    return cleanArticles;
}

function htmlToText (html){
    const doc = new DOMParser()
        .parseFromString(html, "text/html");

    return doc.body.textContent || "";
}

function getOrigin(link) {
    const url = new URL(link);
    return url.origin;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}