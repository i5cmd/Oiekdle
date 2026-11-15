//import { useState } from 'react'
/* import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg' */
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Oiekdle - lista fajnych gier przeglądarkowych</h1>
      <div id="list">
        <GameTab name="Krillion" description='Przeglądarkowa gra quizowa, w której odpowiadasz na pytania, starając się wybierać jak najmniej oczywiste, ale poprawne odpowiedzi.' link="https://krillion.io/" />
        <GameTab name="Timeguessr" description='Gra geograficzna, w której musisz rozpoznać miejsce i przybliżony rok wykonania przedstawionego zdjęcia.' link="https://timeguessr.com/" />
        <GameTab name="Bandle" description='Muzyczna gra quizowa, w której musisz odgadnąć tytuł piosenki na podstawie kolejno odtwarzanych instrumentów i fragmentów utworu' link="https://bandle.app/menu" />
        <GameTab name="MapTap" description='Gra geograficzna, w której musisz wskazać na interaktywnym globusie 3D lokalizację pięciu miejsc' link="https://maptap.gg/" />
        <GameTab name="WikiFork" description='Gra logiczna oparta na Wikipedii, w której musisz połączyć dwie znane osoby za pomocą łańcucha innych postaci.' link="https://wikifork.com/" />
        <GameTab name="Searchle" description='Codzienna gra słowna inspirowana Wordle, w której musisz odgadnąć, jak Google automatycznie dokończy podane zapytanie.' link="https://searchle.net/" />
        <GameTab name="Minecraftle" description='Gra logiczna inspirowana Wordle, w której musisz odgadnąć ukrytą recepturę craftingu z Minecrafta, układając przedmioty na stole rzemieślniczym 3×3.' link="https://searchle.net/" />
        <GameTab name="Chess.com Daily Puzzle" description='Codzienna łamigłówka szachowa, w której musisz znaleźć najlepsze ruchy prowadzące zazwyczaj do mata lub zdobycia przewagi materialnej.' link="https://www.chess.com/daily" />
        <GameTab name="Foodguessr" description='Gra geograficzna, w której na podstawie zdjęcia potrawy musisz odgadnąć kraj, z którego pochodzi.' link="https://www.foodguessr.com/game/classic/singleplay" />
        <GameTab name="Year To Beat" description='Muzyczna gra quizowa, w której oglądasz pięć teledysków i próbujesz odgadnąć rok ich wydania.' link="https://yeartobeat.com/" />
        <GameTab name="Gamedle" description='Codzienna gra quizowa dla fanów gier wideo, w której musisz odgadnąć tytuł gry na podstawie początkowo mocno rozpikselizowanej okładki' link="https://www.gamedle.wtf/classic#" />
        <GameTab name="Size It Up: Geography" description='Codzienna gra geograficzna, w której musisz oszacować rzeczywiste rozmiary różnych obiektów geograficznych, takich jak państwa, jeziora, miasta czy cuda natury, dopasowując ich sylwetki do odpowiedniej skali.' link="https://magnitudle.com/size-it-up/geography" />
        <GameTab name="Globeiku" description='Codzienna gra geograficzna, w której musisz odgadnąć tajemniczy kraj na podstawie danych statystycznych, takich jak liczba ludności, PKB czy używane języki.' link="https://www.globeiku.com/" />
        <GameTab name="Paper Minecraft" description='Fanowska, dwuwymiarowa wersja Minecrafta, w której eksplorujesz świat, zbierasz surowce, kopiesz, craftujesz i budujesz.' link="https://turbowarp.org/10128407/fullscreen?interpolate&clones=Infinity&offscreen&limitless" />
        <GameTab name="Wikigacha" description='Gra kolekcjonerska, w której otwierasz wirtualne paczki z losowymi kartami przedstawiającymi artykuły z Wikipedii.' link="https://wikigacha.com/?lang=EN" />
        <GameTab name="MouseClick" description='Gra, w której na czas musisz złapać jak najwięcej mysz.' link="https://turbowarp.org/838855463/fullscreen?interpolate&clones=Infinity&offscreen&limitless" />
        <GameTab name="Pokemon Roulette" description='Przeglądarkowa gra przygodowa, w której losowe obroty ruletki decydują o przebiegu Twojej podróży Pokémon.' link="https://pokemon-roulette.zeroxm.com.br/" />
        <GameTab name="Combinations" description='Codzienna gra słowna, w której układasz angielskie słowa z dostępnych kafelków zawierających fragmenty wyrazów.' link="https://combinations.org/" />
        <GameTab name="TimeSwipe" description='Codzienna gra historyczna, w której musisz określić, czy przedstawione wydarzenie miało miejsce przed, czy po wskazanym roku.' link="https://play.timeswipe.fun/" />
        <GameTab name="SongSwipe" description='Codzienna gra muzyczna, w której określasz, czy zostały wydane przed, czy po podanym roku.' link="https://play.timeswipe.fun/" />
      </div>
    </>
  )
}

type Game = {
  name: string,
  description: string,
  link: string
}

function GameTab({name, description, link}: Game) {
  return (
  <>
  <div className="game">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  </div>
  </> );
}

export default App
