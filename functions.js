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
                                Nettleseren <a href="https://www.google.com/chrome/" target="_new">Google Chrome</a>
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
function startHKB() {
    clearAll()
    document.getElementById('hkbContent').innerHTML = /*HTML*/`
            <div style="display:flex;" id="head" class="alignCenter"></div>
            <div style="display:flex;" id="body" class="alignCenter"></div>
            <div style="display:flex;" id="legs" class="alignCenter"></div>
            `
    changeHead1();
    changeBody1();
    changeLegs1();
}
function changeHead1() {
    document.getElementById('head').innerHTML = /*HTML*/` 
        <button onclick="changeHead4()">
        ◀
        </button>
                    <img src="IMG/head1.png">
        <button onclick="changeHead2()">
            ▶
        </button>
        `}
function changeHead2() {
    document.getElementById('head').innerHTML = /*HTML*/` 
        <button onclick="changeHead1()">
        ◀
        </button>
            <img src="IMG/head2.png"/>
        <button onclick="changeHead3()">
            ▶
        </button>
        `}
function changeHead3() {
    document.getElementById('head').innerHTML = /*HTML*/` 
        <button onclick="changeHead2()">
        ◀
        </button>
            <img src="IMG/head3.png"/>
        <button onclick="changeHead4()">
            ▶
        </button>
        `}
function changeHead4() {
    document.getElementById('head').innerHTML = /*HTML*/` 
        <button onclick="changeHead3()">
        ◀
        </button>
            <img src="IMG/head4.png"/>
        <button onclick="changeHead1()">
            ▶
        </button>
        `}
function changeBody1() {
    document.getElementById('body').innerHTML = /*HTML*/` 
        <button onclick="changeBody4()">
        ◀
        </button>
            <img src="IMG/body1.png"/>
        <button onclick="changeBody2()">
            ▶
        </button>
        `}
function changeBody2() {
    document.getElementById('body').innerHTML = /*HTML*/` 
        <button onclick="changeBody1()">
        ◀
        </button>
            <img src="IMG/body2.png"/>
        <button onclick="changeBody3()">
            ▶
        </button>
        `}
function changeBody3() {
    document.getElementById('body').innerHTML = /*HTML*/` 
        <button onclick="changeBody2()">
        ◀
        </button>
            <img src="IMG/body3.png"/>
        <button onclick="changeBody4()">
            ▶
        </button>
        `}
function changeBody4() {
    document.getElementById('body').innerHTML = /*HTML*/` 
        <button onclick="changeBody3()">
        ◀
        </button>
            <img src="IMG/body4.png"/>
        <button onclick="changeBody1()">
            ▶
        </button>
        `}
function changeLegs1() {
    document.getElementById('legs').innerHTML = /*HTML*/` 
        <button onclick="changeLegs4()">
        ◀
        </button>
            <img src="IMG/legs1.png"/>
        <button onclick="changeLegs2()">
            ▶
        </button>
        `}
function changeLegs2() {
    document.getElementById('legs').innerHTML = /*HTML*/` 
        <button onclick="changeLegs1()">
        ◀
        </button>
            <img src="IMG/legs2.png"/>
        <button onclick="changeLegs3()">
            ▶
        </button>
        `}
function changeLegs3() {
    document.getElementById('legs').innerHTML = /*HTML*/` 
        <button onclick="changeLegs2()">
        ◀
        </button>
            <img src="IMG/legs3.png"/>
        <button onclick="changeLegs4()">
            ▶
        </button>
        `}
function changeLegs4() {
    document.getElementById('legs').innerHTML = /*HTML*/` 
        <button onclick="changeLegs3()">
        ◀
        </button>
            <img src="IMG/legs4.png"/>
        <button onclick="changeLegs1()">
            ▶
        </button>
        `}



function clearAll() {
    document.getElementById('toolsContent').innerHTML = "";
    document.getElementById('cssContent').innerHTML = "";
    document.getElementById('htmlContent').innerHTML = "";
    document.getElementById('javaScriptContent').innerHTML = "";
    document.getElementById('hkbContent').innerHTML = "";
}