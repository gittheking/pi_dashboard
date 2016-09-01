# Raspberry Pi Dashboard
```
     :||220$00$$211'        '112$$00$0221|:           
  '00802$22112122$$802'   1080$22211122$2$800:        
  |&0111111111111111108::881111111111111111$&1        
  :&8111111122111111110888111111112221111110&;        
   1&$111111112$$211112&&$11112$$2111111112&2         
    2&$1111111111200228&&&$2$0$111111111128$          
     18821111111111$&&&&&&&&811111111112081           
      '108$21111120&&&&&&&&&&021111122801:            
        '$&&8$$$8&&8$11||11$8&&80008&&$:              
       28$1;:'';0&1:' '''' ':181:::;12882'            
     :88;'  ';2&&8;' ''''''  :8&$|'   :2&8:           
     $&;  :1$&&&&&&021||||112088&&01:' '$&0           
     &8;|28&821;::;12&&&&&81;::::;108$1:1&&:          
   ;0&8&&&&1: '''''' ;0&&0: '''''' '|8&&88&0|         
 '081;:$&&1 ''''''''' 1&&1 ''''''''' ;8&|';$&0:       
 88; ' 1&$''''''''''' 1&&2 '''''''''' 28:'''1&8:      
1&1 '' 2&0'''''''''' ;8&&&1'''''''''''0&:''''8&2      
1&1 '':8&&2: '''' ':1&&&&&&$|''    ':2&&1 '':8&2      
'88;  2&&&&821||11$0$1|;;;1208$1112$&&&&&; '2&&:      
 :0822&0008&&&&&&&2:' ''''' '|8&&&&&821|1020&0:       
   8&&1''':|$&&&&2 '''''''''' ;&&&0|: '' |&&8'        
   ;&8:'''''';$&&1 ''''''''''':8&1''''''':8&|         
    $&1 '''''''2&8; '''''''' '2&| '''''' |&0          
    '0&1''''''':8&&2;:'''':;10&$ '''''''|88:          
      2&$1:'''';8&&&&&00008&&&&$'  '':|$&2'           
       '1$00$$$8&&0211||||112$8&02220001:             
           |28&&&2'   '''''   2&&&8$|
              :128$1;''''':;10&21:                    
                 '1$00$$$$08$1'                       
                     ':;;:'
```
[ASCII art credit](https://gist.github.com/onehouse/2980361)

## What is this?
This is my second attempt at making a simple dashboard on my wall mounted 
raspberry pi with a touch screen in my NYC apartment. The 
[original project](https://github.com/gittheking/sinatra_pi) was implemented
with Ruby using the Sinatra web framework, this version is written in JavaScript
using Node.js with the Express.js framework and contains some extra features
such as adding control to my living room's Sonos system.

### Technologies Used
- Express
- MTA Status report text file
- Sonos node module
- Node-Fetch for server side requests
- Morgan for logging purposes
