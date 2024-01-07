var _a;
var calcule = {
    calcAll: [],
    caclUmount: [],
    result: 0,
};
var numberCalc = '';
var barToggleThemer = document.querySelectorAll('.btn');
function indexOfItem(indexOf) {
    return calcule.calcAll.indexOf(indexOf);
}
function includesItems(include) {
    return calcule.calcAll.includes(include);
}
// console.log(barToggleThemer);
barToggleThemer.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (btn.textContent === null)
            return;
        mountCalc(btn.textContent);
        //console.log(isNaN(Number(calcule.calcAll[calcule.calcAll.length - 1])))
        //console.log(calcule.calcAll)
    });
});
function mountCalc(item) {
    //console.log(calcule.caclUmount.length)
    if ((item != 'del' &&
        item != 'reset' &&
        item != '.' &&
        ((item != '-' && calcule.caclUmount.length == 0) || (calcule.caclUmount.length != 0))) && (isNaN(parseInt(item)) && (isNaN(Number(calcule.caclUmount[calcule.caclUmount.length - 1]))
        ||
            calcule.caclUmount.length == 0))) {
        return;
    }
    calcule.caclUmount.push(item);
    AddRemoveScreenElement(calcule.caclUmount, false);
    //console.log(calcule.caclUmount)
}
function Calc() {
    calcule.caclUmount = [];
    if (includesItems('x') || includesItems('/')) {
        calcule.calcAll.forEach(function (item, index) {
            if (item == 'x') {
                compostCalcSide(index);
            }
            if (item == '/') {
                compostCalcSide(index);
            }
        });
    }
    else if (includesItems('+') || includesItems('-')) {
        calcule.calcAll.forEach(function (item, index) {
            if (item == '+') {
                compostCalcSide(index);
            }
            if (item == '-') {
                compostCalcSide(index);
            }
        });
    }
    else if (calcule.calcAll.length <= 1) {
        for (var index = 0; index < calcule.calcAll[0].length; index++) {
            calcule.caclUmount.push(calcule.calcAll[0][index]);
        }
        AddRemoveScreenElement(calcule.caclUmount, true);
    }
}
(_a = document.querySelector('#result')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.stopPropagation();
    calcule.caclUmount.push('=');
    for (var index = 0; index < calcule.caclUmount.length; index++) {
        if (parseInt(calcule.caclUmount[index]) ||
            parseInt(calcule.caclUmount[index]) == 0 ||
            calcule.caclUmount[index] == '.' ||
            (calcule.caclUmount[index] == '-' && index == 0)) {
            numberCalc = "".concat(numberCalc).concat(calcule.caclUmount[index]);
        }
        else if (!Number(calcule.caclUmount[index])) {
            if (numberCalc)
                calcule.calcAll.push(numberCalc);
            calcule.calcAll.push(calcule.caclUmount[index]);
            numberCalc = '';
        }
    }
    //console.log(calcule.calcAll)
    if (calcule.caclUmount.includes('='))
        calcule.caclUmount.pop();
    if (calcule.calcAll.includes('='))
        calcule.calcAll.pop();
    if (Number(calcule.caclUmount[calcule.caclUmount.length - 1]))
        Calc();
});
function compostCalcSide(index) {
    var calc = 0;
    var cont = 0;
    switch (calcule.calcAll[index]) {
        case '/':
            calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);
            cont++;
            break;
        case 'x':
            calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);
            cont++;
            break;
        case '+':
            calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1]);
            cont++;
            break;
        case '-':
            calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);
            cont++;
            break;
    }
    console.log(calc, index, cont);
    console.log(calcule.calcAll);
    calcule.calcAll.splice(index - 1, index + 2, "".concat(calc));
    Calc();
}
function AddRemoveScreenElement(textElement, confimation) {
    //console.log(textElement)
    var screenContainer = document.getElementById('screen');
    if (screenContainer === null)
        return;
    if (confimation)
        calcule.calcAll = [];
    for (var index in textElement) {
        if (textElement[index] == '=')
            continue;
        if (textElement.includes('del'))
            calcule.caclUmount.splice(textElement.length - 2, textElement.length);
        if (textElement.includes('reset')) {
            calcule.caclUmount = [];
            break;
        }
        else if (parseInt(index) === 0) {
            screenContainer.innerText = "".concat(textElement[index]);
        }
        else {
            screenContainer.innerText += "".concat(textElement[index]);
        }
    }
    if (calcule.caclUmount.length == 0)
        screenContainer.innerText = '';
}
