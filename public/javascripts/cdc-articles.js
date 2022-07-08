let RSSParser = require('rss-parser');
let parser = new RSSParser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

//https://tools.cdc.gov/api/v2/resources/media/403372.rss
//'http://dangcongsan.vn/so-do-website/rss/3709'
parser.parseURL(/*CORS_PROXY + */'https://tools.cdc.gov/api/v2/resources/media/404952.rss', function(err, feed) {
  if (err) throw err;
  for (let i = 0; i < 7; i++) {
    const entry = feed.items[i];
    printPost(entry);
    //console.log(entry);
  }
});

function printPost(entry) {
  list = document.createElement("li");

  link = document.createElement("a");
  link.setAttribute("href", entry.link);
  link.setAttribute("target", "_blank");

  title = document.createElement("p");
  title.innerText = entry.title;

  date = document.createElement("p");
  date.innerText = entry.pubDate;

  link.appendChild(title);
  list.appendChild(link);
  list.appendChild(date);

  articles = document.getElementById('cdc');
  articles.appendChild(list);
}
