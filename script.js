const form = document.getElementById('application-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit (event){
    
    event.preventDefault();
    
    const name=document.getElementById('name').value;
    
    const email=document.getElementById('email').value;
    
    const message=document.getElementById('message').value;
    
    const inputs = document.querySelectorAll('#name', '#email', '#message');
    
    inputs.forEach(input => {
        input.value=""
    });
    
    alert(`Thank you ${name} for applying to our company. We'll get back to you as soon as possible.`);
}
