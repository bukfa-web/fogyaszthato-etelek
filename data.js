const initialFoodData = [
  {
    "name": "Áfonya",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, szezonálisan kis mennyiségben"
  },
  {
    "name": "Agvé",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, káros a bélflórára"
  },
  {
    "name": "Ajóka",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, támogatja a szív egészségét"
  },
  {
    "name": "Alakor (einkorn búza)",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt gyulladáskeltő"
  },
  {
    "name": "Alaszkai laposhal",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Alacsony higanytartalom, omega-3-ban gazdag"
  },
  {
    "name": "Alaszkai lazac",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Magas omega-3, gyulladáscsökkentő hatás"
  },
  {
    "name": "Alga olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Növényi omega-3 forrás, szívbarát"
  },
  {
    "name": "Alma",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, szezonálisan kis mennyiségben"
  },
  {
    "name": "Amerikai kelkáposzta",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminokban gazdag, méregtelenítő"
  },
  {
    "name": "Ananász",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Antilop",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Árpa",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma bélproblémákat okozhat, nem lehet kuktában főzni, hogy csökkentse a lektintartalmat – Dr. Balsai a gabonaféléket kerüli"
  },
  {
    "name": "Articsóka",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, májtámogató"
  },
  {
    "name": "Avokádó",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsírok, korlátozás nélkül fogyasztható"
  },
  {
    "name": "Avokádóolaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, gyulladáscsökkentő, főzéshez ideális – Dr. Balsai a természetes olajokat ajánlja"
  },
  {
    "name": "Ázsiai gombák (shiitake)",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, immunerősítő, alacsony szénhidráttartalom – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Babérlevél",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, természetes ízesítő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Banán (érett)",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Baobab (majomkenyérfa gyümölcs)",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Barack",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Bárány",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Fehérjeforrás, napi 110 g ajánlott"
  },
  {
    "name": "Barna rizs",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Bazsalikom",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, immunerősítő – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Berly Breadtól Julian Bakery Paleo",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes pékáru, mértékkel"
  },
  {
    "name": "Bivaly mozzarella",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g ajánlott"
  },
  {
    "name": "Bivaly vaj",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 300 g ajánlott"
  },
  {
    "name": "Bok choy",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminokban gazdag, alacsony lektintartalom, méregtelenítő – Dr. Balsai a zöld leveles zöldségeket ajánlja"
  },
  {
    "name": "Bolti müzliszelet",
    "group": "Feldolgozott ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Gyakran tartalmaz cukrot, gabonát és mesterséges adalékanyagokat, gyulladást keltő – Dr. Balsai a feldolgozott ételek kerülését javasolja"
  },
  {
    "name": "Bor",
    "group": "Bor",
    "recommendation": "Igen Kérek",
    "note": "Polifenolok, napi 2 dl vörösbor ajánlott"
  },
  {
    "name": "Borsó",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt vegánok kuktában főzve ehetik"
  },
  {
    "name": "Bölény",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g ajánlott"
  },
  {
    "name": "Brazil dió (korlátozott meny.)",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Szelénforrás, napi 1/2 bögre"
  },
  {
    "name": "Brokkoli",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, antioxidánsokban gazdag"
  },
  {
    "name": "Bulgur",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma gyulladáskeltő"
  },
  {
    "name": "Burgonya Burgonya csipsz",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Glikoalkaloidok miatt kerülendő"
  },
  {
    "name": "Búza Sweet n Low (szaharin)",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom és mesterséges édesítő"
  },
  {
    "name": "Búzafű",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt nem ajánlott"
  },
  {
    "name": "Capello s fettuccine tészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva"
  },
  {
    "name": "Cékla Nyers",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, antioxidánsokban gazdag"
  },
  {
    "name": "Chaga gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, immunerősítő – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Chia mag",
    "group": "Diófélék és Magok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Bár növényi omega-3 forrás, lektintartalma miatt bélproblémákat okozhat – Dr. Balsai a lektintartalmú ételek kerülését javasolja"
  },
  {
    "name": "Chiamag",
    "group": "Diófélék és Magok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma bélproblémákat okozhat"
  },
  {
    "name": "Cikória",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, bélbarát"
  },
  {
    "name": "Cikória gyökérből inulin",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Bélflóra támogató, természetes édesítő"
  },
  {
    "name": "Citrom (héj nélkül)",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "C-vitamin forrás, de a héj lektintartalma miatt kerülendő, szezonálisan kis mennyiségben – Dr. Balsai a mértékletességet javasolja"
  },
  {
    "name": "Citrusfélék nem léformában",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Cukkini",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Cukor",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Gyulladást kiváltó, bélkárosító"
  },
  {
    "name": "Cukorborsó",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt vegánok kuktában főzve ehetik"
  },
  {
    "name": "Cukormentes rágók",
    "group": "Édességek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges édesítőket (pl. aszpartám, szacharin) tartalmaznak, amelyek károsak a bélflórára – Dr. Balsai a mesterséges édesítőket elutasítja"
  },
  {
    "name": "Cukros üdítők",
    "group": "Italok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas cukortartalom, káros a bélflórára és az anyagcserére – Dr. Balsai a mesterséges italok kerülését javasolja"
  },
  {
    "name": "Csicseriborsó",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt vegánok kuktában főzve ehetik"
  },
  {
    "name": "Csillagánizs",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidáns hatású, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Csiperke gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, alacsony szénhidrát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Csíráztatott Gabonák",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom még csíráztatva is jelen van"
  },
  {
    "name": "Csirke",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású fehérjeforrás, napi 200 g"
  },
  {
    "name": "Csirkehús",
    "group": "Húsok",
    "recommendation": "Igen Kérek",
    "note": "Feldolgozatlan, sovány fehérjeforrás, alacsony szénhidráttartalom, illik a módosított paleo étrendbe – Dr. Balsai a természetes húsokat javasolja"
  },
  {
    "name": "Csodatészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Csontleves (szabadtartású állatokból)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Tápanyagban gazdag, bélflóra támogató, kollagén forrás – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Datolya",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Természetes cukor, szezonálisan kis mennyiségben"
  },
  {
    "name": "DatolyaszilvaűJicama",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Dinnyefélék az összes",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák"
  },
  {
    "name": "Dió",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, napi 1/2 bögre"
  },
  {
    "name": "Dióolaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, gyulladáscsökkentő"
  },
  {
    "name": "Ecetek",
    "group": "Ecetek",
    "recommendation": "Igen Kérek",
    "note": "Cukormentes, bélbarát"
  },
  {
    "name": "Édesburgonya",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Édesburgonya Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva"
  },
  {
    "name": "Endívia",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, bélbarát – Dr. Balsai a zöld leveles zöldségeket javasolja"
  },
  {
    "name": "Energiaitalok",
    "group": "Italok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas cukor- és mesterséges édesítőtartalom, káros a bélflórára – Dr. Balsai a mesterséges italok kerülését javasolja"
  },
  {
    "name": "Enoki gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Bélbarát, alacsony szénhidrát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Eper",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsok, szezonálisan kis mennyiségben"
  },
  {
    "name": "Eritrit (oligoszacharidokat is tartalmaz)",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Alacsony glikémiás, bélbarát"
  },
  {
    "name": "Étcsokoládé",
    "group": "Étcsokoládé",
    "recommendation": "Igen Kérek",
    "note": "90%-os, polifenolokban gazdag, gyulladáscsökkentő, napi 30 g ajánlott – Dr. Balsai a természetes antioxidánsokat ajánlja"
  },
  {
    "name": "Fácán Nyírfad Galamb Fürj",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 200 g"
  },
  {
    "name": "Fagyasztott joghurt",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazein, gyulladáskeltő"
  },
  {
    "name": "Fagyasztott péksütemények",
    "group": "Feldolgozott ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Gabonát és mesterséges adalékanyagokat tartalmaz, gyulladást keltő – Dr. Balsai a gabonaféléket és feldolgozott ételeket elutasítja"
  },
  {
    "name": "Fagylalt",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazein, bélkárosító"
  },
  {
    "name": "Fagylalt fagyasztott desszertek",
    "group": "Fagylalt (tejtermék mentes)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes"
  },
  {
    "name": "Fahéj",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Vércukorszint-szabályozó, gyulladáscsökkentő – Dr. Balsai a természetes ízesítőket ajánlja"
  },
  {
    "name": "Farcia vagy Olasz vaj",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Fehér kenyér",
    "group": "Gabonafélék",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított szénhidrát, magas glikémiás index, gyulladást okozhat – Dr. Balsai a gabonaféléket a módosított paleo étrendben kerüli"
  },
  {
    "name": "Fehér rizs",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Fehérrépa",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Fejes saláta",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Alacsony lektintartalom, bélbarát – Dr. Balsai a zöld leveles zöldségeket javasolja"
  },
  {
    "name": "Fekete bors",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, emésztést támogató, mértékkel használva bélbarát – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Fekete retek",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, vitaminforrás – Dr. Balsai a keresztesvirágú zöldségeket ajánlja"
  },
  {
    "name": "Fekete tea (cukormentes)",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, mértékkel – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Feldolgozott húskészítmények (pl. bolti virsli)",
    "group": "Hús (feldolgozott)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges adalékanyagokat tartalmaz, gyulladást keltő – Dr. Balsai a feldolgozatlan húsokat ajánlja"
  },
  {
    "name": "Feldolgozott sajtok (pl. ömlesztett sajt)",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges adalékanyagokat tartalmaz, A1 kazein alapú, gyulladást keltő – Dr. Balsai a természetes tejtermékeket ajánlja"
  },
  {
    "name": "Fenyőmag (korlátozott meny)",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 1/2 bögre"
  },
  {
    "name": "Fésűkagyló",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony higany"
  },
  {
    "name": "Fokhagyma",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, immunerősítő"
  },
  {
    "name": "Földimogyoró",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, vegánok kuktában főzve"
  },
  {
    "name": "Földimogyoró olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Füge",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Rostforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Fügekaktuszok",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsok, alacsony lektintartalom"
  },
  {
    "name": "Fürjtojás",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, max 6 db/nap – Dr. Balsai a természetes tojásokat ajánlja"
  },
  {
    "name": "Fűszerek és Gyógynövények",
    "group": "Fűszerek és Gyógynövények",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő hatásúak, kivéve a chilipehely, amelyet Dr. Balsai a lektintartalom miatt kerüli"
  },
  {
    "name": "Garnéla rák",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, sovány fehérje"
  },
  {
    "name": "Gesztenye",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Ellenálló keményítő, napi 1/2 bögre"
  },
  {
    "name": "Ghi",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Tisztított vaj, napi 300 g"
  },
  {
    "name": "Glucoannan (konjac gyökér ördögnyelv)",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Gluténtartalmú pékáruk (pl. croissant)",
    "group": "Feldolgozott ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Gabona alapú, lektintartalom, gyulladást keltő – Dr. Balsai a gabonaféléket elutasítja"
  },
  {
    "name": "Gojibogyó",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma gyulladáskeltő"
  },
  {
    "name": "Gombák",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, alacsony szénhidrát"
  },
  {
    "name": "Gránátalma",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Polifenolok, szezonálisan kis mennyiségben"
  },
  {
    "name": "Gyömbér",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Gyömbéres kombucha",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Fermentált, probiotikumokban gazdag, bélflóra támogató – Dr. Balsai a bélbarát italokat javasolja"
  },
  {
    "name": "Gyümölcslevek (cukrozott)",
    "group": "Italok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas cukortartalom, káros a bélflórára és az anyagcserére – Dr. Balsai a mesterséges italok kerülését javasolja"
  },
  {
    "name": "Gyümölcsös smoothie (cukor hozzáadása nélkül)",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Szezonális gyümölcsökből, cukormentes, mértékkel – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Hagyma",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, gyulladáscsökkentő"
  },
  {
    "name": "Hajdina",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Halolaj kapszula",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, támogatja a szív- és érrendszeri egészséget – Dr. Balsai az omega-3 fontosságát kiemeli"
  },
  {
    "name": "Hawaii hal",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony higany"
  },
  {
    "name": "Házi joghurt (kecske- vagy juhalapú)",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, bélflóra támogató, A2 kazein alapú, napi 300 g ajánlott – Dr. Balsai a kecske- vagy juhalapú tejtermékeket ajánlja"
  },
  {
    "name": "Hering",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Magas omega-3 tartalom, támogatja a szív- és érrendszeri egészséget, alacsony higanytartalom – Dr. Balsai az omega-3 forrásokat kiemeli"
  },
  {
    "name": "Hibiszkusz tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, gyulladáscsökkentő – Dr. Balsai a természetes italokat ajánlja"
  },
  {
    "name": "Homár",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, omega-3-ban gazdag"
  },
  {
    "name": "Hüvelyesek",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, vegánok kuktában főzve"
  },
  {
    "name": "Instant levesporok",
    "group": "Feldolgozott ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges adalékanyagokat és magas sótartalmat tartalmaz, gyulladást keltő – Dr. Balsai a feldolgozott ételek kerülését javasolja"
  },
  {
    "name": "Inulin",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rost, bélbarát"
  },
  {
    "name": "Ízesített csukamájolaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 és D-vitamin forrás"
  },
  {
    "name": "Jávorszarvas",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Jégcsapretek",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, alacsony lektintartalom"
  },
  {
    "name": "Jeruzsálemi articsóka",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, bélbarát"
  },
  {
    "name": "Joghurt Görög joghurt is",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazein, gyulladáskeltő"
  },
  {
    "name": "Juh alapú túró",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, probiotikumokban gazdag, napi 300 g – Dr. Balsai a juh alapú tejtermékeket javasolja"
  },
  {
    "name": "Juhsajt (érlelt)",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, probiotikumokban gazdag, napi 300 g – Dr. Balsai a juh alapú tejtermékeket javasolja"
  },
  {
    "name": "Just Like Sugar",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Cikóriagyökér alapú, alacsony glikémiás"
  },
  {
    "name": "Kacsa",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Fehérjeforrás, napi 200 g"
  },
  {
    "name": "Kacsa tojás",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, max 4 db/nap – Dr. Balsai a természetes tojásokat ajánlja"
  },
  {
    "name": "Kagyló",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 és ásványi anyagok forrása"
  },
  {
    "name": "Kajszibarack",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Kakaópor (cukormentes, 100% kakaó)",
    "group": "Ételek (módosított paleo)",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, gyulladáscsökkentő, cukormentes – Dr. Balsai a természetes antioxidánsokat ajánlja"
  },
  {
    "name": "Kakukkfű",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, immunerősítő, természetes ízesítő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Kakukkfű olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, természetes ízesítő – Dr. Balsai a természetes olajokat ajánlja"
  },
  {
    "name": "Kamilla tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Nyugtató, gyulladáscsökkentő – Dr. Balsai a természetes italokat ajánlja"
  },
  {
    "name": "Kamut",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Kanten tészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Kapor",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Kapor mag",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Kaporlevél",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Kaporos uborkasaláta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, frissítő, bélbarát – Dr. Balsai a természetes zöldségeket javasolja"
  },
  {
    "name": "Kardamom",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Emésztést támogató, antioxidáns hatású – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Karfiol",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, alacsony szénhidrát"
  },
  {
    "name": "Kashi",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt gyulladáskeltő"
  },
  {
    "name": "Kasszava (tápióka)",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel fogyasztható"
  },
  {
    "name": "Kasszava Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva sütéshez"
  },
  {
    "name": "Kaviár",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Magas omega-3 tartalom, ásványi anyagokban gazdag, támogatja a szív egészségét – Dr. Balsai a természetes haltermékeket ajánlja"
  },
  {
    "name": "Kazein A-2-es tej csak tejszínként",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g tejszínként"
  },
  {
    "name": "Kecske alapú tejszínhab",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, cukormentes, napi 300 g – Dr. Balsai a kecske alapú tejtermékeket ajánlja"
  },
  {
    "name": "Kecske vaj",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, A2 kazein, napi 300 g – Dr. Balsai a kecske alapú tejtermékeket javasolja"
  },
  {
    "name": "Kecske- és Juhkefir",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, bélflóra támogató, A2 kazein, napi 300 g ajánlott – Dr. Balsai a kecske- vagy juhalapú tejtermékeket javasolja"
  },
  {
    "name": "Kecskesjoghurt",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g ajánlott"
  },
  {
    "name": "Kecsketej alapú fagylalt",
    "group": "Fagylalt",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, cukormentes, napi 300 g – Dr. Balsai a kecske alapú tejtermékeket ajánlja"
  },
  {
    "name": "Kecsketej alapú tejeskávé",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, cukormentes, mértékkel – Dr. Balsai a kecske alapú tejtermékeket ajánlja"
  },
  {
    "name": "Kecsketej alapú túró",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, könnyen emészthető, napi 300 g – Dr. Balsai a kecske alapú tejtermékeket ajánlja"
  },
  {
    "name": "Kecsketej Kecskesajt",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Könnyebben emészthető, napi 300 g"
  },
  {
    "name": "Kefires Gabonák",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Kék kagyló",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, ásványi anyagokban gazdag"
  },
  {
    "name": "Kekszek",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított szénhidrát, bélkárosító"
  },
  {
    "name": "Kelbimbó",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, méregtelenítő"
  },
  {
    "name": "KelkáposztaűFehér és Vörös káposzta",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, bélbarát"
  },
  {
    "name": "Kender fehérje por",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Növényi fehérje, napi 1/2 bögre"
  },
  {
    "name": "Kendermag",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, napi 1/2 bögre"
  },
  {
    "name": "Kenguru",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Kenyér",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom és finomított szénhidrát"
  },
  {
    "name": "Kenyér és bagettek",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva, mértékkel"
  },
  {
    "name": "Kesudió",
    "group": "Diófélék és Magok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma bélproblémákat okozhat"
  },
  {
    "name": "Kesudió alapú tej (cukormentes)",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, napi 1/2 bögre – Dr. Balsai a növényi tejeket mértékkel ajánlja"
  },
  {
    "name": "Kimcsi",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Fermentált, bélflóra támogató"
  },
  {
    "name": "Kínai spenót",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Ásványi anyagokban gazdag, gyulladáscsökkentő – Dr. Balsai a zöld leveles zöldségeket ajánlja"
  },
  {
    "name": "Kivi",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "C-vitamin forrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Kókusz alapú granola",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, mértékkel – Dr. Balsai a paleo-barát alternatívákat javasolja"
  },
  {
    "name": "Kókusz alapú joghurtital",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, cukormentes, bélbarát – Dr. Balsai a bélflóra támogató italokat javasolja"
  },
  {
    "name": "Kókusz alapú kefir",
    "group": "Tejtermékek (növényi)",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, bélbarát, napi 300 g – Dr. Balsai a bélflóra támogató ételeket javasolja"
  },
  {
    "name": "Kókusz alapú mascarpone",
    "group": "Tejtermékek (növényi)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, desszertekhez ideális, napi 300 g – Dr. Balsai a növényi alternatívákat mértékkel javasolja"
  },
  {
    "name": "Kókusz alapú sajt",
    "group": "Tejtermékek (növényi)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, napi 300 g – Dr. Balsai a növényi alternatívákat mértékkel ajánlja"
  },
  {
    "name": "Kókusz alapú smoothie",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Cukormentes, lektinmentes, bélbarát, mértékkel – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Kókusz alapú tejeskávé",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Cukormentes, lektinmentes, mértékkel – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Kókusz alapú tejszínhab",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Cukormentes, lektinmentes, mértékkel – Dr. Balsai a paleo-barát alternatívákat javasolja"
  },
  {
    "name": "Kókusz alapú túró",
    "group": "Tejtermékek (növényi)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, bélbarát alternatíva, napi 300 g – Dr. Balsai a növényi tejtermékeket mértékkel javasolja"
  },
  {
    "name": "Kókusz Fagylalt max 1gr cukor",
    "group": "Fagylalt",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, max 1 g cukorral"
  },
  {
    "name": "Kókusz Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Kókuszaminosav (szójaszósz helyett)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szójaszósz paleo-barát alternatívája, lektinmentes – Dr. Balsai a természetes ízesítőket ajánlja"
  },
  {
    "name": "Kókuszdió Nem kókusz víz",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 1/2 bögre"
  },
  {
    "name": "Kókuszjoghurt",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Növényi alapú, napi 300 g"
  },
  {
    "name": "Kókuszlisztes müzli",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, mértékkel"
  },
  {
    "name": "Kókusztej Édesítetlen tejtermékpótló",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Napi 1/2 bögre, cukormentes"
  },
  {
    "name": "Kókusztejszín édesítetlen",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 1/2 bögre"
  },
  {
    "name": "Kókuszvíz (cukormentes)",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Hidratáló, de kis mennyiségű fruktózt tartalmaz, mértékkel fogyasztható – Dr. Balsai a természetes italokat javasolja mértékkel"
  },
  {
    "name": "Kombucha",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Fermentált ital, probiotikumokban gazdag, bélflóra támogató – Dr. Balsai a bélbarát ételeket javasolja"
  },
  {
    "name": "Konzerv tonhal",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony higany"
  },
  {
    "name": "Koriander",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, méregtelenítő"
  },
  {
    "name": "Koriandermag",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Emésztést támogató, gyulladáscsökkentő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Köles Cirok",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Kömény",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Köménymag",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Emésztést támogató, gyulladáscsökkentő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Kukorica",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas lektintartalom, gyulladáskeltő"
  },
  {
    "name": "Kukorica keményítő",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított, bélkárosító"
  },
  {
    "name": "Kukorica olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Kukorica szirup",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, káros"
  },
  {
    "name": "Kukoricaliszt (pl. polenta)",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas lektintartalom, gyulladást keltő – Dr. Balsai a gabonaféléket a módosított paleo étrendben kerüli"
  },
  {
    "name": "Kukoricás termékek",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Kurkuma",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő (kurkumin), támogatja az immunrendszert – Dr. Balsai a természetes gyulladáscsökkentőket ajánlja"
  },
  {
    "name": "Laskagomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Lazac",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Magas omega-3 tartalom, gyulladáscsökkentő, támogatja a szív- és érrendszeri egészséget – Dr. Balsai az omega-3 forrásokat kiemeli"
  },
  {
    "name": "Lenmag",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, napi 1/2 bögre"
  },
  {
    "name": "Lenmagolaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, gyulladáscsökkentő, mértékkel – Dr. Balsai az omega-3 tartalmú olajokat kiemeli"
  },
  {
    "name": "Lestyán",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Liba",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Fehérjeforrás, napi 200 g"
  },
  {
    "name": "Licsi",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Light italok",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges édesítők, káros"
  },
  {
    "name": "Liszt",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított szénhidrát, bélkárosító"
  },
  {
    "name": "Luo hanguo (Nutresse márka jó)",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Természetes édesítő, Nutresse ajánlott"
  },
  {
    "name": "Madársaláta",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, alacsony lektintartalom – Dr. Balsai a zöld leveles zöldségeket javasolja"
  },
  {
    "name": "Maitake gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, gyulladáscsökkentő – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Majoránna",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidáns hatású, természetes ízesítő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Mák",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony lektintartalom, mértékkel fogyasztható, napi 1/2 bögre – Dr. Balsai az omega-3 forrásokat ajánlja"
  },
  {
    "name": "Makadámdió",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Omega-7 forrás, napi 1/2 bögre"
  },
  {
    "name": "Makadámdió-olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, gyulladáscsökkentő"
  },
  {
    "name": "Makréla",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 zsírsavakban gazdag, D-vitamin forrás, támogatja a csontok és az immunrendszer egészségét – Dr. Balsai a halak fogyasztását javasolja"
  },
  {
    "name": "Makrélapástétom",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, lektinmentes, frissen készítve – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Málna",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, szezonálisan"
  },
  {
    "name": "Maltodextrin",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Gyorsan felszívódó szénhidrát"
  },
  {
    "name": "Manchego sajt",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "Juh alapú, A2 kazein, napi 300 g – Dr. Balsai a juh alapú tejtermékeket ajánlja"
  },
  {
    "name": "Mandula alapú tej (cukormentes)",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, napi 1/2 bögre – Dr. Balsai a növényi tejeket mértékkel ajánlja"
  },
  {
    "name": "Mandula Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Mangó (érett)",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Mángold",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, bélbarát"
  },
  {
    "name": "Maréna Édesvízi sügér",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, napi 60-120 g"
  },
  {
    "name": "Margarin",
    "group": "Zsírok (feldolgozott)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Transzzsírokat tartalmaz, gyulladást keltő – Dr. Balsai a természetes zsírokat (pl. kókuszolaj) ajánlja"
  },
  {
    "name": "Marhahús",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Matcha tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban (katekin) gazdag, gyulladáscsökkentő, támogatja az anyagcserét – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Meggy",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsok, szezonálisan kis mennyiségben"
  },
  {
    "name": "Mesterséges aromák (pl. vanília aroma)",
    "group": "Feldolgozott ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges adalékanyag, káros lehet a bélflórára – Dr. Balsai a mesterséges adalékanyagokat elutasítja"
  },
  {
    "name": "Mesterséges édesítőszerek (pl. maltitol)",
    "group": "Édesítők",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges adalékanyag, káros a bélflórára – Dr. Balsai a mesterséges édesítőket elutasítja"
  },
  {
    "name": "Méz",
    "group": "Édesítők",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, káros lehet a bélflórára nagy mennyiségben, mértékkel fogyasztható – Dr. Balsai a magas fruktóztartalmú ételek kerülését javasolja"
  },
  {
    "name": "Minden babféle a csírák is",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Minden lencse",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Miso leves",
    "group": "Zöldségek (fermentált)",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, bélflóra támogató, lektinmentes, ha megfelelően fermentált – Dr. Balsai a bélbarát ételeket javasolja"
  },
  {
    "name": "Mizuna",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, alacsony lektintartalom, bélbarát – Dr. Balsai a zöld leveles zöldségeket javasolja"
  },
  {
    "name": "Mogyoró",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 1/2 bögre"
  },
  {
    "name": "Mogyoró Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva sütéshez"
  },
  {
    "name": "Mogyoróhagyma",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, gyulladáscsökkentő"
  },
  {
    "name": "Mu-err gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, alacsony szénhidrát, bélbarát – Dr. Balsai a természetes zöldségeket javasolja"
  },
  {
    "name": "Mustármag",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, természetes ízesítő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Müzli",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom és finomított szénhidrát"
  },
  {
    "name": "Napa káposztaűKínai kel",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, méregtelenítő"
  },
  {
    "name": "Napraforgó olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Napraforgómag",
    "group": "Diófélék és Magok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Nektarin",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Nutraweet (aszpartan)",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges édesítő, káros"
  },
  {
    "name": "Nyers savanyú káposzta",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, bélbarát"
  },
  {
    "name": "Nyílgyökér Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Nyúl",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 200 g – Dr. Balsai a természetes húsokat javasolja"
  },
  {
    "name": "OkraűSpárga",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, alacsony lektintartalom"
  },
  {
    "name": "Olajok",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Csak lektinmentes olajok, pl. olíva, kókusz"
  },
  {
    "name": "Olíva olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Monotelítetlen zsír, gyulladáscsökkentő"
  },
  {
    "name": "Oregánó",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, gyulladáscsökkentő – Dr. Balsai a természetes fűszereket ajánlja"
  },
  {
    "name": "Organikus sajtkrém",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Organikus tejföl",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Organikus tejszín",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Osztriga",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Cink és omega-3 forrás"
  },
  {
    "name": "Őz",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, tápanyagban gazdag, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Padlizsán",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, gyulladáskeltő"
  },
  {
    "name": "Páfrányfenyő levél tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, gyulladáscsökkentő, mértékkel – Dr. Balsai a természetes italokat ajánlja"
  },
  {
    "name": "Pakchoi",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminforrás, alacsony szénhidrát"
  },
  {
    "name": "Paleo articsókasaláta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, lektinmentes, májtámogató – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo avokádókrém",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsírok, lektinmentes – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo avokádós saláta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsírok, lektinmentes, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo brokkolikrémleves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, bélbarát, antioxidánsokban gazdag – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo brokkolipüré",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, antioxidánsokban gazdag, köretként ideális – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo céklafőzelék",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, lektinmentes, kókusztejszínnel – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo céklasaláta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, antioxidánsokban gazdag – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo cukkini tészta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, tészta alternatíva – Dr. Balsai a paleo-barát köreteket javasolja"
  },
  {
    "name": "Paleo csirkehúsleves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású csirkéből, bélflóra támogató – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo csirkemell roston",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású csirkéből, sovány fehérje, napi 200 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Paleo csirkepástétom",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású csirkéből, lektinmentes – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Paleo édesburgonyapüré",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel – Dr. Balsai a paleo-barát köreteket javasolja"
  },
  {
    "name": "Paleo fokhagymás répa",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, béta-karotin forrás, sütőben készítve – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo gofri (mandulaliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, mértékkel – Dr. Balsai a paleo-barát süteményeket elfogadja"
  },
  {
    "name": "Paleo gyümölcssaláta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szezonális gyümölcsökből, cukormentes, mértékkel – Dr. Balsai a természetes gyümölcsöket javasolja"
  },
  {
    "name": "Paleo kacsamell sütve",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású kacsából, sovány fehérje, napi 200 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Paleo karfiolpüré",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, köretként ideális – Dr. Balsai a paleo-barát köreteket ajánlja"
  },
  {
    "name": "Paleo karfiolrizs",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Alacsony szénhidrát, lektinmentes alternatíva – Dr. Balsai a paleo-barát köreteket javasolja"
  },
  {
    "name": "Paleo keksz (kókuszliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, mértékkel – Dr. Balsai a paleo-barát süteményeket elfogadja"
  },
  {
    "name": "Paleo kelbimbó ropogós",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, antioxidánsokban gazdag, sütőben készítve – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo kelkáposzta leves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminokban gazdag, lektinmentes, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo kenyér (mandulaliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Mandulaliszt alapú, lektinmentes, alacsony szénhidráttartalom – Dr. Balsai a módosított paleo étrend részeként elfogadja"
  },
  {
    "name": "Paleo kesudióvaj",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, lektinmentes, napi 1/2 bögre – Dr. Balsai a természetes zsírokat ajánlja"
  },
  {
    "name": "Paleo kókuszgolyó",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Cukormentes, lektinmentes, mértékkel – Dr. Balsai a paleo-barát desszerteket elfogadja"
  },
  {
    "name": "Paleo kókuszlisztből készült kenyér",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, mértékkel – Dr. Balsai a paleo-barát pékárukat elfogadja"
  },
  {
    "name": "Paleo kókuszlisztből készült muffin",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, mértékkel – Dr. Balsai a paleo-barát desszerteket elfogadja"
  },
  {
    "name": "Paleo kókuszlisztből készült palacsinta",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, cukormentes – Dr. Balsai a paleo-barát desszerteket elfogadja"
  },
  {
    "name": "Paleo lazac steak",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, gyulladáscsökkentő – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Paleo lazacpástétom",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, lektinmentes – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Paleo majonéz (olívaolaj alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes – Dr. Balsai a természetes zsírokat ajánlja"
  },
  {
    "name": "Paleo mandulalisztből készült pizza",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, A1 kazein-mentes feltétekkel, mértékkel – Dr. Balsai a paleo-barát ételeket elfogadja"
  },
  {
    "name": "Paleo mandulalisztes süti",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, cukormentes, mértékkel – Dr. Balsai a paleo-barát desszerteket elfogadja"
  },
  {
    "name": "Paleo mandulavaj",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, lektinmentes, napi 1/2 bögre – Dr. Balsai a természetes zsírokat ajánlja"
  },
  {
    "name": "Paleo marhahúsleves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Tápanyagban gazdag, bélflóra támogató, lektinmentes – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo marhasült",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Paleo muffin (mandulaliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, mértékkel – Dr. Balsai a paleo-barát süteményeket elfogadja"
  },
  {
    "name": "Paleo palacsinta (kókuszliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Kókuszliszt alapú, lektinmentes, alacsony szénhidráttartalom – Dr. Balsai a módosított paleo étrend részeként elfogadja"
  },
  {
    "name": "Paleo paradicsommentes salsa",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, zöldség alapú – Dr. Balsai a természetes ízesítőket ajánlja"
  },
  {
    "name": "Paleo pizza (kókuszliszt alapú)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Kókuszliszt alapú tészta, A1 kazein-mentes feltétekkel (pl. zöldségek, szabadtartású csirke), lektinmentes – Dr. Balsai a módosított paleo étrend részeként elfogadja, ha megfelelő alapanyagokkal készül"
  },
  {
    "name": "Paleo répachips",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, sütőben készítve, mértékkel – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo spenótkrémleves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, vitaminokban gazdag, bélbarát – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo sütőtök leves (kókusztejszínnel)",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, bélbarát – Dr. Balsai a paleo-barát ételeket javasolja"
  },
  {
    "name": "Paleo sütőtökpüré",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, rostban gazdag, kókusztejszínnel készítve – Dr. Balsai a paleo-barát köreteket ajánlja"
  },
  {
    "name": "Paleo szarvaspörkölt",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, lektinmentes, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Paleo tortilla (mandulaliszt alapú)",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát, mértékkel – Dr. Balsai a paleo-barát alternatívákat javasolja"
  },
  {
    "name": "Paleo tökfőzelék",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, kuktában főzve, kókusztejszínnel, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo zöldbabfőzelék",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, kuktában főzve, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Paleo zöldfűszeres lazac",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, lektinmentes, gyulladáscs panicmentő – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Paleo zöldfűszeres mártás",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, gyulladáscsökkentő – Dr. Balsai a természetes ízesítőket ajánlja"
  },
  {
    "name": "Paleo zöldséges omlett",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Szabadtartású tojásból, lektinmentes zöldségekkel – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Paleo zöldségleves",
    "group": "Ételek (paleo-barát)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes zöldségekből, bélbarát – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Pálmaszív",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, alacsony lektintartalom"
  },
  {
    "name": "Pamutmag olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Paprika (beleértve a chilipaprikát)",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, gyulladáskeltő és bélkárosító – Dr. Balsai az éjjeli árnyékosokat kerüli"
  },
  {
    "name": "Paradicsom",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, gyulladáskeltő"
  },
  {
    "name": "Parmigiano-Reggiano",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Passiógyümölcs",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Pasta Slim tészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "PaszternákűJukka",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Pattogatott kukorica",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, bélkárosító"
  },
  {
    "name": "Pecorino Romano",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, érlelt sajt, napi 300 g – Dr. Balsai a természetes tejtermékeket javasolja"
  },
  {
    "name": "Pekándió",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Egészséges zsír, napi 1/2 bögre"
  },
  {
    "name": "Perilla olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, gyulladáscsökkentő"
  },
  {
    "name": "Petrezselyem",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, méregtelenítő – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Pioppino gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidáns hatású, alacsony lektintartalom – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Pisztácia",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsok, napi 1/2 bögre"
  },
  {
    "name": "Pisztráng",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony higanytartalom, támogatja a szív egészségét – Dr. Balsai az omega-3 forrásokat kiemeli"
  },
  {
    "name": "Póréhagyma",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rostok, bélbarát"
  },
  {
    "name": "Pórsáfrány olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Prosciutto",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Pulyka",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Fehérjeforrás, napi 200 g"
  },
  {
    "name": "Pulykamáj (szabadtartású)",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Tápanyagban gazdag, sovány fehérje, napi 200 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Quinoa",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Rágcsálnivalók",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított szénhidrát, káros"
  },
  {
    "name": "Rák",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, sovány fehérje"
  },
  {
    "name": "Ratabaga",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Rebarbara (levél nélkül)",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Alacsony lektintartalom, mértékkel fogyasztható – Dr. Balsai a természetes zöldségeket javasolja"
  },
  {
    "name": "Reishi gomba",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, gyulladáscsökkentő, alacsony szénhidrát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Répa",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Béta-karotin forrás, alacsony lektintartalom"
  },
  {
    "name": "Repce olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Retek",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, vitaminforrás"
  },
  {
    "name": "Rizs",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Rizskorpa olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, mértékkel"
  },
  {
    "name": "Római kömény",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidáns hatású, emésztést támogató – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Rooibos tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, koffeinmentes – Dr. Balsai a természetes italokat ajánlja"
  },
  {
    "name": "Ropogós Körte (Anjou bosc comice)",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Rostforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Rozmaring",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, antioxidáns hatású – Dr. Balsai a természetes fűszereket javasolja a módosított paleo étrendben"
  },
  {
    "name": "Rozs (nem lehet kuktában főzni)",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Röviditalok",
    "group": "Röviditalok",
    "recommendation": "Igen Kérek",
    "note": "Tiszta alkohol, napi 15 ml ajánlott"
  },
  {
    "name": "Rukola",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, bélbarát"
  },
  {
    "name": "Sáfrány",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidáns hatású, természetes ízesítő – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Sajt Rikotta Túró",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazein, gyulladáskeltő"
  },
  {
    "name": "Saláta",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Alacsony lektintartalom, antioxidánsokban gazdag, bélbarát – Dr. Balsai a zöld leveles zöldségeket ajánlja"
  },
  {
    "name": "Sárfányos olívaolaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokkal dúsított, gyulladáscsökkentő – Dr. Balsai a természetes olajokat ajánlja"
  },
  {
    "name": "Sárga cékla",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Méregtelenítő, antioxidánsokban gazdag – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Sárgadinnye (érett)",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Sárgarépa",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Béta-karotin forrás, alacsony lektintartalom, bélbarát – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Savófehérje por",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g ajánlott"
  },
  {
    "name": "Sertéshús emberséggel nevelt",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Sertésmáj (szabadtartású)",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Tápanyagban gazdag, sovány fehérje, napi 110 g – Dr. Balsai a természetes húsokat javasolja"
  },
  {
    "name": "Shirataki tészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Siete márkájú tortilla, kaszava",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, mértékkel"
  },
  {
    "name": "Snidling",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, bélbarát – Dr. Balsai a természetes fűszereket ajánlja"
  },
  {
    "name": "Spenót",
    "group": "Zöldségek (zöld leveles)",
    "recommendation": "Igen Kérek",
    "note": "Vitaminokban és ásványi anyagokban gazdag, alacsony lektintartalom – Dr. Balsai a zöld leveles zöldségeket javasolja"
  },
  {
    "name": "Splenda (szukralóz)",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges édesítő, káros"
  },
  {
    "name": "Strucc",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 200 g"
  },
  {
    "name": "Sütemények",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Finomított szénhidrát, bélkárosító"
  },
  {
    "name": "Sütőtök",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, gyulladáskeltő"
  },
  {
    "name": "Svájci sajt",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Swett One Sunett (aceszulfát K)",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges édesítő, káros"
  },
  {
    "name": "Szabadtartású vagy omega3 tojás max 4db",
    "group": "Hús (szabadtartású)",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, max 4 db/nap"
  },
  {
    "name": "Szardella",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 és kalcium forrás, gyulladáscsökkentő – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Szardínia",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Magas omega-3 és kalcium forrás, támogatja a szív egészségét, frissen vagy konzervben is ajánlott – Dr. Balsai a természetes halakat javasolja"
  },
  {
    "name": "Szarvas",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g – Dr. Balsai a természetes húsokat ajánlja"
  },
  {
    "name": "Szecsuáni bors",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, természetes ízesítő, mértékkel – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Szegfűszeg",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, gyulladáscsökkentő – Dr. Balsai a természetes ízesítőket ajánlja"
  },
  {
    "name": "Szerecsendió",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, természetes ízesítő, kis mennyiségben – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Szerzetesek körtéje",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Természetes édesítő, alacsony glikémiás"
  },
  {
    "name": "Szezám mag",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Ásványi anyagokban gazdag, napi 1/2 bögre"
  },
  {
    "name": "Szezám olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsok, gyulladáscsökkentő"
  },
  {
    "name": "Szilva",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Rostforrás, szezonálisan kis mennyiségben"
  },
  {
    "name": "Színes cukorkák",
    "group": "Édességek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Mesterséges színezékeket és cukrot tartalmaz, káros a bélflórára – Dr. Balsai a mesterséges adalékanyagokat elutasítja"
  },
  {
    "name": "Szivárványos pisztráng",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, alacsony higanytartalom, támogatja a szív egészségét – Dr. Balsai az omega-3 fontosságát hangsúlyozza"
  },
  {
    "name": "Szója",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Szója olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Szójafehérje",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Szőlő (érett)",
    "group": "Gyümölcsök",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas fruktóztartalom, bélproblémák – Dr. Balsai a magas fruktóztartalmú gyümölcsöket kerüli"
  },
  {
    "name": "Szőlőmag Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, antioxidánsokban gazdag"
  },
  {
    "name": "Szőlőmag olaj",
    "group": "Olajok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Magas omega-6, gyulladáskeltő"
  },
  {
    "name": "Sztívia",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Természetes édesítő, alacsony glikémiás"
  },
  {
    "name": "Tárkony",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Emésztést támogató, antioxidáns hatású – Dr. Balsai a természetes fűszereket javasolja"
  },
  {
    "name": "Tarógyökér",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Tatsoi",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, méregtelenítő – Dr. Balsai a zöld leveles zöldségeket ajánlja"
  },
  {
    "name": "Tej",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazein, bélkárosító"
  },
  {
    "name": "Tejszínhab (A1 kazein alapú)",
    "group": "Tejtermékek (kerülendő)",
    "recommendation": "Köszönöm nem kérek",
    "note": "A1 kazeint tartalmaz, gyulladást keltő – Dr. Balsai csak az A2 kazein alapú tejtermékeket ajánlja"
  },
  {
    "name": "Tempeh (kuktában főzve)",
    "group": "Zöldségek (fermentált)",
    "recommendation": "Igen Kérek",
    "note": "Probiotikumokban gazdag, kuktában főzve lektinmentes, növényi fehérjeforrás – Dr. Balsai a fermentált ételeket ajánlja vegánoknak"
  },
  {
    "name": "Tengeri hínár tészta",
    "group": "Tészták (elfogadható)",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, alacsony szénhidrát"
  },
  {
    "name": "Tészta",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom és finomított szénhidrát"
  },
  {
    "name": "Textúrált zöldségfehérje",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Tigrismogyoró",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Tigrismogyoró Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes alternatíva"
  },
  {
    "name": "Tintahal",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, sovány fehérje"
  },
  {
    "name": "Tiszta víz",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "A legjobb hidratáló ital, mesterséges adalékanyagoktól mentes – Dr. Balsai a tiszta vizet kiemelten ajánlja"
  },
  {
    "name": "Tofu",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Tojás",
    "group": "Állati eredetű",
    "recommendation": "Igen Kérek",
    "note": "Feldolgozatlan, magas fehérjetartalom, esszenciális tápanyagokat (pl. kolin) tartalmaz, illik a módosított paleo étrendbe – Dr. Balsai a természetes ételeket ajánlja"
  },
  {
    "name": "Tortilla",
    "group": "Finomított keményítőt tartalmazó ételek",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom és finomított szénhidrát"
  },
  {
    "name": "Tökféle az összes",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, gyulladáskeltő"
  },
  {
    "name": "Tökmag",
    "group": "Diófélék és Magok",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Tönkölybúza",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt gyulladáskeltő"
  },
  {
    "name": "Uborka",
    "group": "Gyümölcsök (botanikailag)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma bélproblémákat okozhat"
  },
  {
    "name": "Útifűmag",
    "group": "Diófélék és Magok",
    "recommendation": "Igen Kérek",
    "note": "Rostforrás, napi 1/2 bögre"
  },
  {
    "name": "Vad rizs",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Vaddisznó",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Vadhús",
    "group": "Hús (legelőn nevelt)",
    "recommendation": "Igen Kérek",
    "note": "Sovány fehérje, napi 110 g"
  },
  {
    "name": "Vadon fogott tőkehal",
    "group": "Halak",
    "recommendation": "Igen Kérek",
    "note": "Omega-3 forrás, sovány fehérje, alacsony higanytartalom – Dr. Balsai a természetes halakat ajánlja"
  },
  {
    "name": "Vadspárga",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, alacsony lektintartalom – Dr. Balsai a természetes zöldségeket javasolja"
  },
  {
    "name": "Valódi parmezán",
    "group": "Tejtermékek",
    "recommendation": "Igen Kérek",
    "note": "A2 kazein, napi 300 g"
  },
  {
    "name": "Vargánya",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Immunerősítő, alacsony lektintartalom – Dr. Balsai a természetes zöldségeket ajánlja"
  },
  {
    "name": "Víztorma",
    "group": "Zöldségek (keresztesvirágúak)",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag, méregtelenítő"
  },
  {
    "name": "Vörös szőlő (kis mennyiségben)",
    "group": "Gyümölcsök",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban gazdag (resveratrol), de magas fruktóztartalom miatt szezonálisan kis mennyiségben – Dr. Balsai a mértékletességet javasolja"
  },
  {
    "name": "Vöröspálma-olaj",
    "group": "Olajok",
    "recommendation": "Igen Kérek",
    "note": "Béta-karotin forrás, gyulladáscsökkentő"
  },
  {
    "name": "Wrap (kókuszlisztből)",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, mértékkel"
  },
  {
    "name": "Xilit",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Alacsony glikémiás, bélbarát"
  },
  {
    "name": "Yacon Mexikói jamgyökér",
    "group": "Édesítők",
    "recommendation": "Igen Kérek",
    "note": "Prebiotikus rost, természetes édesítő"
  },
  {
    "name": "Zab (nem lehet kuktában főzni)",
    "group": "Pszeudo-gabonák",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalma miatt kerülendő"
  },
  {
    "name": "Zeller",
    "group": "Zöldségek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, alacsony lektintartalom"
  },
  {
    "name": "Zellergyökér",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Rostban gazdag, mértékkel"
  },
  {
    "name": "Zöld banán főzőbanán",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Ellenálló keményítő, mértékkel"
  },
  {
    "name": "Zöld banán Liszt",
    "group": "Lisztek",
    "recommendation": "Igen Kérek",
    "note": "Lektinmentes, rostban gazdag"
  },
  {
    "name": "Zöld mangó és papaya",
    "group": "Ellenálló keményítők",
    "recommendation": "Igen Kérek",
    "note": "Ellenálló keményítő, mértékkel"
  },
  {
    "name": "Zöld szójabab",
    "group": "Zöldségek (lektintartalmúak)",
    "recommendation": "Köszönöm nem kérek",
    "note": "Lektintartalom, kuktában főzve vegánok"
  },
  {
    "name": "Zöld tea",
    "group": "Italok",
    "recommendation": "Igen Kérek",
    "note": "Antioxidánsokban (katekin) gazdag, gyulladáscsökkentő, támogatja az anyagcserét – Dr. Balsai a természetes italokat javasolja"
  },
  {
    "name": "Zsálya",
    "group": "Fűszerek",
    "recommendation": "Igen Kérek",
    "note": "Gyulladáscsökkentő, immunerősítő – Dr. Balsai a természetes fűszereket javasolja"
  }
];
