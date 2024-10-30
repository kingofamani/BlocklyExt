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

Blockly.Blocks['_01amani_esp32joystick_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32 Joystick(3.3v)搖桿 初始化X");
    this.appendValueInput("xpin")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",Y");
    this.appendValueInput("ypin")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",按鈕");
    this.appendValueInput("swpin")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",順旋轉")
        .appendField(new Blockly.FieldDropdown([["0°","0"], ["90°","90"], ["180°","180"], ["270°","270"]]), "angle");
    this.appendDummyInput()
        .appendField(",編號")
        .appendField(new Blockly.FieldDropdown([["第1個搖桿","1"], ["第2個搖桿","2"], ["第3個搖桿","3"], ["第4個搖桿","4"]]), "order");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_02amani_esp32joystick_dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("取得搖桿方向");
    this.appendDummyInput()
        .appendField(",編號")
        .appendField(new Blockly.FieldDropdown([["第1個搖桿","1"], ["第2個搖桿","2"], ["第3個搖桿","3"], ["第4個搖桿","4"]]), "order");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_03amani_esp32joystick_isdir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("如果搖桿 方向是")
        .appendField(new Blockly.FieldDropdown([["↑","u"], ["↓","d"], ["←","l"], ["→","r"], ["↖","ul"], ["↙","dl"], ["↘","dr"], ["↗","ur"], ["中間",""]]), "direct");
    this.appendDummyInput()
        .appendField(",編號")
        .appendField(new Blockly.FieldDropdown([["第1個搖桿","1"], ["第2個搖桿","2"], ["第3個搖桿","3"], ["第4個搖桿","4"]]), "order");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_04amani_esp32joystick_sw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("取得按鈕值,編號")
        .appendField(new Blockly.FieldDropdown([["第1個搖桿","1"], ["第2個搖桿","2"], ["第3個搖桿","3"], ["第4個搖桿","4"]]), "order");
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_01amani_serial_avail'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("如果")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"]]), "serial");
    this.appendDummyInput()
        .appendField("讀取到字串");
    this.appendStatementInput("msg")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_02amani_serial_readstring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"]]), "serial");
    this.appendDummyInput()
        .appendField("讀取到的完整字串內容");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_01amani_uart_init'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("如果序列埠");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","softSerial"]				
		], this.validate), "serial");
    this.appendValueInput("rx","rx")
        .setCheck("Number")
		.appendField("RX");
    this.appendValueInput("tx","tx")
        .setCheck("Number")
		.appendField("TX");
	this.getInput("rx").setVisible(false);
	this.getInput("tx").setVisible(false);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("鮑率")	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
	this.appendDummyInput()
        .appendField("取得字串");			
    this.appendStatementInput("statement")
        .setCheck(null);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(315);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="Serial") {
		 block.getInput("rx").setVisible(false);
		 block.getInput("tx").setVisible(false);		 
	 }
	 else {
		 block.getInput("rx").setVisible(true);
		 block.getInput("tx").setVisible(true);		 
	 } 
  }
};

Blockly.Blocks['_02amani_uart_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("序列埠");	  
	this.appendDummyInput()
        .appendField("讀取完整的字串");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(315);
  }
};

Blockly.Blocks['_03amani_uart_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("序列埠");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","Serial1"],
			["Serial2","Serial2"],
			["SoftwareSerial","softSerial"]
		]), "serial");
	this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["傳送資料(print)","print"],
			["傳送資料(print換行)","println"],
			["傳送資料(write)","write"]
		]), "send");
	this.appendValueInput("msg")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
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