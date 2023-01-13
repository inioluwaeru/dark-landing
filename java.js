function f(div) {
    div.addEventListener('mouseover', (e) => {
        div.classList.add('active')
    })    
    div.addEventListener('mouseout', (e) => {
        div.classList.remove('active')
    })    
}

const div = document.getElementById('list')
const div1 = document.getElementById('list1')
const div2 = document.getElementById('list2')
const div3 = document.getElementById('list3')
const div4 = document.getElementById('list4')
const div5 = document.getElementById('list5')

f(div);
f(div1);
f(div2);
f(div3);
f(div4);
f(div5);
