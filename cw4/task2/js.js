const root = document.querySelector('#root');

function create (elem){
    return document.createElement(elem);
}

const button = create('button');
button.innerText = 'BUTTON';
root.before(button);

function createNewDiv (){
    const newDiv = create('div');
    newDiv.innerText = "qwerty";
    root.append(newDiv);
}

let count = 0;

button.onclick = () => {
    count++;

    if(count != 10){
        createNewDiv();
    }else{
        const [...items] = root.children;
        items.forEach(item => item.remove());
        count = 0;
    }
};