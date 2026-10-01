function loadClothing() {

    fetch('data.json')
        .then(res => res.json())
        .then(clothing => {

            const section = document.querySelector("section");

            section.innerHTML = clothing.map((item) =>
                `<div>
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <button>${item.details}</button>
                </div>`
            ).join(" ");

        });

}

function changeStyles() {

    document.body.classList.toggle('dark');

}

document.querySelector('.btn').addEventListener('click', loadClothing);
document.querySelector('.btn_style').addEventListener('click', changeStyles);

