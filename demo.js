//
autoConvertOCType(1);
defineClass('ViewController',{
            jsScriptRun:function(obc){
            console.log(obc);
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('罗老师是大神');
            alertView.addButtonWithTitle('是的');
            alertView.show();
            }
})
