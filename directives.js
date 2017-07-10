angular.module('bewellMobile')
///
///  opticNumericLimit - attribute based way to:
///    1 - Limit the length on a numberic field while...
///    2 - Preserving leading 0's in the resulting number
///
///  Why:
///    Because number inputs bound to a scope variable store their data as numbers, stripping leading 0's
///
///  Usage:
///    <input type="number" .... optic-numeric-limit="{length}" optic-numeric-string="{variable name of a scope variable where you want the string representation of the number to be kept}"/>
.directive('opticNumericLimit', function () {
    return {
        // [A]ttribute only
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, control) {
            // Have to handle ASCII codes ;-(
            var keyBackSpace = 8;

            // ensure required attributes
            if (attrs.opticNumericLimit && attrs.opticNumericString) {
                // clean up string model
                scope[attrs.opticNumericString] = "";

                // listen for key ups on the element
                element.bind("keyup", function (evtObj) {
                    // parse attribute
                    var limitLength = Number(attrs.opticNumericLimit);

                    // pull DOM value to work on - angular nabbed the correct viewValue for us, WOOT!
                    var charsval = control.$viewValue.toString();

                    // enforce length
                    if (charsval.length > limitLength) {
                        charsval = charsval.slice(0, limitLength);
                    }

                    if (charsval.length > 0) {
                        // here's the key important part -- setting a string value like "0003" into a number element preserves the leading 0's in the dom - dodged a bullet here
                        element.val(charsval);
                    }
                        // no digits left
                    else {
                        element.val("");
                    }

                    // apply the preserved string representation to the scope variable specified by the author of the control using this directive
                    scope[attrs.opticNumericString] = charsval;

                    // re-run all analysis on the field, length etc so validators and ng-if ng-disabled react to the new value
                    scope.$apply();

                });
            }
        }
    };
});