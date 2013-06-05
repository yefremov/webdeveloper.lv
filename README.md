# Web Developer

This is my personal website, it is developed on top and with help of:

  - [Volo](http://volojs.org/) common task automation tool
  - [RequireJS](http://requirejs.org/) AMD module loader
  - [Almond](https://github.com/jrburke/almond) tiny AMD API implementation
  - [Analytics.js](https://segment.io/libraries/analytics.js/) unobtrusive wrapper for common analytic services
  - [Styl](https://github.com/visionmedia/styl) fast and simple CSS pre-processor

## Running

To install clone the repo and run:

```sh
$ npm install
```

Compile whitespace css using `styl`:

```sh
$ volo styl
```

Build whole application using `Almond`, optimizing JavaScript and CSS:

```sh
$ volo build
```

## License

Copyright (c) 2013 Anton Yefremov  
Free to use and abuse under the MIT license.  
[http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
