var students = {"B02204005":"L5kCDTvp3EOP","B02204025":"CO5xZcs6ywFh"};

var sendmail = require('sendmail')();

for( var i in students ){
sendmail({
    from: 'dplabta@gmail.com',
    to: i + '@csie.ntu.edu.tw, ' + i + '@ntu.edu.tw' ,
    subject: '計算機程式設計課 批改娘系統帳號密碼',
    content:
'歡迎修習計算機程式設計課本課程，可以先上去批改娘系統上去做做題目：http://judgegirl.csie.org。\n您的帳>號：'
+ i + '\n您的密碼：' + students[i] + '\n\nTA',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
}

