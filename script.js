// Scripting by Teth Code
// main code

function main() {
    // dark mode/light mode toggle function
    function darkModeToggler() {
        // Select the checkbox and listen for changes
    const toggleSwitch = document.getElementById('darkModeToggle');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Event listener to toggle dark mode
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');

        // Save the user preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });    
    };
    let deposit = document.getElementById('deposit');
    let deposit_hide = document.getElementById('hidden_deposit'); 
    let deposit_confirm = document.getElementById('confirm_deposit');
    let amount_tobe = document.getElementById('amount_tobe');
    let cash = document.getElementById('cash');
    deposit.addEventListener('click', () => {
        deposit_hide.style.display = 'block';
    });
    deposit_confirm.addEventListener('click', (event) => {
        event.preventDefault();
        
        cash.innerHTML = Number(amount_tobe.value);
        deposit_hide.style.display = 'none';
    });
        let withdraw = document.getElementById('withdraw');
        let hid_withdraw = document.getElementById('hidden_withdraw')
        let confirm_withdraw = document.getElementById('confirm_withdraw')
        let acc_towit = document.getElementById('acc_towit');
        withdraw.addEventListener('click', (event) => {
            hid_withdraw.style.display = 'block';
        })
        confirm_withdraw.addEventListener('click', (event) => {
            event.preventDefault()
            cash.innerHTML = '';
            hid_withdraw.style.display = 'none';
        })
    
    darkModeToggler()
};
main()