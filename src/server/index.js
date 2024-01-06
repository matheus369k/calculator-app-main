var _a;
var calcule = {
    calcAll: [],
    result: 0,
};
var numberCalc = '';
var barToggleThemer = document.querySelectorAll('.btn');
// console.log(barToggleThemer);
barToggleThemer.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.textContent === null)
            return;
        if (parseInt(btn.textContent) || parseInt(btn.textContent) == 0 || btn.textContent == '.') {
            numberCalc = "".concat(numberCalc).concat(btn.textContent);
        }
        else if ((btn.textContent == '-' || 'x') || (btn.textContent == '/' || '+')) {
            if (numberCalc)
                calcule.calcAll.push(numberCalc);
            calcule.calcAll.push(btn.textContent);
            numberCalc = '';
        }
        if (btn.textContent !== '=')
            AddRemoveScreenElement(btn.textContent, false);
        console.log(calcule.calcAll);
    });
});
function Calc() {
    if (calcule.calcAll.includes('='))
        calcule.calcAll.pop();
    if (calcule.calcAll.includes('x') || calcule.calcAll.includes('/')) {
        if ((calcule.calcAll.indexOf('/') < calcule.calcAll.indexOf('x') && calcule.calcAll.includes('/')) ||
            (calcule.calcAll.indexOf('/') > calcule.calcAll.indexOf('x') && !calcule.calcAll.includes('x'))) {
            compostCalcSide(calcule.calcAll.indexOf('/'));
        }
        if ((calcule.calcAll.indexOf('x') < calcule.calcAll.indexOf('/') && calcule.calcAll.includes('x')) ||
            (calcule.calcAll.indexOf('x') > calcule.calcAll.indexOf('/') && !calcule.calcAll.includes('/'))) {
            compostCalcSide(calcule.calcAll.indexOf('x'));
        }
    }
    else {
        if ((calcule.calcAll.indexOf('-') < calcule.calcAll.indexOf('+') && calcule.calcAll.includes('-')) ||
            (calcule.calcAll.indexOf('-') > calcule.calcAll.indexOf('+') && !calcule.calcAll.includes('+'))) {
            compostCalcSide(calcule.calcAll.indexOf('-'));
        }
        if ((calcule.calcAll.indexOf('+') < calcule.calcAll.indexOf('-') && calcule.calcAll.includes('+')) ||
            (calcule.calcAll.indexOf('+') > calcule.calcAll.indexOf('-') && !calcule.calcAll.includes('-'))) {
            compostCalcSide(calcule.calcAll.indexOf('+'));
        }
    }
}
(_a = document.querySelector('#result')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return Calc(); });
/*function singleCalc() {
    console.log('single')

    switch (calcule.calcAll[1]) {
        case '+':
            calcule.result = Number(calcule.calcAll[0]) + Number(calcule.calcAll[2]);
            break
        case '-':
            calcule.result = Number(calcule.calcAll[0]) - Number(calcule.calcAll[2]);
            break
        case 'x':
            calcule.result = Number(calcule.calcAll[0]) * Number(calcule.calcAll[2]);
            break
        case '/':
            calcule.result = Number(calcule.calcAll[0]) / Number(calcule.calcAll[2]);
            break
    }

    AddRemoveScreenElement(`${calcule.result}`, true)
}*/
function compostCalcSide(index) {
    var calc = 0;
    calcule.calcAll.forEach(function (item, index) {
        if (calcule.calcAll.includes('x') || calcule.calcAll.includes('/')) {
            if (item == 'x') {
                calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);
            }
            else {
                calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);
            }
        }
        else {
            if (item == '-') {
                calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);
            }
            else {
                calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1]);
            }
        }
        calcule.calcAll.splice(index - 1, index + 2, "".concat(calc));
    });
    if (calcule.calcAll[index] == '/') {
        calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);
    }
    else if (calcule.calcAll[index] == '-') {
        calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);
    }
    else if (calcule.calcAll[index] == '+') {
        calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1]);
    }
    else if (calcule.calcAll[index] == 'x') {
        calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);
    }
    calcule.result = calc;
    console.log(calc);
    console.log(calcule.calcAll);
    if (calcule.calcAll.length <= 1) {
        AddRemoveScreenElement("".concat(calcule.result), true);
    }
    else
        Calc();
}
function AddRemoveScreenElement(textElement, confimation) {
    //console.log(textElement)
    var screenContainer = document.getElementById('screen');
    if (screenContainer === null || screenContainer.textContent == undefined)
        return;
    if ((textElement != 'del' && 'reset'))
        screenContainer.innerText += "".concat(textElement);
    if (textElement == 'reset') {
        screenContainer.innerText = '';
        calcule.calcAll = [];
    }
    if (confimation) {
        screenContainer.innerText = "".concat(textElement);
        calcule.calcAll = [];
        calcule.calcAll.push("".concat(calcule.result));
    }
    return;
}
