function addItem() {
    const input = document.querySelector('#input');
    const list = document.querySelector('.list');

    let li = document.createElement('li');
    li.innerText = input.value;
    li.setAttribute('class', 'in-progress');

    let button = document.createElement('button');
    button.setAttribute('class', 'remove')
    button.innerHTML = "Button"

    li.append(button)
    list.append(li);
    input.value = '';
}

document.querySelector('ul').addEventListener('click', function(event) {
    if (event.target.closest('li')){
        event.target.closest('li').classList.toggle('done')
        event.target.closest('li').classList.toggle('in-progress')
    }
    if (event.target.closest('.remove')) {
        event.target.closest('li').remove()
    }
})

document.querySelector('.submit-btn').addEventListener('click', addItem);