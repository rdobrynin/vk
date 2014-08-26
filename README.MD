Files:
- index.php - layouts
Modal windows attached as include php function at the end of index file before the closed body tag:
- modal_buy.php - modal window (buy coins)
- modal_level.php - modal window (new level)
- modal_profile.php - modal window ( user profile)
- style.css - common style
- modal.css - modal window elements
- retina.css - style for retina displays *2
- function.js - javascript functions
- script.js - JS frontend functionality


1. switching layouts -> due to test id div (must be removed before production).
2.  BALANCE INT comma reformed by JS function  CommaFormatted(yourNumber) in script.js | ID balance-amount
4.  font-sizes of balance reformed by JS functions length 1 - 11 in script.js
5.  Grand places 1-10 as ID hide (twitter bootstrap 3 class) must be switching with JS functionality
6.  div test - remove for production. it shows only JS testing
7.  If username length >10, username = "name..." - see script.js
8. If time counter get 2 mins - alert window appear - see function.js
9. click trash icon - timer(reset) - see function.js
10. Drawing parameters you can find in enclosed canvas.js
