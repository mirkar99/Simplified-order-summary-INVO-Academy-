const btn = document.querySelector('.order-block__payment-btn');
const btnEventListner = () => {
    btn.addEventListener('click', () => {
        if (btn.innerText == 'Proceed to Payment') {
            btn.innerText = 'Wait\n.';
            let intervalId = setInterval(() => {
                if (btn.innerText == 'Wait\n...') {
                    btn.innerText = 'Wait\n';
                }
                btn.innerText += '.';
            }, 500);
            setTimeout(() => {
                btn.innerText = 'Proceed to Payment';
                clearInterval(intervalId)
            }, 3500);
        }
        //this is only demo
    })

}

export default btnEventListner;