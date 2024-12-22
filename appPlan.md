# Assembly: Endgame App Plan

1- What are the main elements in this app?

```html
<main>
  <h1 />
  <p>
    <div class="messageToUser"/>
  </p>
  <ul class="languages">
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
     <li class="language" />
  </ul>

   <ol class="word" >
    li.wordLetter*word.length
    </ol>
    <div class="letters">
        <button class="letter" />
    </div>
   <button class="game-btn" />
</main>
```

2- what values need to be saved in state?

gameState = {isLetterInWord , isButtonPressed, tries=9,foundLetter, isGameWon}

3- what values need to be derived from state?

4- how the user will interact with the app?

by pressing the alphabet letters the press will hold the button if in word will turn green
if not will turn red and remove a language till 8 tries

5- what events do i need to handle?

letter buttons , new game
