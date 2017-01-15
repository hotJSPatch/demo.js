//
autoConvertOCType(1);
require('UIButton,UIColor');
defineClass('ViewController', {
     viewDidLoad: function() {
     //self.super().viewDidLoad();
          self.bulidView();
          //self.upImageDownTextBageButtonTest();
  },
     upImageDownTextBageButtonTest: function(){
     //覆盖
          console.log('覆盖订单按钮');
     },
    bulidView: function() {
        var btn = UIButton.buttonWithType(1);
        btn.setBounds({x:0, y:0, width:80, height:40});
        btn.setCenter(self.view().center());
        btn.setTitle_forState("吃驴肉不", 0);

        btn.setTitleColor_forState(UIColor.whiteColor(), 0);
        btn.setBackgroundColor(UIColor.colorWithRed_green_blue_alpha(80 / 255.0, 140 / 255.0, 238 / 255.0, 1.0));
        btn.layer().setCornerRadius(5.0);
        btn.layer().setMasksToBounds(1);

        btn.addTarget_action_forControlEvents(self, 'jsScriptRun:' , 1 <<  6);
        self.view().addSubview(btn);
    },
    
            jsScriptRun:function(obc){
            console.log(obc);
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('味道如何');
            alertView.setMessage('非常的好吃');
            alertView.addButtonWithTitle('是的');
            alertView.addButtonWithTitle('必须的');
            alertView.show();
            }

});
