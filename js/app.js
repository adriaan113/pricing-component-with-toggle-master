
const monthly = document.querySelectorAll('.monthly');
const yearly = document.querySelectorAll('.yearly');
const priceSwitch = document.querySelector('input[type=checkbox]');

function MonthOrYear(){
    for(let i=0;i<monthly.length;i++){
        if(priceSwitch.checked){
            //console.log(true);
            yearly[i].style.display = 'none';
            monthly[i].style.display = 'block';

        }else{
            //console.log(false);
            yearly[i].style.display = 'block';
            monthly[i].style.display = 'none';
        }
    }   
}

priceSwitch.addEventListener('click',()=>{
    MonthOrYear();
});