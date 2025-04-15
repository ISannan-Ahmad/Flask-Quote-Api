//Get a random Quote
async function getRandomQuote() {
    try {
        const response = await fetch("/api/quote");
        const data = await response.json();
        if (data.Quote) {
            document.getElementById("quote").innerText = data.Quote;
        } else {
            document.getElementById("quote").innerText = "No quote available.";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

//Get All Quotes
async function getAllQuotes() {
    try {
        const response = await fetch("/api/quotes");
        const data = await response.json();
        const allQuotesContainer = document.getElementById("all-quotes");
        allQuotesContainer.innerHTML = "";
        if (data.length === 0) {
            allQuotesContainer.innerText = "No quotes available.";
        } else {
            data.forEach(quote => {
                const quoteDiv = document.createElement("div");
                quoteDiv.classList.add("quote", "bg-gray-700", "p-4", "rounded-lg", "mb-4", "flex", "justify-between", "items-center");
                
                const quoteContent = document.createElement("span");
                quoteContent.classList.add("text-white");
                quoteContent.innerText = quote.quote;
                
                const deleteButton = document.createElement("button");
                deleteButton.innerText = "Delete";
                deleteButton.classList.add("bg-red-500", "hover:bg-red-600", "text-white", "px-4", "py-2", "rounded");
                deleteButton.addEventListener("click", () => deleteQuote(quote.id));
                
                quoteDiv.appendChild(quoteContent);
                quoteDiv.appendChild(deleteButton);
                allQuotesContainer.appendChild(quoteDiv);
            });
        }
    } catch (error) {
        console.error("Error fetching all quotes:", error);
    }
}

document.querySelector(".get-quote").addEventListener("click", getRandomQuote);
document.querySelector(".get-all-quotes").addEventListener("click", getAllQuotes);
document.addEventListener("DOMContentLoaded", getRandomQuote);

//Add new Quote
document.querySelector("#quote-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const newQuote = document.getElementById("new-quote").value;

    if (newQuote.trim()) {
        try {
            const response = await fetch('/api/quote', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Quote: newQuote }),
            });

            const data = await response.json();
            alert(data.message || "Quote Added Successfully");
            resetForm(); // Reset the form after adding
            getAllQuotes();
        } catch (error) {
            console.error("Error adding the quote:", error);
        }
    }
});

// Delete Quote
async function deleteQuote(id) {
    try {
        const response = await fetch(`/api/quote/${id}`, {
            method: "DELETE",
        });

        const data = await response.json();
        alert(data.message || "Quote Deleted Successfully");
        getAllQuotes();
    } catch (error) {
        console.error("Error deleting the quote:", error);
    }
}

function resetForm() {
    document.getElementById("new-quote").value = "";
}
