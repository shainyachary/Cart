let boxes = document.querySelectorAll('.box');

boxes.forEach((item, index) => {
    let radio_btn = item.querySelector('#radio_btn');

    radio_btn.addEventListener('click', () =>{
        item.classList.toggle('add');
        let desc = item.querySelector('.table_content');
        if(item.classList.contains('add')){
            desc.style.height = `${desc.scrollHeight}px`;
        }
        else{
            desc.style.height = `0px`;
        }
        removeAdd(index);
    });
});

function removeAdd(index1){
    boxes.forEach((item2, index2) =>{
        if(index1 != index2){
            item2.classList.remove('add');
            let desc = item2.querySelector('.table_content');
            desc.style.height = `0px`;
        }
    });
};