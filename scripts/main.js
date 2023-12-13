var caption = document.querySelector('h2');
caption.textContent = 'Hi from Andrey!';


var image = document.querySelector('img');

image.onclick = function () {
    var source = image.getAttribute('src');
    if (source === 'images/ada.jpg') {
        image.setAttribute('src', 'images/TurtleBot_specs.jpg');
    } else {
        image.setAttribute('src', 'images/ada.jpg');
    }
}


change_user_btn = document.querySelector('button');
h1_text = document.querySelector('h1');

function set_user_name() {
    var name = prompt('Please enter your name:');
    localStorage.setItem('name', name); // позволяет нам хранить данные в браузере
    h1_text.textContent = 'Приуэт, ' + name;
}

if (!localStorage.getItem('name')) {
    set_user_name();
} else {
    var stored_name = localStorage.getItem('name');
    h1_text.textContent = 'Приуэт, ' + stored_name;
}

change_user_btn.onclick = set_user_name();
