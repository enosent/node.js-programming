// 리스트 3.3
var fs = require('fs');

fs.readFile('./test.txt', encoding='utf-8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log('파일의 내용 : ');