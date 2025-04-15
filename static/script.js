
async function getRandomQuote() {
    try{
        const response = await fetch("/api/quote");
        const data = await response.json();
        document.getElementById("quote").innerText = data.Quote;
    }
    catch(error){
        console.error("Error fetching quote : ", error);
    }
}

document.querySelector(".get-quote").addEventListener("click", ()=>{
    getRandomQuote()
});

document.addEventListener("DOMContentLoaded", () => {
    getRandomQuote();
});

document.querySelector("#quote-form").addEventListener("submit", async(e) => {
    e.preventDefault();

    const newQuote = document.getElementById("new-quote").value;

    if(newQuote.trim()){
        try{
            const response = await fetch('/api/quote', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({Quote : newQuote})
            });

            const data = await response.json();
            alert(data.message || "Quote Added Successfully")
            document.getElementById("new-quote").value = "";
        }
        catch(error){
            console.error("Error adding the quote : ", error)
        }
    }
});
