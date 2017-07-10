# chromedigits

Angular code to solve for leading zeros being stripped (0003 -becomes-> 3) in number fields in Chrome 

**A directive and scope variables that keep a shadow copy of a type="number" field in Chrome **

```
       <input type="number" pattern="[0-9]*" ng-model="userAuthPin"  autocomplete="off"   autofocus="autofocus" optic-numeric-limit="4" optic-numeric-string="userAuthPinChars"  />
```
This activates a directive numericLimit which limits the length of the number to _optic-numeric-limit_ digits, stores the digits in _ng-model_ and shadows all of the numeric characters into a string specified by _optic-numeric-string_

See the following files for portions of the functionality:

directives.js - the directive that does the magic of shuttling every numeric character (backspaces too!) to manage the string representation of the field

auth.html - areas of the view that have hooks to the directive are heavily commented/highlighted

auth.js - auth controller for the view that sets up the fields plus shadow character fields in $scope





