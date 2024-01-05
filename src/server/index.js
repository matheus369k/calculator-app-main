var _a;
var calcule = {
    calcAll: [],
    result: 0,
};
var numberCalc = '';
var barToggleThemer = document.querySelectorAll('.btn');
console.log(barToggleThemer);
barToggleThemer.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.textContent === null)
            return;
        if (parseInt(btn.textContent) || parseInt(btn.textContent) == 0 || btn.textContent == '.') {
            numberCalc = "".concat(numberCalc).concat(btn.textContent);
        }
        else if (btn.textContent === '-' || 'x' || '/' || '+') {
            calcule.calcAll.push(numberCalc);
            calcule.calcAll.push(btn.textContent);
            numberCalc = '';
        }
        AddRemoveScreenElement(btn.textContent);
        console.log(calcule.calcAll);
    });
});
(_a = document.querySelector('#result')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var calcDiviMultipl = 0;
    calcule.calcAll.forEach(function (number, index) {
        if (calcule.calcAll.indexOf('/') == 1) {
            calcDiviMultipl = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);
            calcule.calcAll.splice(index - 1, index + 2);
            calcule.calcAll.calcDiviMultipl;
        }
        if (calcule.calcAll.indexOf('x') == 1) {
            calcDiviMultipl = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);
            calcule.calcAll.splice(index - 1, index + 2);
        }
    });
    console.log(calcDiviMultipl);
    console.log(calcule.calcAll);
});
function AddRemoveScreenElement(textElement) {
    //console.log(textElement)
    var screenContainer = document.getElementById('screen');
    if (screenContainer === null || screenContainer.textContent == undefined)
        return;
    if (textElement != 'del' && 'reset')
        screenContainer.innerText += "".concat(textElement);
    if (textElement == 'reset') {
        screenContainer.innerText = '';
        calcule.calcAll = [];
    }
}
