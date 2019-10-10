const listaTweets = document.getElementById('lista-tweets');
let tweetToDelete = '';

EventListener();

function EventListener() {

    document.addEventListener('DOMContentLoaded', LocalStorageReady)

    document.querySelector('#formulario').addEventListener('submit', addTweet);
    listaTweets.addEventListener('click', removeTweet);
}

let tweet = new Tweet();

function addTweet() {

    let contentTweet = document.getElementById('tweet').value.trim();
    tweet.addTweet(contentTweet);

    document.getElementById('tweet').value = '';

}

function removeTweet(event) {

    event.preventDefault();

    if (event.target.tagName === 'SPAN') {
        tweetToDelete =
            event.target.parentElement.parentElement.textContent.slice(0, -1);
        console.log(tweetToDelete);

        Swal.fire({
            title: 'Advertencia',
            text: `Se eliminara el tweet "${tweetToDelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.value) {

                event.target.parentElement.parentElement.remove();
                tweet.removeTweetLS(tweetToDelete);

                Swal.fire({
                    type: 'warning',
                    title: 'Tweet Eliminado',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
}

function LocalStorageReady() {

    let tweets = tweet.getLocalStorage();

    tweets.forEach(function(Tweet) {
        tweet.createTweet(Tweet)
    });

}