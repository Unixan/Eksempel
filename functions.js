function viewTools() {
    clearAll();
    document.getElementById('toolsContent').innerHTML = /*HTML*/`
                <div class="innerCard">
                    <div>De to viktigste verktøyene vi kan bruke er disse:</div> 
                        <ul>
                            <li>
                                Koderedigeringsprogrammet <a href="https://code.visualstudio.com/" target="_new"> Visual Studio Code
                                </a>
                                <br />
                                Vi skal bruke noen extensions:
                                <ul>
                                    <li>JavaScript-booster</li>
                                    <li>es6-string-html</li>
                                    <li>live-server</li>
                                    <li>live-share</li>
                                </ul>
                            </li>
                            <li>
                                Nettlseren <a href="https://www.google.com/chrome/" target="_new">Google Chrome</a>
                            </li>
                        </ul>
                    </div >
                </div>    
                `}

function viewHTML() {
    clearAll();
    document.getElementById('htmlContent').innerHTML = /*HTML*/`
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument.
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a></a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a></li>
            </ul>
        </div>

`}
function viewCSS() {
    clearAll();
    document.getElementById('cssContent').innerHTML = /*HTML*/`
        <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                <li><tt><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></tt>
                </li>
                <li><tt><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></tt>
                </li>
                <li><tt><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS
                            Tutorial</a></tt>
                </li>
                <li><tt><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS
                            Reference</a></tt></li>
            </ul>
        </div>
`}
function viewJavaScript() {
    clearAll();
    document.getElementById('javaScriptContent').innerHTML = /*HTML*/`
    <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering ved
            å
            manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.
                </li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a>
                </li>
            </ul>
        </div>
`}
function viewHKB() {
    clearAll();
    document.getElementById('hkbContent').innerHTML = /*HTML*/`
        <div class="innerCard">
        <div>
            <button>◀</button>
            <img src="IMG/head1.png"/>
            <button>▶</button>
        </div>
        <div>
            <button>◀</button>
            <img src="IMG/body1.png"/>
            <button>▶</button>
        </div>
        <div>
            <button>◀</button>
            <img src="IMG/legs1.png"/>
            <button>▶</button>
        </div>
</div>
`}
function clearAll() {
    document.getElementById('toolsContent').innerHTML = "";
    document.getElementById('cssContent').innerHTML = "";
    document.getElementById('htmlContent').innerHTML = "";
    document.getElementById('javaScriptContent').innerHTML = "";
    document.getElementById('hkbContent').innerHTML = "";
}