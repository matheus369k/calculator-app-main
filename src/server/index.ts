interface Calcule {
    calcAll: string[];
    result: number;
}

let calcule: Calcule = {
    calcAll: [],
    result: 0,
};

let numberCalc: string = '';

const barToggleThemer = document.querySelectorAll('.btn');

// console.log(barToggleThemer);

barToggleThemer.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (btn.textContent === null) return

        if (parseInt(btn.textContent) || parseInt(btn.textContent) == 0 || btn.textContent == '.') {

            numberCalc = `${numberCalc}${btn.textContent}`

        } else if ((btn.textContent == '-' || 'x') || (btn.textContent == '/' || '+')) {

            if (numberCalc) calcule.calcAll.push(numberCalc)

            calcule.calcAll.push(btn.textContent)

            numberCalc = '';

        }

        if (btn.textContent !== '=') AddRemoveScreenElement(btn.textContent, false)

        console.log(calcule.calcAll)
    });
});

function Calc() {

    if (calcule.calcAll.includes('=')) calcule.calcAll.pop()

    if (calcule.calcAll.includes('x') || calcule.calcAll.includes('/')) {

        if (
            (calcule.calcAll.indexOf('/') < calcule.calcAll.indexOf('x') && calcule.calcAll.includes('/')) ||
            (calcule.calcAll.indexOf('/') > calcule.calcAll.indexOf('x') && !calcule.calcAll.includes('x'))
        ) {

            compostCalcSide(calcule.calcAll.indexOf('/'));

        }

        if (
            (calcule.calcAll.indexOf('x') < calcule.calcAll.indexOf('/') && calcule.calcAll.includes('x')) ||
            (calcule.calcAll.indexOf('x') > calcule.calcAll.indexOf('/') && !calcule.calcAll.includes('/'))
        ) {

            compostCalcSide(calcule.calcAll.indexOf('x'));

        }

    } else {

        if (
            (calcule.calcAll.indexOf('-') < calcule.calcAll.indexOf('+') && calcule.calcAll.includes('-')) ||
            (calcule.calcAll.indexOf('-') > calcule.calcAll.indexOf('+') && !calcule.calcAll.includes('+'))
        ) {

            compostCalcSide(calcule.calcAll.indexOf('-'));
        }

        if (
            (calcule.calcAll.indexOf('+') < calcule.calcAll.indexOf('-') && calcule.calcAll.includes('+')) ||
            (calcule.calcAll.indexOf('+') > calcule.calcAll.indexOf('-') && !calcule.calcAll.includes('-'))
        ) {

            compostCalcSide(calcule.calcAll.indexOf('+'));

        }
    }


}

document.querySelector('#result')?.addEventListener('click', () => Calc());

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

function compostCalcSide(index: number) {

    let calc: number = 0;

    calcule.calcAll.forEach((item, index) => {

        if (calcule.calcAll.includes('x') || calcule.calcAll.includes('/')) {

            if (item == 'x') {

                calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);

            } else {

                calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);

            }

        } else {

            if (item == '-') {

                calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);

            } else {

                calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1]);

            }

        }

        calcule.calcAll.splice(index - 1, index + 2, `${calc}`)

    })

    
    if (calcule.calcAll[index] == '/') {

        calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);

    } else if (calcule.calcAll[index] == '-') {

        calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);

    } else if (calcule.calcAll[index] == '+') {

        calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1])

    } else if (calcule.calcAll[index] == 'x') {

        calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);

    }



    calcule.result = calc

    console.log(calc)
    console.log(calcule.calcAll)

    if (calcule.calcAll.length <= 1) {

        AddRemoveScreenElement(`${calcule.result}`, true)

    } else Calc()
}

function AddRemoveScreenElement(textElement: string, confimation: boolean) {

    //console.log(textElement)

    const screenContainer: HTMLElement | null = document.getElementById('screen');

    if (screenContainer === null || screenContainer.textContent == undefined) return

    if ((textElement != 'del' && 'reset')) screenContainer.innerText += `${textElement}`;

    if (textElement == 'reset') {
        screenContainer.innerText = '';
        calcule.calcAll = []
    }

    if (confimation) {
        screenContainer.innerText = `${textElement}`;
        calcule.calcAll = [];
        calcule.calcAll.push(`${calcule.result}`)

    }
    return

}

