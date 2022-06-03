//Let's Go!

/*--------------------------------------------------------------------------------------------------------------------
Para que la siguiente funcion funcione en el HTML los buttons deben de escribirse de la sig. manera:
<button type="button" class="btn btn-outline-dark increase" onclick="changeCount(1)">Increase</button>

en JS escribimos:

let count = 0;
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
};

----------------------------------------------------------------------------------------------------------------------
*/

const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('increase')){
            count ++;
        }else if(styles.contains('decrease')){
            count --;
        }else{
            count = 0;
        };

        counter.textContent = count;
    });
});   


//---------------------------------------------------------------------------------------------------------------------
//Modo Nocturno

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //Guardamos el Modo Nocturno en el localStorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }

});

//Obtenemos el modo actual donde nos encontramos
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}