//--------------------------------------- !! lvl tag musi byc taki sam dla itemu i jego ulepszen
var items = [
	new Item(1, 'Rękawice robocze', 2, 'Chronią przed obrażeniami.', 'rekawice.png', 1.14, "rekawice", 1),
	new Item(2, 'Nożyczki', 4, 'Pomocne podczas zbiorów. Umożliwiają odcinanie łodyg. ', 'nozyczki.png', 1.16, "nozyczki", 1),
	new Item(3, 'Scyzoryk', 8, 'Wielofunkcyjne narzędzie ułatwiające zbieranie papryki. ', 'scyzoryk.png', 1.2, "scyzoryk", 1, 2),
	new Item(4, 'Sierp', 25, 'Ostre narzędzie rolnicze. Był używany przez Panoramixa. ', 'sierp.png', 1.25, "sierp", 1, 3),
	new Item(5, 'Nóż do masła', 5, 'Praktyczny w życiu codziennym. ', 'noz_do_masla.png', 1.03, "noz", 1, 6),
	new Item(6, 'Piłka do metalu', 30, 'Przydatna do cięcia niewielkich metalowych przedmiotów ale nie tak praktyczna w zbieraniu papryki. ', 'pilka_do_metalu.png', 1.07, "pila", 1, 8),
	new Item(7, 'Szabla', 220, 'Była używana przez szlachtę do samoobrony i przekazywana z pokolenia na pokolenie. ', 'szabla.png', 1.12, "miecz", 1, 12),
	new Item(8, 'Bokken', 120, 'Drewniana katana do ćwiczeń. Niezbyt przydatna na polu papryki. ', 'bokken.png', 1.01, "katana", 1, 14),
	//new Item(9, 'Toporek awaryjny', 100, 'Przydatny do rozbijania szyb i innych materiałów w razie pożaru. Aby użyć rozbij szybkę.', 'bokken.png', 1.04, "topor", 1, 15),
];
var item_upgrades = [
	items[0],
	new Item(1, 'Rękawice wyścigowe', 10, 'Rękawice wzmocnione gumą. ', 'rekawice_wyscigowe.png', 1.25, "rekawice", 2),
	new Item(1, 'Rękawice spawalnicze', 18, 'Wysoki poziom ochrony rąk. ', 'rekawice_spawalnicze.png', 1.3, "rekawice", 3),
	items[1],
	new Item(2, 'Podstawowe sekatory', 8, 'Łatwo dostępne na bazarach czy też targach. ', 'podstawowe_sekatory.png', 1.30, "nozyczki", 2),
	new Item(2, 'Ulepszone sekatory', 14, 'Można je kupić w sklepach ogrodniczych. ', 'ulepszone_sekatory.png', 1.35, "nozyczki", 3),
	new Item(2, 'Zaawansowane sekatory', 20, 'High-endowe narzędzie ogrodnicze. ', 'zaawansowane_sekatory.png', 1.40, "nozyczki", 4),
	items[2],
	new Item(3, 'Zaawansowany scyzoryk', 40, 'Umożliwia między innymi łatwą nawigację na polu papryki dzięki wbudowanemu kompasowi, obcinanie paznokci czy też otwieranie szampana. ', 'zaawansowany_scyzoryk.png', 1.25, "scyzoryk", 2),
	new Item(3, 'Ultrascyzoryk', 500, 'Scyzoryk ten zawiera wszystkie możliwe opcje podcinania, stylizacji, wykrawania, modyfikacji, korekty czy komponowania papryki. ', 'ultrascyzoryk.png', 1.3, "scyzoryk", 3),
	items[3],
	new Item(4, 'Kosa', 35, 'Jeszcze ostrzejsze narzędzie rolnicze. ', 'kosa.png', 1.35, "sierp", 2),
	items[4],
	new Item(5, 'Nożyk do obierania', 6, 'Stosowany od wielu pokoleń w tej branży. Nieodłączny atrybut każdego paprykowego bossa. ', 'nozyk_do_obierania.png', 1.1, "noz", 2),
	new Item(5, 'Nożyk do styropianu', 10, 'Wielofunkcyjny, kompaktowy nożyk używany głównie w budowlance, ale znakomicie sprawuje się pod folią. ', 'nozyk_do_styropianu.png', 1.12, "noz", 3),
	new Item(5, 'Nóż kuchenny', 20, 'Spotykany w każdej kuchni polskiej gospodyni. ', 'noz_kuchenny.png', 1.2, "noz", 4),
	new Item(5, 'Nóż militarny', 60, 'Wzmocniony wojskowy nóż przydatny na polu... papryki. ', 'noz_wojskowy.png', 1.3, "noz", 5),
	new Item(5, 'Obieraczka', 666, 'Standardowa obieraczka znaleziona na bazarze. ', 'obieraczka.png', 1.66, "noz", 6),
	items[5],
	new Item(6, 'Piła', 50, 'Piła do drewna, ale bywa pomocna przy zbieraniu papryki. ', 'pila.png', 1.15, "pila", 2),
	new Item(6, 'Piła spalinowa', 800, 'Niezbyt poręczna podczas zbierania papryki, ale może się przydać w przypadku natrafienia na drzewo. ', 'pila_spalinowa.png', 1.32, "pila", 3),
	items[6],
	new Item(7, 'Miecz', 780, 'Pradawne narzędzie zbrodni. ', 'miecz.png', 1.18, "miecz", 2),
	new Item(7, 'Kordelas', 1100, 'Piracka szabla. Zaskakująco poręczna, dzięki czemu dobrze nadaje się do odcinania łodyg. ', 'kordelas.png', 1.3, "miecz", 3),
	new Item(7, 'Excalibur', 12000, 'Legendarny miecz światła. Król Artur otrzymał go od Pani Jeziora i po jego śmierci miał trafić z powrotem do jego rąk. Chyba nie pykło. ', 'excalibur.png', 1.5, "miecz", 4),
	new Item(7, 'Miecz świetlny', 90000, 'Używany przez Jedi, dzięki postępowi teraz dostępny również dla rąk zwykłego paroba. ', 'miecz_swietlny.png', 2, "miecz", 5),
	items[7],
	new Item(8, 'Katana', 1600, 'Prawdziwa broń ninja. W rękach doświadczonego paroba może czynić cuda. ', 'katana.png', 1.2, "katana", 2, 14),
	new Item(8, 'Tęczowa katana', 28000, 'Niezwykle rzadka wariacja katany. Posiada niespotykane właściwości. ', 'teczowa_katana.png', 1.3, "katana", 3, 14),
	//items[8],
];
