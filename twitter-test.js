var Twit = require('twit')

var T = new Twit({
  consumer_key:         'AqWPexHTFLiE4f11GKzQd8ERH',
  consumer_secret:      'VAteMcBl3ToXV9qpr7rd3zdnHokj1BXz6gApnnRBw5nV8H5bY4',
  access_token:         '11448242-1CCw7w00Psy4JwtPfqbFcsrY3v0BsysnQhPKKDB4n',
  access_token_secret:  'MIZPIbH7hOVvasWTK7jki7MqwgMRq2LWGTq9qReJOgJ4u',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'docker since:2016-05-15', count: 100 }, function(err, data, response) {
  console.log(data)
})
