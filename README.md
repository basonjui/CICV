# CICV

CICV is abbreviation for **COVID-19 Information Center of Vietnam**. 

It is a simple web app that seeks to deliver to you the latest news and statistics regarding the ongoing COVID-19 pandemic around the world and in Vietnam.

https://cicv.herokuapp.com

## Summary 

The app is built with **Express.js**, **JavaScript**, and **Pug** templating engine. 

Data are collected from trusted information sources such as DangCongSan.vn, John HopKins COVID-19 API, CDC and WHO organizations. 

This project also aims to demonstrate basic Web Scraping, and RSS parsing methods in JavaScript, which allows you to collect data from other available sources on the Internet and bring it to your website. 

However, web scraping belongs to a gray area of legalities, not every resources on the Internet permit scraping and doing so on sources that restrict this could get you into trouble. So scrape responsibly. 

## Overview

CICV solves the problem of getting incorrect COVID-19 information from non-authorized Internet sources, or wasting a lot of time to to find important COVID-19 information from having to browse multiple sources. 

CICV collects information from many trusted sources around the world, and put them together on a single platform where you can just click and find everything you need. 

## Installation

```
npm install
```

## Contributing

This project welcomes contributions from the community. Contributions are
accepted using GitHub pull requests; for more information, see 
[GitHub documentation - Creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

For a good pull request, we ask you provide the following:

1. Include a clear description of your pull request in the description
   with the basic "what" and "why"s for the request.
2. The tests should pass as best as you can. GitHub will automatically run
   the tests as well, to act as a safety net.
3. The pull request should include tests for the change. A new feature should
   have tests for the new feature and bug fixes should include a test that fails
   without the corresponding code change and passes after they are applied.
   The command `npm run test-cov` will generate a `coverage/` folder that
   contains HTML pages of the code coverage, to better understand if everything
   you're adding is being tested.
4. If the pull request is a new feature, please include appropriate documentation 
   in the `README.md` file as well.
5. To help ensure that your code is similar in style to the existing code,
   run the command `npm run lint` and fix any displayed issues.

## License

MIT License

Copyright (c) 2020 Quan Anh Bui
