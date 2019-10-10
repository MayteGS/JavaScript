class Tweet {

    content = '';

    constructor() {}

    addTweet(contentTweet) {

        if (contentTweet != '') {

            this.content = contentTweet;
            console.log(this.content);
            this.createTweet(this.content);
            this.addTweetLS(this.content);

        } else {
            Swal.fire({
                type: 'warning',
                title: 'Tweet Vacio',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    createTweet(tweet) {
        const li = document.createElement('li');
        li.classList = "list-group-item rounded-pill text-break";

        const btnClose = document.createElement('button');
        btnClose.classList = 'close';

        const spanClose = document.createElement('span');
        spanClose.classList = 'badge badge-pill badge-ligh text-danger';
        spanClose.setAttribute = ('aria-hidden', 'true');
        spanClose.textContent = 'x';

        btnClose.appendChild(spanClose);

        li.innerText = tweet;
        listaTweets.appendChild(li);
        li.appendChild(btnClose);
    }

    addTweetLS(tweet) {
        let tweets;
        tweets = this.getLocalStorage();
        tweets.push(tweet);

        localStorage.setItem('tweets', JSON.stringify(tweets));


    }

    getLocalStorage() {

        let tweets;
        // tweets = this.getLocalStorage();

        if (localStorage.getItem('tweets') === null) {
            tweets = [];

        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }

        return tweets;

    }

    removeTweetLS(tweetD) {

        let tweets = this.getLocalStorage();

        tweets.forEach(function(tweet, index) {

            if (tweetD === tweet) {

                tweets.splice(index, 1);
                console.log(tweets);


            }

        });

        localStorage.setItem('tweets', JSON.stringify(tweets));

    }
}