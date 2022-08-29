function displayFR() {
    var x = document.getElementById("f-list");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displayNFR() {
    var x = document.getElementById("nf-list");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display_rate() {
    var hours = document.getElementById("input").value;
    document.getElementById("rate").innerText = (hours * 4) + "$";

}


function RenderList(frP, nfrP) {

    let fr, nfr;
    if (frP != null && nfrP != null) {
        fr = frP;
        nfr = nfrP;
    }

    if (frP == null) {
        fr = [
            "The user will submit a text string as a query to this unit.",
            "The unit will determine which words are crucial to the meaning of the text and replace them with generic equivalents that are preceded by an escape character.",
            "The sentence will be output by the unit as a string.",
            "If there is a mistake during this procedure, the generic inquiry couldn't be created correctly from the sentence. Send back a message saying, 'Sorry, I didn't understand it' in this situation.",
            "The system will provide an example question after the text with the API response if a question is not understood by our API.",
            "Following a user's input, the chatbot should be able to choose or generate a response  depending on that information and the conversation's context. The provided responses must make sense in the context inferred from the entry.",
            "The system will reply to the user with the solution as a second text message after sending the user's text to the API.",
            "A chat window on the GUI will show queries submitted to the system and API responses.",
            "There will be a textbox on the GUI that can be filled in using keyboard inputs.",
            "The 'Send' button on the GUI will, when clicked, send text from the textbox to the API.",
            "All of the queries and responses from the current session are displayed in the chat window, with a scroll bar available if necessary.",
            "The chat window will show an error message if there is a network issue.",
            "To prevent that small mistakes can affect the chatbot's comprehension, the application should activate the 'auto-correct' feature when a user inputs a spelling mistake or makes a sentence-level error.",
            "The chatbot should be coupled with a knowledge-based database and configured to swiftly retrieve information.",
            "The chatbot should be integrated with a database of PPC (Pakistan Penal Code) and Constitution , to answer queries accordingly",
            "Python will be utilised as the programming language.",
            "All data needed to provide answers will be kept in a MySQL database.",
            "Periodically, updates to the database will take place, and those updates will prevent access to the API.",
            "Although the chatbot has to understand English in order to function, it should be thought about expanding the languages that are now supported in the future.",
            "The administrator should be able to to add, update and delete questions, answers and keywords."
        ]
        shuffle(fr)
    }
    if (nfrP == null) {
        nfr = [
            "The database ought to be secured against intrusions and illegal access.",
            "For security, HTTPS will be used to establish the connection between the Web API and the apps.",
            "If exceptions do occur, they should be effectively reported to the user.",
            "The system must be scalable depending on how many people are utilising it.",
            "Our programme is fully independent of any network provider and can operate even when there is no internet connection. It can be used every day of the year, 24/7.",
            "The chatbot ought to be designed to function in the majority of server configurations.In light of this, a chatbot should be able to function in either server environment.",
            "The chatbot must be able to understand natural language within a certain domain and be able to determine the user input topic independently of the construction of the sentence.",
            "The chatbot should write answers more quickly than it would take a human to do so.",
            "Over the question testing set, the server will typically respond in less than or equal to 2 seconds.",
            "In order to efficiently address customer issues and obtain insights from pertinent data,the chatbot can acquire, interpret, and process massive amounts of data.",
            "User interfaces and experiences (UI / UX) must be carefully created.",
            "By examining interactions, chatbot software should constantly increase its own knowledge base.",

        ]

        shuffle(nfr)
    }

    const rootdivforFR = document.getElementById("root")
    const rootdivforNFR = document.getElementById("root1")

    rootdivforNFR.innerHTML = "<ul id='nfrlist'></ul>";
    rootdivforFR.innerHTML = "<ul id='frlist'></ul>";

    for (let i = 0; i < nfr.length; i++) {
        // rootdivforNFR.innerHTML += "<li>" + nfr[i] + "</li>"
        document.getElementById("nfrlist").innerHTML += "<li>" + "<a href='javascript://' id='nfrlink' onclick='alertMe(this)'>" + nfr[i] + "</a></li>";
    }

    for (let i = 0; i < fr.length; i++) {
        document.getElementById("frlist").innerHTML += "<li>" + "<a href='javascript://' id='frlink' onclick='alertMe(this)'>" + fr[i] + "</a></li>";

    }

    var ul = document.getElementById("nfrlist");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        if (items[i].checked = true) {
            items[i].style.color = "blue";
        };
    };

    var ul = document.getElementById("frlist");
    var items = ul.getElementsByTagName("li");
    var links = items.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
        if (items[i].checked = true) {
            items[i].style.color = "red";
            links[i].style.color = "red";
        };
    };





}

function shuffle(array) {

    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        console.log(Math.random);

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function sortList() {

    let nfr = [
        "User interfaces and experiences (UI / UX) must be carefully created.",
        "By examining interactions, chatbot software should constantly increase its own knowledge base.",
        "For security, HTTPS will be used to establish the connection between the Web API and the apps.",
        "If exceptions do occur, they should be effectively reported to the user.",
        "In order to efficiently address customer issues and obtain insights from pertinent data,the chatbot can acquire, interpret, and process massive amounts of data.",
        "Our programme is fully independent of any network provider and can operate even when there is no internet connection. It can be used every day of the year, 24/7.",
        "Over the question testing set, the server will typically respond in less than or equal to 2 seconds.",
        "The database ought to be secured against intrusions and illegal access.",
        "The system must be scalable depending on how many people are utilising it.",
        "The chatbot ought to be designed to function in the majority of server configurations.In light of this, a chatbot should be able to function in either server environment.",
        "The chatbot must be able to understand natural language within a certain domain and be able to determine the user input topic independently of the construction of the sentence.",
        "The chatbot should write answers more quickly than it would take a human to do so.",

    ]

    let fr = [
        "A chat window on the GUI will show queries submitted to the system and API responses.",
        "All of the queries and responses from the current session are displayed in the chat window, with a scroll bar available if necessary.",
        "All data needed to provide answers will be kept in a MySQL database.",
        "Although the chatbot has to understand English in order to function, it should be thought about expanding the languages that are now supported in the future.",
        "Following a user's input, the chatbot should be able to choose or generate a response  depending on that information and the conversation's context. The provided responses must make sense in the context inferred from the entry.",
        "If there is a mistake during this procedure, the generic inquiry couldn't be created correctly from the sentence. Send back a message saying, 'Sorry, I didn't understand it' in this situation.",
        "Periodically, updates to the database will take place, and those updates will prevent access to the API.",
        "Python will be utilised as the programming language.",
        "The user will submit a text string as a query to this unit.",
        "The unit will determine which words are crucial to the meaning of the text and replace them with generic equivalents that are preceded by an escape character.",
        "The sentence will be output by the unit as a string.",
        "The system will provide an example question after the text with the API response if a question is not understood by our API.",
        "The system will reply to the user with the solution as a second text message after sending the user's text to the API.",
        "The 'Send' button on the GUI will, when clicked, send text from the textbox to the API.",
        "The chat window will show an error message if there is a network issue.",
        "The chatbot should be coupled with a knowledge-based database and configured to swiftly retrieve information.",
        "The chatbot should be integrated with a database of PPC (Pakistan Penal Code) and Constitution , to answer queries accordingly",
        "The administrator should be able to to add, update and delete questions, answers and keywords.",
        "To prevent that small mistakes can affect the chatbot's comprehension, the application should activate the 'auto-correct' feature when a user inputs a spelling mistake or makes a sentence-level error.",
        "There will be a textbox on the GUI that can be filled in using keyboard inputs."
    ]

    fr.sort();
    nfr.sort();

    RenderList(fr, nfr)

}

function alertMe(element) {
    var count = element.innerText.length
    alert("Characters in this requirement are : " + count)
    alert.titl
}




function render() {
    alert("Page is loaded");
    }
    // Used to toggle the menu on small screens when clicking on the menu button
    function myFunction3() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    } else {
    x.className = x.className.replace(" w3-show", "");
    }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    var modal = document.getElementById('ticketModal');
    window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }
    
    
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }}
    
        function myFunction2() {
        var x = document.getElementById("myDIV2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
