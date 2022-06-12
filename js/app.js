const ratingContainer = document.querySelector("#rating-container")
const thankYou = document.querySelector("#thank-you")
const submit = document.querySelector("#submit")
const selectedRating = document.querySelector("#selected-rating")
submit.addEventListener("click", (e) => {
    const rating = document.querySelector("input[name='rating']:checked").value
    selectedRating.innerText = rating
    ratingContainer.classList.toggle("hidden")
    thankYou.classList.toggle("hidden")
})