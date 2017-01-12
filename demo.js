//
autoConvertOCType(1);
defineClass('ViewController',{
            jsScriptRun:function(obc){
            console.log(obc);
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('贾老师你说呢');
            alertView.setMessage('罗老师是不是大神');
            alertView.addButtonWithTitle('是的');
            alertView.addButtonWithTitle('必须是');
            alertView.show();
            }
})
