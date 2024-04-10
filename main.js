let start = document.getElementById("start");

let body = document.body;

let title;
let input;
let pretitle;

let image1;
let image2;


start.addEventListener('click', () => {
    // удалить элемент со страницы
    start.parentNode.removeChild(start);
    title = document.createElement("h1");
    input = document.createElement("input");
    title.textContent = "Введите Ваше имя";

    body.append(title);
    body.append(input);

    input.addEventListener('keyup', (event) => {
        if (event.code == "Enter" && input.value != "") {
            title.textContent = "Добро пожаловать на квест 'Какой кот тебе подходит?', " + input.value + "!";
            input.parentNode.removeChild(input);

            setTimeout(() => {
                title.parentNode.removeChild(title); option();
            }, 3000);
        }
    })
})


// вопрос, ответ, следующий уровень
function createTextLevel (question, answer, nextLevel) {
    title = document.createElement("h1");
    input = document.createElement("input");
    pretitle = document.createElement("pretitle");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(pretitle);
    input.addEventListener('keyup', (event) => {
        if (event.code == "Enter" && input.value != "") {
            if (input.value == answer) {
                input.parentNode.removeChild(input);
                pretitle.textContent = "Верно!";

                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    pretitle.parentNode.removeChild(pretitle);
                    if (nextLevel != null) {
                        nextLevel();
                    }
                }, 1500);
            }
        
            else {
                pretitle.textContent = "Неверно!";
                input.value = "";
            }
        }
    })
}

function createOptionLevel (question, btn1, btn2, nextLevel1, nextLevel2) {
    title = document.createElement("h1");
    button1 = document.createElement("button");
    button2 = document.createElement("button");

    title.textContent = question;

    body.append(title);
    body.append(button1);
    body.append(button2);

    button1.textContent = btn1;
    button2.textContent = btn2;

    button1.addEventListener('click', () => {
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        title.parentNode.removeChild(title);
        setTimeout(() => {
            if (nextLevel1 != null) {
                nextLevel1();
            }
        }, 1500);
    })

    button2.addEventListener('click', () => {
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        title.parentNode.removeChild(title);
        setTimeout(() => {
            if (nextLevel2 != null) {
                nextLevel2();
            }
        }, 1500);
    })
}

function createImgLevel(question, link1, link2, nextLevel1, nextLevel2) {
    title = document.createElement("h1");
    image1 = document.createElement("img");
    image2 = document.createElement("img");

    title.textContent = question;

    body.append(title);
    body.append(image1);
    body.append(image2);

    image1.src = link1;
    image2.src = link2;

    image1.addEventListener('click', () => {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        title.parentNode.removeChild(title);
        setTimeout(() => {
            if (nextLevel1 != null) {
                nextLevel1();
            }
        }, 1500);
    })

    image2.addEventListener('click', () => {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        title.parentNode.removeChild(title);
        setTimeout(() => {
            if (nextLevel2 != null) {
                nextLevel2();
            }
        }, 1500);
    })
}

function option() {
    createOptionLevel("Вы хотите узнать, какой кот Вам подходит?", "да", "нет", iLoveCats, stopQuest);
}

function stopQuest() {
    title = document.createElement("h1");

    body.append(title);

    title.textContent = "Для вас квест завершен";
}


function iLoveCats() {
    createTextLevel("Котики классные? (да/нет)", "да", whereToGo1);
}

function whereToGo1() {
    createImgLevel("Выберите картинку", "./img/forest.jpg", "./img/field.jpg", whereToGo2, whereToGo3);
}

function whereToGo2() {
    createImgLevel("Выберите картинку", "./img/autumn.jpeg", "./img/winter.jpg", ready1, ready2);
}

function whereToGo3() {
    createImgLevel("Выберите картинку", "./img/spring.jpg", "./img/summer.jpeg", ready3, ready4);
}

function ready1() {
    createTextLevel("Вы готовы?", "да", cat1);
}

function ready2() {
    createTextLevel("Вы готовы?", "да", cat2);
}

function ready3() {
    createTextLevel("Вы готовы?", "да", cat3);
}

function ready4() {
    createTextLevel("Вы готовы?", "да", cat4);
}

function cat1() {
    title = document.createElement("h1");
    image = document.createElement("img");

    title.textContent = "Поздравляю! Вот Ваш кот!";

    body.append(title);
    body.append(image);

    image.src = "./img/autumnCat.jpg";
}

function cat2() {
    title = document.createElement("h1");
    image = document.createElement("img");

    title.textContent = "Поздравляю! Вот Ваш кот!";

    body.append(title);
    body.append(image);

    image.src = "./img/winterCat.jpg";
}

function cat3() {
    title = document.createElement("h1");
    image = document.createElement("img");

    title.textContent = "Поздравляю! Вот Ваш кот!";

    body.append(title);
    body.append(image);

    image.src = "./img/springCat.jpg";
}

function cat4() {
    title = document.createElement("h1");
    image = document.createElement("img");

    title.textContent = "Поздравляю! Вот Ваш кот!";

    body.append(title);
    body.append(image);

    image.src = "./img/summerCat.jpg";
}