var w = document.createElement('div');
w.style.position = 'absolute';
w.style.top = '0px';
w.style.left = '0px';
w.style.width = '100%';
w.style.height = '100%';
w.style.paddingTop = '100px';
w.style.backgroundColor = 'white';
w.style.textAlign = 'center';
w.style.fontFamily = 'Comic Sans MS';
w.style.fontSize = '32px';
document.body.appendChild(w);

var words = ('' + getSelection()).split(' ');
var wordCount = 0;

if (words.length > 0) showWord();

function showWord() {
	if (wordCount < words.length) {
		w.innerHTML = words[wordCount];
	} else {
		document.body.removeChild(w);
		return;
	}
	wordCount++;
	setTimeout(showWord, 200);
}
