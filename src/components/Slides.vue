<template>
  <slide id="Titel" data-auto-animate background="green">
    <h1 class="r-fit-text">
      Das politische und wirtschaftliche System in Rojava – <br> eine Utopie?
    </h1>
  </slide>
  <slide id="Gliederung" data-auto-animate background="green">
    <h1 class="r-fit-text">
      Das politische und wirtschaftliche System in Rojava – <br> eine Utopie?
    </h1>
    <div>
      <ol>
        <li> Was ist Rojava?
          <ol style="font-size: calc(var(--r-main-font-size) - 10px); list-style: upper-roman">
            <li> Überblick</li>
            <li> Geschichte</li>
          </ol>
        </li>
        <li> politisches System in Rojava
          <ol style="font-size: calc(var(--r-main-font-size) - 10px); list-style: upper-roman">
            <li> Gesellschaftsvertrag von Rojava</li>
            <li> Demokratischer Konföderalismus</li>
          </ol>
        </li>
        <li> wirtschaftliches System in Rojava</li>
        <li> eine Utopie für westliche Gesellschaften?</li>
        <li> Fazit & Meinung</li>
      </ol>
    </div>
  </slide>
  <slide id="Was ist Rojava" background="green">
    <h1>Was ist Rojava?</h1>
    <ul>
      <li>de-facto autonome Region im nordosten Syriens</li>
      <li>westlich des Tigris, östlich des Euphrats im sogenannten fruchtbaren Halbmond</li>
      <li>offiziell: Autonome Administration von Nord- und Ostsyrien</li>
      <li>entstand 2013 in folge des Bürgerkriegs</li>
      <li>4,6 Mio Einwohner*innen</li>
      <li>ethnisch sehr divers</li>
    </ul>
    <aside class="notes" data-markdown>
      <pre>
- de-facto autonome Region im nordosten Syriens
- Autonome Administration von Nord- und Ostsyrien, auch bekannt unter dem kurdischen Namen Rojava
- Gründung: 17. März 2016 als *Föderation Nordsyrien – Rojava*
- Regierungssitz: Qamishlo
- Einwohner: 4,6 Mio (Schätzung 2014) (viele unterschiedliche Zahlen)
- Ethnisch sehr divers: primär Kurdisch, Arabisch und Assyrisch aber auch kleineren Gemeinschaften von Turkmenen, Armeniern, Tscherkessen und Jesiden
- westlich des Tigris, östlich des Euphrats im sogenannten *fruchtbaren Halbmond*
      </pre>
    </aside>
    <img :src="require('@/assets/Emblem_of_the_Self_Administration_of_Northern_and_Eastern_Syria.svg')"
         style="width: 10vw; float: right; margin-top: -90px;">
  </slide>
  <MapComponent id="Karte"/>
  <slide id="geschichte" background="green">
    <h1>Geschichte</h1>
    <ul style="font-size: calc(var(--r-main-font-size) - 10px)">
      <li>Kurdistan durch (imperialistische) Grenzen geteilt</li>
      <li>Diskriminierung von allen Seiten</li>
      <li><b>12. Januar 2013:</b> mehrere Parteien beschließen gründung einer Übergangsverwaltung</li>
      <li><b>21./27. Januar 2014:</b> Etablierung der Verwaltung in Cizîrê, Kobanê und Efrîn</li>
      <li>YPG und YPJ (de-facto Armee) im Krieg gegen den IS</li>
      <li>Türkische invasion in Nordsyrien</li>

    </ul>
    <aside class="notes" data-markdown>
      <pre>
- Kurden größtes Volk ohne eigenem Land
- syrische Regierung gibt 2013 im laufe des Bürgerkriegs die Kontrolle über die Regionen an der Nordgrenze auf
- Kurdische kräfte übernahmen die Kontrolle
- YPG und YPJ (de-facto Armee) im Krieg gegen den IS
  - Sieg der YPG über Kobanê im September 2015
  - Allianz mit USA und anderen westlichen Staaten gegen den IS
- Türkische invasion in Nordsyrien
  - 3 Angriffskriege gegen Rojava
  - ethnische Säuberung gegen Kurden
  - aktuell wieder Drohungen bzw. Planung einer Offensive
      </pre>
    </aside>
  </slide>
  <section id="YPG Bild" :data-background-image="require('@/assets/original.jpg')"></section>
  <slide id="polSys" background="green">
    <slide id="Politisches System" background="green">
      <h1 class="r-fit-text">Politisches System in Rojava</h1>
      <ul>
        <li>Demokratischer Konföderalismus</li>
        <li>de-facto Verfassung: "Der Gesellschaftsvertrag der Demokratischen Föderation Nordsyrien"</li>
        <li>entwickelt von Abdullah Öcalan</li>
        <li>Kombiniert Aspekte des Anarchismus bzw. Anarcho-Kommunismus, Basisdemokratie und Ökologie</li>
      </ul>
    </slide>
    <slide id="GesellschaftsvertragQuote">
      <quote>
        Dieser Gesellschaftsvertrag stellt ein Beispiel für eine mögliches friedliches Syrien der Zukunft dar und gibt
        Hoffnung, dass eine demokratischen Alternative zur kapitalistischen Moderne und nationalstaatlicher Barbarei in
        die Welt ausstrahlen kann.
      </quote>
    </slide>
    <slide id="Gesellschaftsvertrag">
      <h1 class="r-fit-text">Gesellschaftsvertrag von Rojava</h1>
      Verankert Grundrechte und Prinzipien:
      <ul>
        <li> Hierarchielosigkeit</li>
        <li> Antinational</li>
        <li> Pluralistisch</li>
        <li> Radikale Demokratie</li>
        <li> Frauenbefreiung</li>
        <li> Ökologie</li>
        <li> Lokale Selbstverwaltung</li>
        <li> Recht auf medizinische Versorgung, Wohnraum und Arbeit</li>
      </ul>
      <img :src="require('@/assets/Coat_of_Arms_of_Rojava.svg')" style="width: 15vw; float: right; margin-top: -456px;">
      <aside class="notes" data-markdown>
        <pre>
- demoktratische und freie Wahlen (Artikel 3)
- umweltgerechte Ökologie, verbot von Monopolisierung (Artikel 11)
- Alle politischen Positionen sind von einem Mann und einer Frau belegt (Artikel 12)
- Erklärug zu der „Allgemeine Erklärung der Menschenrechte" (Artikel 17)
- Verbot der Todesstrafe (Artikel 18)
- Verbot der Folter (Artikel 19)
- > "Niemand darf wegen Hautfarbe, Geschlecht, Rasse, Religion oder Glauben beleidigt
oder ausgeschlossen werden." (Artikel 24)
- > "Gewalt gegen Frauen, ihre Ausbeutung und Diskriminierung gelten als Verbrechen und
werden nach dem Gesetz bestraft." (Artikel 25)
- Unschuldsvermutung (Artikel 28)
- Recht auf eine gesunde Umwelt (Artikel 32)
- Kostenfreie Bildung, in Grund und Mittelstufe Schulpflicht (Artikel 34)
- Medien-, Presse- und Verlagsfreiheit (Artikel 37)
- Asylrecht, verbot von Abschiebungen (Artikel 40)
- Ressourcen sind öffentliches Eigentum, ihr Nutzen wird durch Gesetze geregelt (Artikel 41)
- Investitionen müssen das ökologische Gleichgewicht berücksichtigen (Artikel 42)
- Rechte für Menschen mit Behinderungen (Artikel 45)
- Kinderrechte, verbot von Kinderarbeit und Ausbeutung (Artikel 46)
        </pre>
      </aside>
    </slide>
    <RäteSlide id="Räte"></RäteSlide>
    <slide id="demoKonfö" data-markdown>
      <pre>
### Demokratischer Konföderalismus

- entwikelt von Abdullah Öcalan und seiner Partei, die Arbeiterpartei Kurdistans (PKK)
  - Öcalan seit 1999 in Haft
  - PKK als Terrororganisation eingeordnet
  - "Führerkult" um Öcalan
  - Öcalan wandte sich vom Marxismus-Leninismus ab
  - Viel Inspiration von Murray Bookchin, einem amerikanischen Autor und (Öko-)Anarchist

notes:
- bietet einen Rahmen, in dem sich unter anderem Minderheiten, Religionsgemeinschaften, kulturelle Gruppen, geschlechtsspezifische Gruppen und andere gesellschaftliche Gruppen selbständig organisieren können.
- nichtstaatliches gesellschaftliches Paradigma
- Demokratie im nahem Osten aufbauen, ohne das diese von kapitalistischen & imperialistichen Mächten augezwungen wird
- Kombiniert Aspekte des Anarchismus bzw. Anarcho-Kommunismus, Basisdemokratie und Ökologie

      </pre>
    </slide>
  </slide>
  <slide id="Wirtschaft" background="green">
    <h1 class="r-fit-text">Wirtschaftssystem in Rojava </h1>
    <ul>
      <li>Privateigentum und Unternehmertum sind geschützt</li>
      <li>gemeinwirtschaftlich & genossenschaftlich
        <ul>
          <li>Gemeinwohl statt Gewinnstreben im Fokus</li>
          <li>Arbeiter*innen verwalten Unternehmen demokratisch</li>
        </ul>
      </li>
      <li>keine Steuern</li>
      <li>Einnahmen der Verwaltung aus Zöllen und Erdölförderung</li>
      <li>Abhängigkeiten bei Strom und Wasserversorgung</li>
    </ul>
    <aside class="notes" data-markdown>
      <pre>
- Privateigentum und Unternehmertum sind geschützt
- gemeinwirtschaftlich & genossenschaftlich
  - Gemeinwohl statt Gewinnstreben im Fokus
  - Arbeiter*innen verwalten Unternehmen demokratisch
  - > eine autonome Vereinigung von Personen, die sich freiwillig zusammengeschlossen haben, um ihre gemeinsamen wirtschaftlichen, sozialen und kulturellen Bedürfnisse und Bestrebungen durch ein Unternehmen in gemeinsamem Besitz zu erfüllen
- keine Steuern
- Einnahmen der Verwaltung aus Zöllen und Erdölförderung
- Abhängigkeiten bei Strom und Wasserversorgung
  - u.a. von der Türkei
- Ökologie spielt eine große Rolle in der Wirtschaft
- Produktion von Erdöl und Agrargütern übersteigt bedarf -> export
- totales Embargo der Türkei gegen Rojava
      </pre>
    </aside>
  </slide>
  <slide id="farmingPic">
    <img :src="require('@/assets/Farming.png')" style="height: 80vh; margin-top: -10px;">
    <aside class="notes" data-markdown>
      <pre>
        - Landwirtschaft spielt eine wichtige Rolle in Rojava
      </pre>
    </aside>
  </slide>
  <slide id="öko">
    <h1 class="r-fit-text">Ökologie, Gleichberichtigung und Wiederaufbau</h1>
    <ul>
      <li>einmalig im nahen Osten</li>
      <li>das brechen mit alten, patriachalen, autoritären Strukturen braucht Zeit</li>
      <li>Projekte der internationalistischen Kommune Rojavas:
        <ul>
          <li>Kampange: make rojava green again</li>
          <li> Wiederaufforstung</li>
          <li>community garden</li>
          <li>ökologische Landwirtschaft</li>
        </ul>
      </li>
    </ul>
  </slide>
  <slide id="KobanePic">
    <img :src="require('@/assets/kobane.jpg')" style="height: 80vh; margin-top: -10px;">
    <aside class="notes" data-markdown>
      <pre>
        - Wiederaufbau erfolgreich
        - eine der stabilsten und freiesten Regionen im nahen Osten
      </pre>
    </aside>
  </slide>
  <slide id="realität">
    <h1 class="r-fit-text">was macht die Realität?</h1>
    <ul>
      <li>Human Rights Watch wirft PYD und YPG Menschenrechtsverletzungen vor</li>
      <li>berichte über vertreibung von Arabern und Turkmenen</li>
      <li>Vorwürfe auch von Amnesty International</li>
      <li>Rojava ist immer noch Kriegsgebiet</li>
      <li>Führerkult</li>
    </ul>
    <aside class="notes" data-markdown>
      <pre>
        - Human Rights Watch wirft PYD und YPG Menschenrechtsverletzungen vor
        - berichte über vertreibung von Arabern und Turkmenen
        - Vorwürfe auch von Amnesty International, diese wurden allerdingd durch den UN-Menschenrechtsrat zrückgewiesen
        - Rojava ist immernoch Kriegsgebiet, deutlich ärmer als westliche länder, schlechtere Infrastruktur etc.
        - Führerkult
      </pre>
    </aside>
  </slide>
  <section :data-background-image="require('@/assets/TreeMap.png')">
    <h1 style="text-shadow: 4px 4px 15px #000;">Eine Utopie für westliche Gesellschaften?</h1>
    <aside class="notes" data-markdown>
      <pre>
(sehr subjektiv)

- weiterentwicklung der Ideen könnten ein zukunftsfähiges Modell für die Zukunft weltweit sein
- keine Klimagerechtigkeit im Kapitalismus
- Nationalstaatlichkeit kommt an seine Grenzen
- es wäre ein langer weg
- theorie vs praxis
- westen kann viel davon lernen
      </pre>
    </aside>
  </section>
  <section :data-background-image="require('@/assets/AKRose.png')">
    <h1 style="text-shadow: 4px 4px 15px #000;">Fazit & Meniung</h1>
    <aside class="notes" data-markdown>
      <pre>
- interessantes Projekt
- für mich ein wichtiger Punkt in meiner politisierung
  - demos gegen den Angriff 2019
- enttäsucht von BRD, NATO, USA
- für mich ist die Theorie eine Utopie
      </pre>
    </aside>
  </section>
  <section :data-background-image="require('@/assets/TreeGlobe.png')">
    <h1 style="text-shadow: 4px 4px 15px #000;">Danke fürs Zuhören!</h1>
  </section>
</template>

<script>
import MapComponent from "@/components/Map.vue";
import SingleSlide from "@/components/Slide.vue";
import quoteComponent from "@/components/quote";
import RäteSlide from "@/components/Räte.vue";

export default {
  name: "SlidesComponent",
  components: {
    MapComponent,
    slide: SingleSlide,
    quote: quoteComponent,
    RäteSlide
  },
}
</script>