document.querySelector('ul').addEventListener('click', function(event) {
    let item = event.target.closest('li');
    if (item){
        item.classList.toggle('done')
    }
    if (event.target.closest('.remove')){
        item.remove()
    }
})

document.querySelector('.addItem').addEventListener('click', function() {
    const input = document.querySelector('#input');
    const list = document.querySelector('.list');

    let li = document.createElement('li');
    li.innerText = input.value;
    li.style.background = 'yellow';

    let buttonRemove = document.createElement('button');
    buttonRemove.setAttribute('class', 'remove')
    buttonRemove.innerHTML = "Remove"

    li.append(buttonRemove);
    list.append(li);
    input.value = '';
}
);