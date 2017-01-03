//
autoConvertOCType(1);
defineClass('ViewController',{
            removeAction:function(obc){
            console.log(obc);
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('这是一个测试弹框');
            alertView.addButtonWithTitle('ok');
            alertView.show();
            }
})
