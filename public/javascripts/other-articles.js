let RSSParser = require('rss-parser');
let parser = new RSSParser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

parser.parseURL(CORS_PROXY + 'http://dangcongsan.vn/so-do-website/rss/3709', function(err, feed) {
  if (err) throw err;
  for (let i = 1; i < 7; i++) {
    const entry = feed.items[i];
    printPost(entry);
    //console.log(entry);
  }
});

function printPost(entry) {
  article = document.createElement("li");

  link = document.createElement("a");
  link.setAttribute("href", entry.link);
  link.setAttribute("target", "_blank");

  title = document.createElement("p");
  title.innerText = entry.title;

  date = document.createElement("p");
  date.innerText = entry.pubDate;

  link.appendChild(title);
  article.appendChild(link);
  article.appendChild(date);

  articles = document.getElementById('otherArticles');
  articles.appendChild(article);
}
