var quotes = [
	{
		"quote": "One of the most beautiful qualities of true friendship is to understand and to be understood.",
		"author": "Lucius Annaeus Seneca"
	},
	{ 
		"quote": "It is a rough road that leads to the heights of greatness.",
		"author": "Lucius Annaeus Seneca"	
	},
	{
		"quote": "As long as you live, keep learning how to live.",
		"author": "Lucius Annaeus Seneca"	
	},
	{
    'quote': 'You have power over your mind - not outside events. Realize this, and you will find strength.',
    'author':'Marcus Aurelius'
	  },
	  {
    'quote': 'The happiness of your life depends upon the quality of your thoughts.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Waste no more time arguing about what a good man should be. Be one.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'The best revenge is to be unlike him who performed the injury.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'If it is not right do not do it, if it is not true do not say it.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Reject your sense of injury and the injury itself disappears.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'You are a little soul carrying about a corpse, as Epictetus used to say.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Humans have come into being for the sake of each other, so either teach them, or learn to bear them.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Whoever does wrong, wrongs himself, whoever does injustice, does it to himself, making himself evil',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'If someone can prove me wrong and show me my mistake in any thought or action, I shall gladly change. I seek the truth, which never harmed anyone: the harm is to persist in one\'s own self-deception and ignorance.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'If you are pained by external things, it is not they that disturb you, but your own judgement of them. And it is in your power to wipe out that judgement now.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'A person\'s worth is measured by the worth of what he values.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'The happiness of those who want to be popular depends on others, the happiness of those who seek pleasure fluctuates with moods outside their control, but the happiness of the wise grows out of their own free acts.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'The art of living is more like wrestling than dancing, in so far as it stands ready against the accidental and the unforeseen, and is not apt to fall.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Neither worse then or better is a thing made by being praised.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'From the philosopher Catulus, never to be dismissive of a friend\'s accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.',
    'author':'Marcus Aurelius'
  },
  {
    'quote': 'Wealth consists not in having great possessions, but in having few wants.',
    'author':'Epictetus'
  },
  {
    'quote': 'Don\'t explain your philosophy. Embody it.',
    'author':'Epictetus'
  },
  {
    'quote': 'Man is not worried by real problems so much as by his imagined anxieties about real problems.',
    'author':'Epictetus'
  },
  {
    'quote': 'He who laughs at himself never runs out of things to laugh at.',
    'author':'Epictetus'
  },
  {
    'quote': 'Only the educated are free',
    'author':'Epictetus'
  },
  {
    'quote': 'Circumstances don\'t make the man, they only reveal him to himself.',
    'author':'Epictetus'
  },
  {
    'quote': 'It is impossible for a man to learn what he thinks he already knows.',
    'author':'Epictetus'
  },
  {
    'quote': 'I laugh at those who think they can damage me. They do not know who I am, they do not know what I think, they cannot even touch the things which are really mine and with which I live.',
    'author':'Epictetus'
  },
  {
    'quote': 'If evil be said of thee, and if it be true, correct thyself, if it be a lie, laugh at it.',
    'author':'Epictetus'
  },
  {
    'quote': 'Know you not that a good man does nothing for appearance sake, but for the sake of having done right?',
    'author':'Epictetus'
  },
  {
    'quote': 'Asked, Who is the rich man? Epictetus replied, He who is content.',
    'author':'Epictetus'
  }
];

function getNewQuote() {
	var randomQuoteIndex = Math.floor(Math.random() * (quotes.length - 0)) + 0;

	$(".quote").html("\"" + quotes[randomQuoteIndex].quote + "\"");
	$(".author").html("- " + quotes[randomQuoteIndex].author);

	// cahnge the href for the tweet button
	var newURL = (quotes[randomQuoteIndex].quote + " - " +quotes[randomQuoteIndex].author).split(' ').join('%20');
	console.log(newURL);

	$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+newURL);
}

$(document).ready(function(){

	getNewQuote();

	$("#new-quote-btn").on("click", function() {
		getNewQuote();
	});
});