var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Numbers = /** @class */ (function () {
    function Numbers(setNumber1, setNumber2) {
        this.number1 = setNumber1;
        this.number2 = setNumber2;
    }
    ;
    Object.defineProperty(Numbers.prototype, "sum", {
        get: function () {
            return this.number1 + this.number2;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Numbers.prototype, "mult", {
        get: function () {
            return this.number1 * this.number2;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Numbers.prototype, "divi", {
        get: function () {
            return this.number1 / this.number2;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Numbers.prototype, "subtr", {
        get: function () {
            return this.number1 - this.number2;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Numbers;
}());
;
barToggleThemer.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log('foreach-btn()');
        e.stopPropagation();
        if (btn.textContent === null)
            return;
        mountCalc(btn.textContent);
    });
});
function mountCalc(item) {
    console.log('mountCalc()');
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
}
function Calc() {
    var _this = this;
    console.log('Calc()');
    calcule.caclUmount = [];
    if (calcule.calcAll.length <= 1) {
        for (var index = 0; index < calcule.calcAll[0].length; index++) {
            calcule.caclUmount.push(calcule.calcAll[0][index]);
        }
        AddRemoveScreenElement(calcule.caclUmount, true);
        return;
    }
    calcule.calcAll.forEach(function (item, index) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(index);
                    if (!(item === 'x')) return [3 /*break*/, 2];
                    return [4 /*yield*/, compostCalcSide(index)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (!(item === '/')) return [3 /*break*/, 4];
                    return [4 /*yield*/, compostCalcSide(index)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(!includesItems('x') && !includesItems('/'))) return [3 /*break*/, 8];
                    if (!(item === '+')) return [3 /*break*/, 6];
                    return [4 /*yield*/, compostCalcSide(index)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    if (!(item === '-')) return [3 /*break*/, 8];
                    return [4 /*yield*/, compostCalcSide(index)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); });
}
(_a = document.querySelector('#result')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    console.log('result-addeventlistener()');
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
    if (calcule.caclUmount.includes('='))
        calcule.caclUmount.pop();
    if (calcule.calcAll.includes('='))
        calcule.calcAll.pop();
    if (Number(calcule.caclUmount[calcule.caclUmount.length - 1]))
        Calc();
});
function compostCalcSide(index) {
    return __awaiter(this, void 0, void 0, function () {
        var number1, number2, numbers, numberremove;
        return __generator(this, function (_a) {
            console.log('compostCalcSide()');
            calcule.result = 0;
            number1 = Number(calcule.calcAll[index - 1]);
            number2 = Number(calcule.calcAll[index + 1]);
            numbers = new Numbers(number1, number2);
            console.log(calcule.calcAll);
            switch (calcule.calcAll[index]) {
                case '/':
                    calcule.result = numbers.divi;
                    break;
                case 'x':
                    calcule.result = numbers.mult;
                    break;
                case '+':
                    calcule.result = numbers.sum;
                    break;
                case '-':
                    calcule.result = numbers.subtr;
                    break;
                default:
                    break;
            }
            numberremove = calcule.calcAll.splice(index - 1, 3, "".concat(calcule.result));
            Calc();
            return [2 /*return*/];
        });
    });
}
function AddRemoveScreenElement(textElement, confimation) {
    console.log('AddRemoveScreenElement()');
    var screenContainer = document.getElementById('screen');
    if (screenContainer === null)
        return;
    if (confimation)
        calcule.calcAll = [];
    var breakLineCont = 14;
    var breakLineMet = '';
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
        else if (parseInt(index) === breakLineCont) {
            breakLineMet = '';
            if (parseInt(index) == 14) {
                screenContainer.style.fontSize = '1.2em';
                breakLineCont = 19;
            }
            else {
                breakLineMet = '\n';
                breakLineCont += 20;
            }
            screenContainer.innerText += "".concat(textElement[index]).concat(breakLineMet);
        }
        else {
            screenContainer.innerText += "".concat(textElement[index]);
        }
    }
    if (calcule.caclUmount.length == 0)
        screenContainer.innerText = '';
}
// switch themer
document.querySelectorAll('.switchThemerbtn').forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        var _a, _b;
        console.log(document.body.className);
        document.body.classList.replace("".concat(document.body.className), "themer-".concat(index + 1, "-active"));
        (_a = document.querySelector('.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        (_b = document.querySelector(".themer-".concat(index + 1))) === null || _b === void 0 ? void 0 : _b.classList.add('active');
    });
});
