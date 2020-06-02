const request = require('request');
const cheerio = require('cheerio');
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

request(CORS_PROXY + 'http://dangcongsan.vn/phong-chong-dich-covid-19', function(err, resp, html) {
  if (!err) {
    const $ = cheerio.load(html);

    let scrapedImageUrl = $('.i-img').find('img').attr('src');
    //console.log(imageUrl);

    let scrapedTitle = $('.i-img').find('a').attr('title');
    //console.log(scrapedTitle);

    let scrapedSummary = $('div .i-summary').text();
    //console.log(scrapedSummary);

    let scrapedArticleLink = $('.i-img').find('a').attr('href');
    //console.log(scrapedArticleLink);

    updateFeatureTitle(scrapedTitle);
    updateFeatureImage(scrapedImageUrl);
    updateFeatureSummary(scrapedSummary);
    updateFeatureLink(scrapedArticleLink);
  }
});

function updateFeatureTitle(scrapedTitle) {
  let title = document.getElementById("featureTitle");
  title.innerText = scrapedTitle;
}

function updateFeatureImage(scrapedImageUrl) {
  let image = document.getElementById("featureImage");
  image.setAttribute("src", scrapedImageUrl);
}

function updateFeatureSummary(scrapedSummary) {
  let summary = document.getElementById("featureSummary");
  summary.innerHTML = scrapedSummary;
}

function updateFeatureLink(scrapedArticleLink) {
  let link = document.getElementById("featureLink");
  link.setAttribute("href", scrapedArticleLink);
}
