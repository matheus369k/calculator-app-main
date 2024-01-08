interface Calcule {
    calcAll: string[];
    caclUmount: string[];
    result: number;
}

let calcule: Calcule = {
    calcAll: [],
    caclUmount: [],
    result: 0,
};

let numberCalc: string = '';

const barToggleThemer = document.querySelectorAll('.btn');

function indexOfItem(indexOf: string): number {
    return calcule.calcAll.indexOf(indexOf);
}

function includesItems(include: string): boolean {
    return calcule.calcAll.includes(include);
}

class Numbers {
    number1: number;
    number2: number;

    constructor(setNumber1: number, setNumber2: number) {
        this.number1 = setNumber1;
        this.number2 = setNumber2;
    };

    get sum() {
        return this.number1 + this.number2;
    };

    get mult() {
        return this.number1 * this.number2;
    };

    get divi() {
        return this.number1 / this.number2;
    };

    get subtr() {
        return this.number1 - this.number2;
    };
};



barToggleThemer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('foreach-btn()')

        e.stopPropagation();

        if (btn.textContent === null) return

        mountCalc(btn.textContent)
    });
});

function mountCalc(item: string) {
    console.log('mountCalc()')

    if (
        (
            item != 'del' &&
            item != 'reset' &&
            item != '.' &&
            (
                (
                    item != '-' && calcule.caclUmount.length == 0

                ) || (

                    calcule.caclUmount.length != 0
                )
            )
        ) && (
            isNaN(parseInt(item)
            ) && (
                isNaN(Number(calcule.caclUmount[calcule.caclUmount.length - 1]))
                ||
                calcule.caclUmount.length == 0
            )
        )
    ) {

        return

    }

    calcule.caclUmount.push(item)

    AddRemoveScreenElement(calcule.caclUmount, false)

}

function Calc() {
    console.log('Calc()')

    calcule.caclUmount = []


    if (calcule.calcAll.length <= 1) {

        for (let index = 0; index < calcule.calcAll[0].length; index++) {

            calcule.caclUmount.push(calcule.calcAll[0][index])

        }

        AddRemoveScreenElement(calcule.caclUmount, true)

        return

    }

    calcule.calcAll.forEach(async (item, index) => {

        console.log(index)

        if (item === 'x') {

            await compostCalcSide(index)

        } else if (item === '/') {

            await compostCalcSide(index)

        }

        if (!includesItems('x') && !includesItems('/')) {

            if (item === '+') {

                await compostCalcSide(index)

            } else if (item === '-') {

                await compostCalcSide(index)

            }
        }

    })
}

document.querySelector('#result')?.addEventListener('click', (e) => {
    console.log('result-addeventlistener()')

    e.stopPropagation();

    calcule.caclUmount.push('=')

    for (let index = 0; index < calcule.caclUmount.length; index++) {

        if (
            parseInt(calcule.caclUmount[index]) ||
            parseInt(calcule.caclUmount[index]) == 0 ||
            calcule.caclUmount[index] == '.' ||
            (
                calcule.caclUmount[index] == '-' && index == 0
            )
        ) {

            numberCalc = `${numberCalc}${calcule.caclUmount[index]}`

        } else if (!Number(calcule.caclUmount[index])) {

            if (numberCalc) calcule.calcAll.push(numberCalc)

            calcule.calcAll.push(calcule.caclUmount[index])

            numberCalc = '';
        }

    }

    if (calcule.caclUmount.includes('=')) calcule.caclUmount.pop()
    if (calcule.calcAll.includes('=')) calcule.calcAll.pop()

    if (Number(calcule.caclUmount[calcule.caclUmount.length - 1])) Calc()

});

async function compostCalcSide(index: number) {
    console.log('compostCalcSide()')

    calcule.result = 0;

    const number1 = Number(calcule.calcAll[index - 1]);
    const number2 = Number(calcule.calcAll[index + 1]);

    const numbers = new Numbers(number1, number2)


    console.log(calcule.calcAll)

    switch (calcule.calcAll[index]) {

        case '/':

            calcule.result = numbers.divi
            break

        case 'x':

            calcule.result = numbers.mult
            break

        case '+':

            calcule.result = numbers.sum
            break

        case '-':

            calcule.result = numbers.subtr
            break

        default:
            break
    }

    const numberremove = calcule.calcAll.splice(index - 1, 3, `${calcule.result}`)

    Calc()
}

function AddRemoveScreenElement(textElement: string[], confimation: boolean) {
    console.log('AddRemoveScreenElement()')

    const screenContainer: HTMLElement | null = document.getElementById('screen');

    if (screenContainer === null) return

    if (confimation) calcule.calcAll = []

    let breakLineCont: number = 14;
    let breakLineMet: string = '';

    for (const index in textElement) {

        if (textElement[index] == '=') continue

        if (textElement.includes('del')) calcule.caclUmount.splice(textElement.length - 2, textElement.length);

        if (textElement.includes('reset')) {

            calcule.caclUmount = []

            break

        } else if (parseInt(index) === 0) {

            screenContainer.innerText = `${textElement[index]}`;

        } else if (parseInt(index) === breakLineCont) {

            breakLineMet = ''
            if  (parseInt(index) == 14){
                screenContainer.style.fontSize = '1.2em';
                breakLineCont = 19
            } else {
                breakLineMet = '\n'
                breakLineCont += 20
            }

            screenContainer.innerText += `${textElement[index]}${breakLineMet}`;

        } else {

            screenContainer.innerText += `${textElement[index]}`;

        }
    }

    if (calcule.caclUmount.length == 0) screenContainer.innerText = '';

}



// switch themer


document.querySelectorAll('.switchThemerbtn').forEach((btn,index) =>{
    btn.addEventListener('click', () =>{
        console.log(document.body.className)

        document.body.classList.replace(`${document.body.className}`, `themer-${index + 1}-active`);

        document.querySelector('.active')?.classList.remove('active');

        document.querySelector(`.themer-${index+1}`)?.classList.add('active')

    })
})