function search(event){
    event.preventDefault();
    alert("This is working");
}

let search_form=document.querySelector("#form-search");
search_form.addEventListener("submit",search);