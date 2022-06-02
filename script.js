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

