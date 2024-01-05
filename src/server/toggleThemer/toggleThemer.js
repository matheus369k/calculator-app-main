

export function toggleThemer() {
    const barToggleThemer = document.getElementById('toggleThemer');

    console.log(barToggleThemer);

    barToggleThemer?.children.forEach((element) => {
        console.log(element);
    });

    console.log(barToggleThemer?.children);
}
