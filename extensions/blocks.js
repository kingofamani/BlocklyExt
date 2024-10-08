/*
=========================================
=				basicBlock				=
=========================================
*/
Blockly.Blocks['amani_tm1637_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4位數字顯示模組 顯示數字");
    this.appendValueInput("clk")
        .setCheck("Number")
        .appendField("CLK腳位");
    this.appendValueInput("dio")
        .setCheck("Number")
        .appendField("DIO腳位");
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("數字");
    this.appendDummyInput()
        .appendField("補零")
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "leading_zero");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_tm1637_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4位數字顯示模組 清除畫面");
    this.appendValueInput("clk")
        .setCheck("Number")
        .appendField("CLK腳位");
    this.appendValueInput("dio")
        .setCheck("Number")
        .appendField("DIO腳位");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_tm1637_colon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4位數字顯示模組 顯示數字(冒號)");
    this.appendValueInput("clk")
        .setCheck("Number")
        .appendField("CLK腳位");
    this.appendValueInput("dio")
        .setCheck("Number")
        .appendField("DIO腳位");
    this.appendValueInput("num1")
        .setCheck("Number")
        .appendField("數字1");
    this.appendValueInput("num2")
        .setCheck("Number")
        .appendField("數字2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("例如:數字1=12、數字2=34，則顯示12:34");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_st7920lcd_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4x16 LCD螢幕 顯示文字");
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField("列數");
    this.appendValueInput("col")
        .setCheck("Number")
        .appendField("格數");
    this.appendValueInput("str")
        .setCheck("Array")
        .appendField("文字陣列");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_st7920lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4x16 LCD螢幕 清除畫面");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_random'] = {
  init: function() {
    this.appendValueInput("min")
        .setCheck("Number")
        .appendField("隨機 最小整數");
    this.appendValueInput("max")
        .setCheck("Number")
        .appendField("最大整數");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_stepmoter_go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("步進馬達 開始轉動");
    this.appendValueInput("in1")
        .setCheck("Number")
        .appendField("IN1腳位");
    this.appendValueInput("in2")
        .setCheck("Number")
        .appendField("IN2腳位");
    this.appendValueInput("in3")
        .setCheck("Number")
        .appendField("IN3腳位");
    this.appendValueInput("in4")
        .setCheck("Number")
        .appendField("IN4腳位");
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("圈數");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_joystick_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick搖桿 初始化");
    this.appendDummyInput()
        .appendField("vX腳位")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"]]), "xPin");
    this.appendDummyInput()
        .appendField("vY腳位")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"]]), "yPin");
    this.appendValueInput("swPin")
        .setCheck("Number")
        .appendField("SW腳位");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_joystick_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick搖桿 已按下按鈕");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['amani_joystick_direct'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick搖桿 方向是")
        .appendField(new Blockly.FieldDropdown([["↑","Up"], ["↓","Down"], ["←","Left"], ["→","Right"], ["↖","LeftUp"], ["↙","LeftDown"], ["↘","RightDown"], ["↗","RightUp"], ["中間",""]]), "direct");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*
=========================================
=			i2cKeypadBlock				=
=========================================
*/
Blockly.Blocks['_01amani_i2ckeypad_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2C的4x4鍵盤 初始化");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_02amani_i2ckeypad_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2C的4x4鍵盤 Loop區");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_03amani_i2ckeypad_iskey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("有按下按鍵");
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_04amani_i2ckeypad_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("取得按鍵值");
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_05amani_i2ckeypad_keynull'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("按鍵值清空");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_06amani_i2ckeypad_funcnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("按鍵值char轉換成數值int");
    this.appendValueInput("c")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_07amani_i2ckeypad_isnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("按鍵值是數字");
    this.appendValueInput("c")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*
=========================================
=			simpleTimerBlock			=
=========================================
*/
Blockly.Blocks['_01amani_simpletimer_setinteval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("每");
    this.appendValueInput("ms")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("毫秒(ms)執行1次");
    this.appendDummyInput()
        .appendField("編號")
        .appendField(new Blockly.FieldDropdown([ ["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "order");
    this.appendStatementInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_02amani_simpletimer_setinteval_id'] = {
  init: function() { 
	this.appendDummyInput()
        .appendField("預備計時：");       
    this.appendDummyInput()
        .appendField("每");
    this.appendValueInput("ms")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField("毫秒(ms)執行1次");
    this.appendDummyInput()
        .appendField("編號")
        .appendField(new Blockly.FieldDropdown([ ["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "order");
    this.appendStatementInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_03amani_simpletimer_setinteval_enable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([ ["開始","enable"],["暫停","disable"]]), "switch");
    this.appendDummyInput()
        .appendField("計時");
    this.appendDummyInput()
        .appendField("編號")
        .appendField(new Blockly.FieldDropdown([ ["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "order");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_04amani_simpletimer_settimeout'] = {
  init: function() {    
    this.appendDummyInput()
    this.appendValueInput("ms")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField("毫秒(ms)後執行，只執行1次");
    this.appendDummyInput()
        .appendField("編號")
        .appendField(new Blockly.FieldDropdown([ ["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "order");
	this.appendStatementInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_05amani_simpletimer_settimer'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("每隔");
    this.appendValueInput("ms")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField("毫秒(ms)觸發1次，總共");
	this.appendValueInput("times")
        .setCheck(null); 
	this.appendDummyInput()
        .appendField("次");
    this.appendDummyInput()
        .appendField("編號")
        .appendField(new Blockly.FieldDropdown([ ["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "order");
	this.appendStatementInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*
=========================================
=			lineBlock			=
=========================================
*/
Blockly.Blocks['_01amani_linepushapi_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LinePushAPI通知 使用者ID");
    this.appendValueInput("userid")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("權仗");
    this.appendValueInput("token")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_02amani_linepushapi_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LinePushAPI通知 傳送文字訊息");
    this.appendValueInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};