//
autoConvertOCType(1);
require('UIButton,UIColor');
defineClass('ViewController', {
    bulidView: function() {
        var btn = UIButton.buttonWithType(UIButtonTypeSystem);
        btn.setBounds(CGRectMake(0, 0, 80, 40));
        btn.setCenter(self.view().center());
        btn.setTitle_forState("谁是大神", UIControlStateNormal);

        btn.setTitleColor_forState(UIColor.whiteColor(), UIControlStateNormal);
        btn.setBackgroundColor(UIColor.colorWithRed_green_blue_alpha(80 / 255.0, 140 / 255.0, 238 / 255.0, 1.0));
        btn.layer().setCornerRadius(5.0);
        btn.layer().setMasksToBounds(YES);

        btn.addTarget_action_forControlEvents(self, @selector(jsScriptRun: ), UIControlEventTouchUpInside);
        self.view().addSubview(btn);
    },
            jsScriptRun:function(obc){
            console.log(obc);
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('贾老师你说呢');
            alertView.setMessage('罗老师是不是大神');
            alertView.addButtonWithTitle('是的');
            alertView.addButtonWithTitle('必须是');
            alertView.show();
            }

});
