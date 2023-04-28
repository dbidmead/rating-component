const ratingContainer = document.getElementById('rating-container');
const thankYouContainer = document.getElementById('thank-you-container');
const ratingReport = document.getElementById('rating-report');

let rating = null;

function handleRatingClick(btn) {
    rating = btn.innerHTML;
    console.log(rating);
}

function handleSubmit() {
    if (rating == null) return;
    if (rating) {
        ratingReport.innerText = 'You selected ' + rating + ' out of 5';
        console.log(ratingReport);
        rating = null;
    }
    ratingContainer.style.display = 'none';
    thankYouContainer.style.display = 'flex';
}