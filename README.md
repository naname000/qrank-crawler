# qrank-crawler

## Installation

```sh
$ npm install --save git://github.com/naname000/qrank-crawler.git
```

## Usage

```js
import QrankCrawler, {QrankParser} from '../src/qrank-crawler';
 
const crawler = new QrankCrawler();
const parser = new QrankParser();
let result = parser.parse(crawler.get().getBody('utf8'));
console.log(result[0].title); // result has some lines.
```

#### usage with error handling

```js
try {
  let html = crawler.get();
  let result = parser.parse(crawler.get().getBody('utf8'));
} catch (e) {
  //ﾇﾙﾎﾟ
}
```

## License

Apache-2.0 © [naname]()
