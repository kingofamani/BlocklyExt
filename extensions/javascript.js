/*
=========================================
=				basicBlock				=
=========================================
*/
Blockly.Arduino['amani_tm1637_show'] = function(block) {
  var value_clk = Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
  var value_dio = Blockly.Arduino.valueToCode(block, 'dio', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_leading_zero = block.getFieldValue('leading_zero');
  // TODO: Assemble Arduino into code variable.
Blockly.Arduino.definitions_['amani_tm1637_show'] = '#include <TM1637Display.h>\n';
  Blockly.Arduino.definitions_['amani_tm1637_show' + value_clk + value_dio ] = 'TM1637Display tm_display' +value_clk +value_dio+'('+value_clk+', ' + value_dio+'); ';
Blockly.Arduino.setups_['amani_tm1637_show' + value_clk + value_dio] = 'tm_display'+ value_clk+ value_dio+'.setBrightness(7); \n '+'tm_display' +value_clk +value_dio+'.clear(); \n ';
var code ='tm_display' +value_clk +value_dio+'.showNumberDec('+value_num+', ' +dropdown_leading_zero+'); \n ';

  
  return code;
};

Blockly.Arduino['amani_tm1637_colon'] = function(block) {
  var value_clk = Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
  var value_dio = Blockly.Arduino.valueToCode(block, 'dio', Blockly.Arduino.ORDER_ATOMIC);
  var value_num1 = Blockly.Arduino.valueToCode(block, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var value_num2 = Blockly.Arduino.valueToCode(block, 'num2', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['amani_tm1637_show'] = '#include <TM1637Display.h>\n';
  Blockly.Arduino.definitions_['amani_tm1637_show' + value_clk + value_dio ] = 'TM1637Display tm_display' +value_clk +value_dio+'('+value_clk+', ' + value_dio+'); ';
  Blockly.Arduino.setups_['amani_tm1637_show' + value_clk + value_dio] = 'tm_display'+ value_clk+ value_dio+'.setBrightness(7); \n '+'tm_display' +value_clk +value_dio+'.clear(); \n ';
  var code =
'tm_display'+value_clk+ value_dio+'.showNumberDecEx('+value_num1+', 0x40, true, 2, 0); \n'+
'tm_display'+value_clk +value_dio+'.showNumberDecEx('+value_num2+',  0, true,  2, 2); \n ';
  
  return code;
};

Blockly.Arduino['amani_tm1637_clear'] = function(block) {
  var value_clk = Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
  var value_dio = Blockly.Arduino.valueToCode(block, 'dio', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code ='tm_display' +value_clk +value_dio+'.clear();\n ';
  return code;
};

Blockly.Arduino['amani_st7920lcd_string'] = function(block) {
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  var value_col = Blockly.Arduino.valueToCode(block, 'col', Blockly.Arduino.ORDER_ATOMIC);
  var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['amani_st7920lcd_string'] = '#include "LCD12864RSPI.h"\n#define AR_SIZE( a ) sizeof( a ) / sizeof( a[0] )\n';
  Blockly.Arduino.setups_['amani_st7920lcd_string'] = 'LCDA.Initialise();\ndelay(100);\n';
  var code ='LCDA.DisplayString('+ (value_row-1)+ ', ' +(value_col-1)+ ', ' +value_str+', AR_SIZE('+ value_str+'));\n';

  return code;
};

Blockly.Arduino['amani_st7920lcd_clear'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code ='LCDA.CLEAR();\n';
  
  return code;
};

Blockly.Arduino['amani_random'] = function(block) {
  var value_min = Blockly.Arduino.valueToCode(block, 'min', Blockly.Arduino.ORDER_ATOMIC);
  var value_max = Blockly.Arduino.valueToCode(block, 'max', Blockly.Arduino.ORDER_ATOMIC);
  value_max++;
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.setups_['amani_random'] = 'randomSeed(analogRead(0));\n';
  var code ='random('+value_min+',' + value_max +')';
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_stepmoter_go'] = function(block) {
  var value_in1 = Blockly.Arduino.valueToCode(block, 'in1', Blockly.Arduino.ORDER_ATOMIC);
  var value_in2 = Blockly.Arduino.valueToCode(block, 'in2', Blockly.Arduino.ORDER_ATOMIC);
  var value_in3 = Blockly.Arduino.valueToCode(block, 'in3', Blockly.Arduino.ORDER_ATOMIC);
  var value_in4 = Blockly.Arduino.valueToCode(block, 'in4', Blockly.Arduino.ORDER_ATOMIC);
  var value_c = Blockly.Arduino.valueToCode(block, 'c', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['amani_stepmoter_go'] = '#include <Stepper.h>\nint steps=2048;\n';
Blockly.Arduino.definitions_['amani_stepmoter_go' + value_in1 + value_in2 ] = 'Stepper myStepper' +value_in1+ value_in2+ value_in3 +value_in4+'(steps, ' +value_in1+ ', ' +value_in3 +', '+ value_in2 +', ' +value_in4+ '); ';
Blockly.Arduino.setups_['amani_stepmoter_go' + value_in1 + value_in2] = 'myStepper'+ value_in1+ value_in2+ value_in3+ value_in4 +'.setSpeed(12);\n ';
Blockly.Arduino.functions_['amani_stepmoter_go'] = 'void go(float c,Stepper stepper) {\n  int num = ((abs(c)) * 8) - 1;\n  for (int i = 0; i <= num; i++) {\n    if (c >= 0) {\n      stepper.step(256);\n    } else {\n      stepper.step(-256);\n    }\n  }\n  delay(1000);\n}\n';
var code ='go('+value_c+', myStepper'+ value_in1+ value_in2+ value_in3+ value_in4 +'); \n ';

  
  return code;
};

Blockly.Arduino['amani_joystick_init'] = function(block) {
  var dropdown_xpin = block.getFieldValue('xPin');
  var dropdown_ypin = block.getFieldValue('yPin');
  var value_swpin = Blockly.Arduino.valueToCode(block, 'swPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['amani_joystick_init'] = 'int joystick_xVal = analogRead(' +dropdown_ypin +');// vY腳位\n'+'int joystick_yVal = analogRead(' +dropdown_xpin +');// vX腳位\n '+'int joystick_swVal = digitalRead('+ value_swpin+ '); \n ';
  
  Blockly.Arduino.setups_['amani_joystick_init'] = 'pinMode('+value_swpin+', INPUT_PULLUP);\n ';
  
  Blockly.Arduino.functions_['amani_joystick_init'] = 'bool is_this_direct(String direct){\n  return direct == joystick_direct();\n}\nString joystick_direct(){\n  joystick_xVal = analogRead('+dropdown_ypin +');\n  joystick_yVal = analogRead(' +dropdown_xpin +');\n  String xDirect = "";\n  String yDirect = "";  \n  if (joystick_xVal < 480) {\n    xDirect="Left";\n  } else if (joystick_xVal > 520) {\n    xDirect="Right";\n  }  \n  if (joystick_yVal < 480) {\n    yDirect ="Down";\n  } else if (joystick_yVal > 520) {\n    yDirect ="Up";\n  }\n  return xDirect+yDirect;\n}\nbool is_click_sw(){\n  joystick_swVal = digitalRead('+ value_swpin+ ');\n  return !joystick_swVal;\n}\n';
  
  var code ='';
  return code;
};

Blockly.Arduino['amani_joystick_switch'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code ='is_click_sw()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_joystick_direct'] = function(block) {
  var dropdown_direct = block.getFieldValue('direct');
  // TODO: Assemble Arduino into code variable.
  var code ='is_this_direct("'+dropdown_direct+'") ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_01amani_esp32joystick_init'] = function(block) {
  var value_xpin = Blockly.Arduino.valueToCode(block, 'xpin', Blockly.Arduino.ORDER_ATOMIC);
  var value_ypin = Blockly.Arduino.valueToCode(block, 'ypin', Blockly.Arduino.ORDER_ATOMIC);
  var value_swpin = Blockly.Arduino.valueToCode(block, 'swpin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_angle = block.getFieldValue('angle');
  var dropdown_order = block.getFieldValue('order');
  
  Blockly.Arduino.definitions_['_01amani_esp32joystick_init'+dropdown_order] = 'const int x_joy_pin'+dropdown_order+' = '+value_xpin+';    //VRx\nconst int y_joy_pin'+dropdown_order+' = '+value_ypin+';   //VRy\nconst int sw_joy_pin'+dropdown_order+' = '+value_swpin+';  //SW\nint angle_joy'+dropdown_order+' = '+dropdown_angle+';          //旋轉角度\n';

  Blockly.Arduino.definitions_['_01amani_esp32joystick_init'] = 'String directs[8] = { "u", "ur", "r", "dr", "d", "dl", "l", "ul" };\nconst int coord_center[2] = { 1700, 2000 };  //x,y的中心位置範圍\nconst int coord_max = 4095;                  //x,y的最大值\n';

  Blockly.Arduino.setups_['_01amani_esp32joystick_init'] = '  analogReadResolution(12);  //4095\n';
  
  Blockly.Arduino.setups_['_01amani_esp32joystick_init'+dropdown_order] = 'pinMode('+value_swpin+', INPUT_PULLUP);';
  
  Blockly.Arduino.functions_['_01amani_esp32joystick_init'] = 'int getDirectIndex(int angle, int x, int y) {\n  int index = 0;\n  if (isCenter(x) && y == 0) {\n    index = 0;  //上\n  } else if (x == coord_max && y == 0) {\n    index = 1;  //右上\n  } else if (x == coord_max && isCenter(y)) {\n    index = 2;  //右\n  } else if (x == coord_max && y == coord_max) {\n    index = 3;  //右下\n  } else if (isCenter(x) && y == coord_max) {\n    index = 4;  //下\n  } else if (x == 0 && y == coord_max) {\n    index = 5;  //左下\n  } else if (x == 0 && isCenter(y)) {\n    index = 6;  //左\n  } else if (x == 0 && y == 0) {\n    index = 7;  //左上\n  } else if (isCenter(x) && isCenter(y)) {\n    index = 99;  //中間\n  }\n  //取得旋轉後的index\n  if (index == 99) {\n    return index;\n  } else {\n    return index = getRotateIndex(angle, index);\n  }\n}\nbool isCenter(int coord) {\n  return (coord >= coord_center[0] && coord <= coord_center[1]);\n}\nint getRotateIndex(int angle, int direct_index) {\n  int rotate[4] = { 0, 6, 4, 2 };  //旋轉後增加的index值\n  int rotate_index = ((direct_index + 8) + rotate[angle / 90]) % 8;\n  return rotate_index;\n}\nString getDirect(int angle, int x, int y) {\n  int index = getDirectIndex(angle, x, y);\n  if (index == 99) {\n    return "";  //方向桿在中間\n  } else {\n    return directs[index];\n  }\n}\nbool isDirect(String dir,int angle, int x, int y) {\n  String direct = getDirect(angle,x,y);\n  return direct == dir;\n}\n';


  var code = '';
  return code;
};

Blockly.Arduino['_02amani_esp32joystick_dir'] = function(block) {
  var dropdown_order = block.getFieldValue('order');
  // TODO: Assemble javascript into code variable.
  var code = 'getDirect(angle_joy'+dropdown_order+', analogRead(x_joy_pin'+dropdown_order+'), analogRead(y_joy_pin'+dropdown_order+'))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_03amani_esp32joystick_isdir'] = function(block) {
  var dropdown_direct = block.getFieldValue('direct');
  var dropdown_order = block.getFieldValue('order');
  // TODO: Assemble javascript into code variable.
  var code = 'isDirect("'+dropdown_direct+'",angle_joy'+dropdown_order+', analogRead(x_joy_pin'+dropdown_order+'), analogRead(y_joy_pin'+dropdown_order+'))';


  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_04amani_esp32joystick_sw'] = function(block) {
  var dropdown_order = block.getFieldValue('order');
  // TODO: Assemble javascript into code variable.
  var code = 'digitalRead(sw_joy_pin'+dropdown_order+')';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_01amani_serial_avail'] = function(block) {
  var dropdown_serial = block.getFieldValue('serial');
  var statements_msg = Blockly.Arduino.statementToCode(block, 'msg');
  // TODO: Assemble javascript into code variable.
  var code ='if ('+dropdown_serial+'.available()) {\n ' + statements_msg + '}\n ';
  return code;
};

Blockly.Arduino['_02amani_serial_readstring'] = function(block) {
  var dropdown_serial = block.getFieldValue('serial');
  // TODO: Assemble javascript into code variable.
  var code = dropdown_serial+'.readString()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['_01amani_uart_init'] = function(block) {
	var serial = block.getFieldValue('serial');
	var rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);  	
	var tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC); 	
    var baudrate = block.getFieldValue('baudrate');	
	var statement = Blockly.Arduino.statementToCode(block, 'statement');
	
	if (serial=="Serial") {
		if ('setupsTop_' in Blockly.Arduino)
			Blockly.Arduino.setupsTop_.setup_serial = serial+'.begin('+baudrate+');\n  delay(10);\n  ';
		else
			Blockly.Arduino.setups_.setup_serial = serial+'.begin('+baudrate+');\n  delay(10);\n  ';
	}
	else if (serial=="Serial1" || serial=="Serial2") {
		if ('setupsTop_' in Blockly.Arduino)
			Blockly.Arduino.setupsTop_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n  ';
		else
			Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';	
	}	
	else if  (serial=="softSerial") {
		Blockly.Arduino.definitions_["define_SoftwareSerial"] = '#include <SoftwareSerial.h>\nSoftwareSerial '+serial+'('+rx+', '+tx+');';
		if ('setupsTop_' in Blockly.Arduino)
			Blockly.Arduino.setupsTop_["define_SoftwareSerial_"+serial] = serial+'.begin('+baudrate+');\n  delay(10);\n  ';
		else
			Blockly.Arduino.setups_["define_SoftwareSerial_"+serial] = serial+'.begin('+baudrate+');\n  delay(10);\n';
	}
	
	var code;
	code =	'if ('+serial+'.available()) {\n'+
				'  String serialMsg = "";\n'+
				'  while ('+serial+'.available()) {\n'+
				'    serialMsg = '+serial+'.readString();\n  '+statement+
				'  }\n'+	
				'}\n';
	
  return code;
};


Blockly.Arduino['_02amani_uart_get'] = function(block) {
  code = 'serialMsg';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_03amani_uart_send'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var send = block.getFieldValue('send'); 
  var value_msg = Blockly.Arduino.valueToCode(block, 'msg', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if(send == "print"){
	code = serial+'.print(%1);\n'.replace("%1", value_msg);
  }else if(send == "println"){
	code = serial+'.println(%1);\n'.replace("%1", value_msg);
  }else if(send == "write"){
	code = serial+'.write(%1);\n'.replace("%1", value_msg);
  }
  return code;
};

/*
=========================================
=			i2cKeypadBlock				=
=========================================
*/
Blockly.Arduino['_01amani_i2ckeypad_init'] = function(block) {
  Blockly.Arduino.definitions_['_01amani_i2ckeypad_init'] = '#include <Wire.h>\nchar i2cKey = \'\\0\';  //不能是null\n';

  Blockly.Arduino.setups_['_01amani_i2ckeypad_init'] = 'Wire.begin();\n';
  
  Blockly.Arduino.functions_['_01amani_i2ckeypad_init'] = 'void keypadLoop() {\n  volatile int code;\n  Wire.beginTransmission(0x27);\n  Wire.write(3);\n  Wire.endTransmission();\n  Wire.requestFrom(0x27, 1);\n  while (Wire.available()) {\n    char code = Wire.read();\n    if (code != 16) {\n      i2cKey = getKeyChar(code);\n    }\n  }\n}\nchar getKeyChar(char code) {\n  char keys[16] = {\n    \'0\', \'1\', \'2\', \'3\',\n    \'4\', \'5\', \'6\', \'7\',\n    \'8\', \'9\', \'A\', \'B\',\n    \'C\', \'D\', \'*\', \'#\'\n  };\n  return keys[code];\n}\nint charToInt(char c) {\n  int num = c - \'0\';\n  return num;\n}\nboolean checkIsNumber(char key) {\n  char N[] = "1234567890";\n  //一定要大寫NULL\n  if ((strchr(N, key)) != (NULL)) {\n    return (true);\n  } else {\n    return (false);\n  }\n}\n';

  var code = '';
  return code;
};

Blockly.Arduino['_02amani_i2ckeypad_loop'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'keypadLoop();'+'\n';

  return code;
};

Blockly.Arduino['_03amani_i2ckeypad_iskey'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'i2cKey !=\'\\0\'';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_04amani_i2ckeypad_key'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'i2cKey';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_05amani_i2ckeypad_keynull'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'i2cKey =\'\\0\';'+'\n';

  return code;
};

Blockly.Arduino['_06amani_i2ckeypad_funcnum'] = function(block) {
  // TODO: Assemble javascript into code variable.  
  var value_c = Blockly.Arduino.valueToCode(block, 'c', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'charToInt('+value_c+')';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['_07amani_i2ckeypad_isnum'] = function(block) {
  // TODO: Assemble javascript into code variable.  
  var value_c = Blockly.Arduino.valueToCode(block, 'c', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'checkIsNumber('+value_c+')';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

/*
=========================================
=			simpleTimerBlock			=
=========================================
*/
Blockly.Arduino['_01amani_simpletimer_setinteval'] = function(block) {
  var dropdown_order = block.getFieldValue('order');  
  var value_ms = Blockly.Arduino.valueToCode(block, 'ms', Blockly.Arduino.ORDER_ATOMIC);
  var statements_msg = Blockly.Arduino.statementToCode(block, 'msg');

  //定義區
  Blockly.Arduino.definitions_['_00amani_simpletimer'] =
`#include <SimpleTimer.h>
SimpleTimer timer;`;
  
  //loop區
  Blockly.Arduino.loops_['_00amani_simpletimer'] =   'timer.run();\n';  

  //每隔n秒觸發1次
  Blockly.Arduino.setups_['_01amani_simpletimer_setinteval'+dropdown_order] =   'timer.setInterval('+value_ms+', timerFunc'+dropdown_order+');\n';

  Blockly.Arduino.functions_['_01amani_simpletimer_setinteval'+dropdown_order] =   'void timerFunc'+dropdown_order+'(){\n ' + statements_msg + '  }\n ';
  
  
  var code = '';
  return code;
};

Blockly.Arduino['_02amani_simpletimer_setinteval_id'] = function(block) {
  
  var value_ms = Blockly.Arduino.valueToCode(block, 'ms', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_order = block.getFieldValue('order');  
  var statements_msg = Blockly.Arduino.statementToCode(block, 'msg');
  //計算總共拖曳幾個timer積木
  let intevalFunc = "intevalFunc"+dropdown_order;
  let intevalId = "inteval_ID"+dropdown_order;
  
  //定義區
  Blockly.Arduino.definitions_['_00amani_simpletimer'] =
`#include <SimpleTimer.h>
SimpleTimer timer;`;
  
  Blockly.Arduino.definitions_['_02amani_simpletimer_setinteval_id'+dropdown_order] =
`int ${intevalId} = 0;`;
  
  //loop區
  Blockly.Arduino.loops_['_00amani_simpletimer'] =
  `timer.run();`;
  

  //每隔n秒觸發1次，且可設定enable、disable
  Blockly.Arduino.setups_['_02amani_simpletimer_setinteval_id'+dropdown_order] =
`${intevalId} = timer.setInterval(${value_ms}, ${intevalFunc});
timer.disable(${intevalId});  
`;

  Blockly.Arduino.functions_['_02amani_simpletimer_setinteval_id'+dropdown_order] =   'void '+intevalFunc+'(){\n ' + statements_msg + '  }\n ';
  
  
  
  var code = '';
  return code;
};

Blockly.Arduino['_03amani_simpletimer_setinteval_enable'] = function(block) {
  var dropdown_order = block.getFieldValue('order');  
  var dropdown_switch = block.getFieldValue('switch');
  
  let intevalId = "inteval_ID"+dropdown_order;
  
  //loop區
  Blockly.Arduino.loops_['_00amani_simpletimer'] =
  `timer.run();`;
  
  var code = '';
  if(dropdown_switch=="enable"){
	code = 
`timer.enable(${intevalId});
`;
  }else if(dropdown_switch=="disable"){
	code = 
`timer.disable(${intevalId});
`;
  }  
  
  return code;
};

Blockly.Arduino['_04amani_simpletimer_settimeout'] = function(block) {
  
  var value_ms = Blockly.Arduino.valueToCode(block, 'ms', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_order = block.getFieldValue('order');  
  var statements_msg = Blockly.Arduino.statementToCode(block, 'msg');
  //計算總共拖曳幾個timer積木
  let func = "timeoutFunc"+dropdown_order;
  let intevalId = "timeout_ID"+dropdown_order;
  
  //定義區
  Blockly.Arduino.definitions_['_00amani_simpletimer'] =
`#include <SimpleTimer.h>
SimpleTimer timer;`;
  
  //loop區
  Blockly.Arduino.loops_['_00amani_simpletimer'] =
  `timer.run();`;
  

  //n秒後觸發1次，只有1次
  Blockly.Arduino.setups_['_04amani_simpletimer_settimeout'+dropdown_order] =
`timer.setTimeout(${value_ms}, ${func});`;

  Blockly.Arduino.functions_['_04amani_simpletimer_settimeout'+dropdown_order] =   'void '+func+'(){\n ' + statements_msg + '  }\n ';
    
  
  var code = '';
  return code;
};

Blockly.Arduino['_05amani_simpletimer_settimer'] = function(block) {
  
  var value_ms = Blockly.Arduino.valueToCode(block, 'ms', Blockly.Arduino.ORDER_ATOMIC);
  var value_times = Blockly.Arduino.valueToCode(block, 'times', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_order = block.getFieldValue('order');  
  var statements_msg = Blockly.Arduino.statementToCode(block, 'msg');
  //計算總共拖曳幾個timer積木
  let func = "setTimerFunc"+dropdown_order;
  
  //定義區
  Blockly.Arduino.definitions_['_00amani_simpletimer'] =
`#include <SimpleTimer.h>
SimpleTimer timer;`;
  
  //loop區
  Blockly.Arduino.loops_['_00amani_simpletimer'] =
  `timer.run();`;
  

  //n秒後觸發1次，只有1次
  Blockly.Arduino.setups_['_05amani_simpletimer_settimer'+dropdown_order] =
`timer.setTimer(${value_ms}, ${func}, ${value_times});`;

  Blockly.Arduino.functions_['_05amani_simpletimer_settimer'+dropdown_order] =   'void '+func+'(){\n ' + statements_msg + '  }\n ';
    
  
  var code = '';
  return code;
};

/*
=========================================
=			lineBlock			=
=========================================
*/
Blockly.Arduino['_01amani_linepushapi_init'] = function(block) {
  var value_userid = Blockly.Arduino.valueToCode(block, 'userid', Blockly.Arduino.ORDER_ATOMIC);
  var value_token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['_01amani_linepushapi_init'] = '#include <WiFiClientSecure.h>\n// Line Push API \nconst char* line_host = "api.line.me";\nconst char* line_url = "/v2/bot/message/push";\nconst char* line_token = '+value_token+';\nconst char* line_userid = '+value_userid+';\nvoid pushLineMessage(String line_msg) {\n  WiFiClientSecure line_client;\n  line_client.setInsecure();\n  if (!line_client.connect(line_host, 443)) {\n    Serial.println("line連接失敗");\n    return;\n  }\n  String payload = "{\\"to\\": \\"" + String(line_userid) + "\\",\\"messages\\": [{\\"type\\": \\"text\\", \\"text\\": \\"" + line_msg + "\\"}]}";\n  String request = String("POST ") + line_url + " HTTP/1.1\\r\\n" +\n                   "Host: " + line_host + "\\r\\n" +\n                   "Authorization: Bearer " + line_token + "\\r\\n" +\n                   "Content-Type: application/json\\r\\n" +\n                   "Content-Length: " + payload.length() + "\\r\\n" +\n                   "\\r\\n" + payload;\n  line_client.print(request);\n}\n';
  var code = '';
  return code;
};

Blockly.Arduino['_02amani_linepushapi_msg'] = function(block) {
  var value_msg = Blockly.Arduino.valueToCode(block, 'msg', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'pushLineMessage('+value_msg+');'+'\n';
  return code;
};

/*
=========================================
=			Adafruit IO MQTT			=
=========================================
*/

Blockly.Arduino['amani_adafruit_io_mqtt_init'] = function(block) {
  // 獲取輸入值
  var wifi_ssid = Blockly.Arduino.valueToCode(block, 'WIFI_SSID', Blockly.Arduino.ORDER_ATOMIC);
  var wifi_pass = Blockly.Arduino.valueToCode(block, 'WIFI_PASS', Blockly.Arduino.ORDER_ATOMIC);
  var io_username = Blockly.Arduino.valueToCode(block, 'IO_USERNAME', Blockly.Arduino.ORDER_ATOMIC);
  var io_key = Blockly.Arduino.valueToCode(block, 'IO_KEY', Blockly.Arduino.ORDER_ATOMIC);

  // 定義 WiFi 設定
  Blockly.Arduino.definitions_['wifi_ssid'] = '#define WIFI_SSID ' + wifi_ssid + '\n';
  Blockly.Arduino.definitions_['wifi_pass'] = '#define WIFI_PASS ' + wifi_pass + '\n';

  // 定義 Adafruit IO 設定
  Blockly.Arduino.definitions_['io_username'] = '#define IO_USERNAME ' + io_username + '\n';
  Blockly.Arduino.definitions_['io_key'] = '#define IO_KEY ' + io_key + '\n';
  Blockly.Arduino.definitions_['include_adafruitio'] =
    '#include <AdafruitIO_WiFi.h>\n' +
    '#include <WiFi.h>';
  Blockly.Arduino.definitions_['define_io'] =
    'AdafruitIO_WiFi io(IO_USERNAME, IO_KEY, WIFI_SSID, WIFI_PASS);';

  // setup 區域
  Blockly.Arduino.setups_['connect_io'] =
    'io.connect();\n' +
    'while (io.status() < AIO_CONNECTED) {\n' +
    '  delay(500);\n' +
    '}';

  Blockly.Arduino.loops_['loop_adafruitio'] = `
    io.run();
  `;

  // 此積木無需返回其他程式碼
  return '';
};


Blockly.Arduino['amani_adafruit_io_publish'] = function(block) {
  // 獲取輸入值
  var feedName = Blockly.Arduino.valueToCode(block, 'FEED_NAME', Blockly.Arduino.ORDER_ATOMIC);
  var message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);

  // 為每個積木生成獨立的固定 timestamp
  if (!block.fixedTimestamp) {
    block.fixedTimestamp = Date.now(); // 只為該積木生成一次
  }
  var timestamp = block.fixedTimestamp;
  var variableName = feedName + "_" + timestamp;

  // 1. Blockly.Arduino.definitions: 定義區
  Blockly.Arduino.definitions_['define_feed_' + variableName] = 
    "AdafruitIO_Feed *feedName" + timestamp + " = io.feed(" + feedName + ");";

  // 2. Blockly.Arduino.setups: 初始化區
  // 此積木不需要修改 setup()

  // 3. Blockly.Arduino.functions: 函數宣告區
  // 此積木不需要新增函數

  // 4. Blockly.Arduino.loops: 主程式迴圈區
  // 移除舊的 loop 塊程式碼，改用 code 直接返回
  var code = "feedName" + timestamp+ "->save(" + message + ");\n";

  return code;
};

Blockly.Arduino['amani_mqtt_subscribe'] = function(block) {
  // 獲取輸入值
  var feedName = Blockly.Arduino.valueToCode(block, 'feedname', Blockly.Arduino.ORDER_ATOMIC);

  // 為每個積木生成獨立的固定 timestamp
  if (!block.fixedTimestamp) {
    block.fixedTimestamp = Date.now(); // 只為該積木生成一次
  }
  var timestamp = block.fixedTimestamp;

  // 設定唯一的變數名稱和回調函數名稱
  var uniqueFeedName = "feedName_" + timestamp;
  var callbackFunctionName = "handleMessage_" + timestamp;

  // 嵌套的程式碼
  var statements_statement = Blockly.Arduino.statementToCode(block, 'statement');

  // 1. Blockly.Arduino.definitions: 定義區
  Blockly.Arduino.definitions_['define_feed_' + feedName] =
    "AdafruitIO_Feed *" + uniqueFeedName + " = io.feed(" + feedName + ");";

  Blockly.Arduino.definitions_['define_callback_' + feedName] =
    "void " + callbackFunctionName + "(AdafruitIO_Data *data) {\n" +
    statements_statement + // 嵌套的動作程式碼
    "}\n";

  // 2. Blockly.Arduino.setups: 初始化區
  Blockly.Arduino.setups_['setup_feed_' + feedName] =
    uniqueFeedName + "->onMessage(" + callbackFunctionName + ");";

  // 此積木的功能已包含在定義與設置中，無需額外返回程式碼
  return '';
};

Blockly.Arduino['amani_mqtt_received_string'] = function(block) {
  var code = "data->value()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
=========================================
=			AI Classroom(test)			=
=========================================
*/
Blockly.Arduino['amani_fake_ina226_init'] = function(block) {
  var dropdown_inachannel = block.getFieldValue('inachannel');
  // TODO: Assemble javascript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_fake_ina226_mv'] = function(block) {
  var dropdown_inachannel = block.getFieldValue('mvchannel');
  // TODO: Assemble javascript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_fake_ina226_ma'] = function(block) {
  var dropdown_inachannel = block.getFieldValue('machannel');
  // TODO: Assemble javascript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_fake_cnc_init'] = function(block) {
  var value_cncenable = Blockly.Arduino.valueToCode(block, 'cncenable', Blockly.Arduino.ORDER_ATOMIC);
  var value_xdir = Blockly.Arduino.valueToCode(block, 'xdir', Blockly.Arduino.ORDER_ATOMIC);
  var value_xstep = Blockly.Arduino.valueToCode(block, 'xstep', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '';
  return code;
};

Blockly.Arduino['amani_fake_cnc_xmove'] = function(block) {
  var value_xmove = Blockly.Arduino.valueToCode(block, 'xmove', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '';
  return code;
};

Blockly.Arduino['amani_fake_cnc_xcurrent'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['amani_fake_yfs201_init'] = function(block) {
  var value_yfspin = Blockly.Arduino.valueToCode(block, 'yfspin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '';
  return code;
};

Blockly.Arduino['amani_fake_yfs201_flow'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};





