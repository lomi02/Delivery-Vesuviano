INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL_CLIENTE, PASSWORD_CLIENTE, VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, CITOFONO_CLIENTE)
VALUES
  ('Mario', 'Rossi', 'mario.rossi@email.com', 'password123', 'Via Roma 1', 'Roma', '00100', 'CITOFONO001'),
  ('Laura', 'Bianchi', 'laura.bianchi@email.com', 'securepass', 'Via Milano 2', 'Milano', '20100', 'CITOFONO002'),
  ('Luca', 'Verdi', 'luca.verdi@email.com', 'pass123', 'Via Napoli 3', 'Napoli', '80100', 'CITOFONO003'),
  ('Giulia', 'Gialli', 'giulia.gialli@email.com', '123456', 'Via Firenze 4', 'Firenze', '50100', 'CITOFONO004'),
  ('Alessio', 'Neri', 'alessio.neri@email.com', 'password', 'Via Palermo 5', 'Palermo', '90100', 'CITOFONO005'),
  ('Francesca', 'Rosa', 'francesca.rosa@email.com', 'qwerty', 'Via Bari 6', 'Bari', '70100', 'CITOFONO006'),
  ('Giovanni', 'Azzurri', 'giovanni.azzurri@email.com', 'passpass', 'Via Catania 7', 'Catania', '95100', 'CITOFONO007'),
  ('Martina', 'Verdi', 'martina.verdi@email.com', 'secure123', 'Via Genova 8', 'Genova', '16100', 'CITOFONO008'),
  ('Paolo', 'Bianco', 'paolo.bianco@email.com', 'password1', 'Via Torino 9', 'Torino', '10100', 'CITOFONO009'),
  ('Valentina', 'Nero', 'valentina.nero@email.com', 'testpass', 'Via Venezia 10', 'Venezia', '30100', 'CITOFONO010'),
  ('Marco', 'Gallo', 'marco.gallo@email.com', 'pass1234', 'Via Verona 11', 'Verona', '37100', 'CITOFONO011'),
  ('Sara', 'Russo', 'sara.russo@email.com', 'passwordtest', 'Via Padova 12', 'Padova', '35100', 'CITOFONO012'),
  ('Simone', 'Blu', 'simone.blu@email.com', 'securepass123', 'Via Trieste 13', 'Trieste', '34100', 'CITOFONO013'),
  ('Elena', 'Viola', 'elena.viola@email.com', 'mypassword', 'Via Udine 14', 'Udine', '33100', 'CITOFONO014'),
  ('Riccardo', 'Arancio', 'riccardo.arancio@email.com', 'securepassword', 'Via Pisa 15', 'Pisa', '56100', 'CITOFONO015'),
  ('Alessia', 'Marrone', 'alessia.marrone@email.com', 'mypass123', 'Via Arezzo 16', 'Arezzo', '52100', 'CITOFONO016'),
  ('Davide', 'Giallo', 'davide.giallo@email.com', 'mypassword123', 'Via Lecce 17', 'Lecce', '73100', 'CITOFONO017'),
  ('Chiara', 'Rosa', 'chiara.rosa@email.com', 'testpassword', 'Via Messina 18', 'Messina', '98100', 'CITOFONO018'),
  ('Matteo', 'Azzurro', 'matteo.azzurro@email.com', 'pass12345', 'Via Cagliari 19', 'Cagliari', '09100', 'CITOFONO019'),
  ('Elisa', 'Magenta', 'elisa.magenta@email.com', 'securetest', 'Via Sassari 20', 'Sassari', '07100', 'CITOFONO020');

INSERT INTO RISTORANTE (P_IVA_RISTORANTE, NOME_RISTORANTE, NUMERO_TELEFONO_RISTORANTE, IMG_URL_RISTORANTE)
VALUES
  ('12345678901', 'La Trattoria del Gusto', '012-345-6789', 'https://media-cdn.tripadvisor.com/media/photo-s/1c/25/f2/0a/atrio-locanda-del-gusto.jpg'),
  ('01234567890', 'La Cucina di Angelo', '111-999-8888', 'https://www.mangiaebevi.it/wp-content/uploads/2023/10/Caracol-960x640.jpeg'),
  ('34567890123', 'Osteria della Luna', '555-123-4567', 'https://cdnlunigiana-15dde.kxcdn.com/wp-content/uploads/2022/06/Osteria-Della-Luna-Ristorante-PontremoliLunigiana-World_2021-21.jpg'),
  ('45678901234', 'Il Gusto Divino', '321-987-6543', 'https://www.massimilianoprete.it/wp-content/uploads/2021/03/Gusto-Divino-a-Saluzzo-Massimiliano-Prete-pizze-gastronomica.jpg'),
  ('56789012345', 'Piazza dei Sapori', '888-222-3333', 'https://inpiazza.eu/img/gallery/in-piazza-sala.jpg'),
  ('67890123456', 'Antica Trattoria Roma', '555-777-8888', 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/16a1cda1-c91f-4e73-a1e5-216ee3cb515f/cd9d1e44-f278-44c2-90e4-cb575edc65fd.jpg'),
  ('78901234567', 'Mare e Monti', '777-444-5555', 'https://www.marimonti-apricale.it/wp-content/uploads/slider/cache/b0c05cca02ff170a549c8a814a5852c5/105-2000-2.jpg'),
  ('89012345678', 'Gusto Mediterraneo', '444-666-9999', 'https://www.beverfood.com/wp-content/uploads/2021/12/leve-1.jpg'),
  ('90123456789', 'Ristorante della Nonna', '666-111-2222', 'https://media-cdn.tripadvisor.com/media/photo-s/17/29/a8/3e/last-man-standing-after.jpg');

INSERT INTO MENU (RISTORANTE_ID, NOME_PIATTO, DESCRIZIONE, PREZZO, IMG_URL_PIATTO)
VALUES
  -- La Trattoria del Gusto
  ('12345678901', 'Lasagna al Forno', 'Strati di pasta fresca con ragù, besciamella e formaggio.', 12.99, 'https://wips.plug.it/cips/buonissimo.org/cms/2011/12/lasagne-al-forno-alla-ferrarese.jpg'),
  ('12345678901', 'Pizza Margherita', 'Tomato, mozzarella, basilico, olio di oliva.', 9.99, 'https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/fdl_content_import_it/margherita-50kalo.jpg'),
  ('12345678901', 'Tagliatelle al Ragu', 'Tagliatelle fatte in casa con salsa di carne ricca.', 14.99, 'https://img-prod.tgcom24.mediaset.it/images/2021/02/28/200616887-8f46ce9c-ad58-424f-8913-6dbc3dd67a52.jpg'),
  ('12345678901', 'Bruschetta Classica', 'Pane tostato con pomodori, aglio, basilico e olio di oliva.', 7.99, 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/11/ricetta-bruschetta-pomodoro/_jcr_content/header-par/image_single.img.jpg/1596625322419.jpg'),
  ('12345678901', 'Tiramisù', 'Dolce italiano al caffè con mascarpone e cacao.', 8.99, 'https://ricetta.it/Uploads/Imgs/tiramisu-classico.jpg'),

  -- La Cucina di Angelo
  ('01234567890', 'Risotto Funghi e Tartufo', 'Risotto con funghi porcini e tartufo nero.', 18.99, 'https://www.fortunatiantonio.it/wp-content/uploads/2015/05/shutterstock_116404021.jpg'),
  ('01234567890', 'Insalata di Mare', 'Insalata mista di frutti di mare con vinaigrette.', 15.99, 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2020/08/insalata-di-mare.jpg'),
  ('01234567890', 'Gamberi alla Griglia', 'Gamberi grigliati con aglio e prezzemolo.', 20.99, 'https://www.misya.info/wp-content/uploads/2022/05/Gamberoni-alla-griglia.jpg'),
  ('01234567890', 'Linguine alle Vongole', 'Linguine con vongole veraci e aglio.', 14.99, 'https://blog.giallozafferano.it/nocemoscata/wp-content/uploads/2020/07/MG_1933-720x480.jpg'),
  ('01234567890', 'Torta al Cioccolato e Frutti di Bosco', 'Torta al cioccolato con frutti di bosco.', 9.99, 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2018/01/torta-al-cioccolato-e-frutti-di-bosco/_jcr_content/header-par/image-single.img.jpg/1517771385600.jpg'),

  -- Osteria della Luna
  ('34567890123', 'Gnocchi al Pesto', 'Gnocchi di patate con salsa al basilico e pinoli.', 10.99, 'https://www.qbcucina.com/wp-content/uploads/2021/04/Pesto-Gnocchi.png'),
  ('34567890123', 'Scaloppine al Limone', 'Fettine di carne con salsa al limone e prezzemolo.', 15.99, 'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2022/02/Scaloppine-al-limone-5591.jpg'),
  ('34567890123', 'Insalata Caprese', 'Pomodoro, mozzarella, basilico e olio di oliva.', 8.99, 'https://www.cuocicuoci.com/wp-content/uploads/2022/05/caprese.jpg'),
  ('34567890123', 'Cannoli Siciliani', 'Dolci siciliani ripieni di crema di ricotta.', 12.99, 'https://primochef.it/wp-content/uploads/2017/06/SH_Gli-spettacolari-cannoli-siciliani-640x350.jpg'),
  ('34567890123', 'Granita al Caffè', 'Bevanda siciliana ghiacciata al caffè.', 6.99, 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2021/07/granita-al-caffe/_jcr_content/header-par/image-single.img.jpg/1626780629155.jpg'),

  -- Il Gusto Divino
  ('45678901234', 'Spaghetti Carbonara', 'Pasta con uova, guanciale, pecorino e pepe nero.', 11.99, 'https://www.mamablip.com/ir/800/storage/Traditional-Spaghetti-alla-Carbonara_1131611747132.jpg'),
  ('45678901234', 'Saltimbocca alla Romana', 'Fettine di vitello con prosciutto e salvia.', 18.99, 'https://www.giallozafferano.it/images/ricette/204/20401/foto_hd/hd650x433_wm.jpg'),
  ('45678901234', 'Melanzane alla Parmigiana', 'Melanzane al forno con pomodoro e formaggio.', 13.99, 'https://www.casapappagallo.it/storage/11330/Parmigiana-di-melanzane.jpg'),
  ('45678901234', 'Tortellini in Brodo', 'Tortellini ripieni in brodo di carne.', 14.99, 'https://www.qbcucina.com/wp-content/uploads/2020/12/tortellini-in-brodo-q.b.-cucina-scaled.jpg'),
  ('45678901234', 'Pistacchio Gelato', 'Gelato al pistacchio siciliano.', 7.99, 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9A7B23B2-1A22-47A1-BA29-F0B1C9798DBF/Derivates/9417E79F-B037-4EF2-A32D-41908BE9C0F4.jpg'),

  -- Piazza dei Sapori
  ('56789012345', 'Frittura di Pesce', 'Calamari, gamberi e pesci misti fritti.', 15.99, 'https://media.gqitalia.it/photos/5d5bd7cf1c0b03000814b8d4/16:9/w_2560%2Cc_limit/GettyImages-808616666.jpg'),
  ('56789012345', 'Ravioli di Mare', 'Ravioli ripieni di frutti di mare con salsa di pomodoro.', 17.99, 'https://media-assets.lacucinaitaliana.it/photos/61fd316476fbfc8fddc0369d/4:3/w_800,h_600,c_limit/RAVIOLI-DI-PESCE.jpg'),
  ('56789012345', 'Insalata di Polpo', 'Insalata di polpo con patate, olive e pomodoro.', 14.99, 'https://www.hamiciincucina.it/wp-content/uploads/2023/01/polpo_insalata.jpg'),
  ('56789012345', 'Pasta con Vongole', 'Pasta con vongole veraci e aglio.', 12.99, 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/10/Spaghetti-alle-vongole.jpg'),
  ('56789012345', 'Torta al Limone', 'Torta di limone con glassa allo zucchero.', 8.99, 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/02/Moelleux-al-limone-still-life-finale-1.jpg'),

  -- Antica Trattoria Roma
  ('67890123456', 'Cotoletta alla Milanese', 'Cotoletta di vitello impanata e fritta.', 16.99, 'https://www.donnamoderna.com/content/uploads/2003/03/Cotoletta-alla-milanese.jpg'),
  ('67890123456', 'Minestrone alla Genovese', 'Zuppa di verdure con pesto genovese.', 9.99, 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2018/11/minestrone-genovese4.jpg'),
  ('67890123456', 'Cannelloni Ricotta e Spinaci', 'Cannelloni ripieni di ricotta e spinaci con salsa di pomodoro.', 13.99, 'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2017/04/cannelloni-ricotta-e-spinaci/_R5_2037.jpg'),
  ('67890123456', 'Gelato alla Vaniglia', 'Gelato italiano alla vaniglia.', 7.99, 'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2022/07/gelato-alla-vaniglia/_MG_7779.jpg'),
  ('67890123456', 'Limone Sorbetto', 'Sorbetto al limone rinfrescante.', 6.99, 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/11/ricetta-sorbetto-limone-senza-gelatiera/_jcr_content/header-par/image_single.img.jpg/1594876995706.jpg'),

  -- Mare e Monti
  ('78901234567', 'Gnocchi Gorgonzola e Noci', 'Gnocchi con salsa al gorgonzola e noci.', 11.99, 'https://blog.giallozafferano.it/cuochinprogress/wp-content/uploads/2019/03/gnocchi-gorgonzola-e-noci1.jpg'),
  ('78901234567', 'Filetto di Manzo ai Funghi', 'Filetto di manzo con salsa ai funghi porcini.', 22.99, 'https://www.paneacquasale.it/wp-content/uploads/2019/11/Filetto-di-vitello-ai-funghi-porcini-4.jpg'),
  ('78901234567', 'Insalata di Rucola e Parmigiano', 'Insalata con rucola, parmigiano e aceto balsamico.', 8.99, 'https://blog.giallozafferano.it/mammachepaella/wp-content/uploads/2018/12/Insalata-di-rucola-con-arance-noci-e-parmigiano.jpg'),
  ('78901234567', 'Tiramisù al Cioccolato', 'Tiramisù con aggiunta di cioccolato fondente.', 10.99, 'https://www.giallozafferano.it/images/154-15432/Tiramisu-con-crema-al-cioccolato_780x520_wm.jpg'),
  ('78901234567', 'Amaretto Affogato', 'Gelato affogato con liquore Amaretto.', 9.99, 'https://mountaincravings.com/wp-content/uploads/2018/02/01-Amaretto-Chocolate-Affogato.png'),

  -- Gusto Mediterraneo
  ('89012345678', 'Pasta alla Puttanesca', 'Pasta con pomodoro, olive, capperi e acciughe.', 12.99, 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2023/05/PUTTANESCA_DI_TONNO_SITO-4.jpg'),
  ('89012345678', 'Saltimbocca alla Siciliana', 'Fettine di vitello con prosciutto crudo e melanzane.', 18.99, 'https://www.sfizioso.it/wp-content/uploads/2019/02/saltimbocca-alla-romana.jpg'),
  ('89012345678', 'Caponata', 'Antipasto siciliano con melanzane, pomodori e olive.', 9.99, 'https://www.dimmidisi.it/wp-content/uploads/2022/05/caponata-scaled-1.jpg'),
  ('89012345678', 'Cannoli alla Ricotta', 'Cannoli siciliani ripieni di crema di ricotta.', 11.99, 'https://media-assets.lacucinaitaliana.it/photos/620fbff8a3b70ea567aa86d0/1:1/w_1600%2Cc_limit/cannoli-siciliani.jpg'),
  ('89012345678', 'Granita al Limone e Mandorle', 'Bevanda ghiacciata siciliana con limone e mandorle.', 7.99, 'https://www.lamiabuonaforchetta.it/wp-content/uploads/2018/07/granita-di-mandorle-5686L.jpg'),

  -- Ristorante della Nonna
  ('90123456789', 'Fettuccine Alfredo', 'Fettuccine con crema di burro e parmigiano.', 14.99, 'https://www.giallozafferano.it/images/ricette/169/16907/foto_hd/hd650x433_wm.jpg'),
  ('90123456789', 'Involtini Primavera', 'Involtini di verdure con salsa primavera.', 16.99, 'https://d15j9y5wlusr11.cloudfront.net/filehub/image/21bacfec-0cbc-4b73-b186-b83c61570bbf/10238/recipe.jpg'),
  ('90123456789', 'Carciofi alla Romana', 'Carciofi cotti lentamente con olio di oliva e menta.', 10.99, 'https://www.donnamoderna.com/content/uploads/2014/03/Carciofi-alla-romana-725x545.jpg'),
  ('90123456789', 'Tiramisù al Pistacchio', 'Tiramisù con aggiunta di crema al pistacchio.', 11.99, 'https://www.lucake.it/wp-content/uploads/2023/03/torta-tiramisu-al-pistacchio.jpg'),
  ('90123456789', 'Cioccolato Caldo', 'Bevanda calda al cioccolato fondente.', 5.99, 'https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2019/10/RICETTA-Cioccolata-Calda-.jpg');

/*
-- Zona
INSERT INTO ZONA(ID_ZONA) VALUES (1);
INSERT INTO ZONA(ID_ZONA) VALUES (2);
INSERT INTO ZONA(ID_ZONA) VALUES (3);
INSERT INTO ZONA(ID_ZONA) VALUES (4);

-- Comune
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('STRIANO', 'NA', 1);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('SARNO', 'SA', 2);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('PALMA CAMPANIA', 'NA', 1);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('POGGIOMARINO', 'NA', 1);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('OTTAVIANO', 'NA', 3);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('SAN GIUSEPPE VSV.', 'NA', 3);
INSERT INTO COMUNE(NOME_COMUNE, PROVINCIA, ZONA_ASSOCIATA) VALUES ('SAN VALENTINO TORIO', 'SA', 4);

-- Prenotazione
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-10', 'LUNEDI', '2023-07-10 19:30:00', '2023-07-10 23:00:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-11', 'MARTEDI', '2023-07-11 19:30:00', '2023-07-11 23:00:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-12', 'MERCOLEDI', '2023-07-12 19:30:00', '2023-07-12 23:00:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-13', 'GIOVEDI', '2023-07-13 19:30:00', '2023-07-13 23:00:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-14', 'VENERDI', '2023-07-14 19:15:00', '2023-07-14 23:45:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-15', 'SABATO', '2023-07-15 19:15:00', '2023-07-15 23:45:00');
INSERT INTO PRENOTAZIONE (ANNO, DATA_PRENOTAZIONE, GIORNO, ORA_INIZIO, ORA_FINE)
VALUES (2023, '2023-07-16', 'DOMENICA', '2023-07-16 19:15:00', '2023-07-16 23:45:00');

-- Rider
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF001', 'MASSIMO', 'VERDI', '1234567890', 'PALMA CAMPANIA');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF002', 'NELLO', 'GALLO', '0987654321', 'STRIANO');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF003', 'PASQUALE', 'PICCOLO', '4563738901', 'POGGIOMARINO');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF004', 'MARIA', 'NAPPI', '4123998800', 'OTTAVIANO');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF005', 'CARLO', 'DE FILIPPO', '1230987444', 'SARNO');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF006', 'ALBERTO', 'AMMIRATI', '0932177250', 'SAN GIUSEPPE VSV.');
INSERT INTO RIDER (CF_RIDER, NOME_RIDER, COGNOME_RIDER, TELEFONO_RIDER, COMUNE_LAVORATIVO)
VALUES ('CF007', 'MICHELE', 'ANNUNZIATA', '0817720112', 'SAN VALENTINO TORIO');

-- Locale
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('12345678901', 'RISTORANTE BELLA', '0123456789', 'VIA ROMA 1', '84047', 'SARNO');
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('23456789012', 'BAR LA PIAZZETTA', '1234567890', 'VIA MILANO 2', '80047', 'SAN GIUSEPPE VSV.');
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('34567890123', 'PIZZERIA DA GIOVANNI', '2345678901', 'VIA NAPOLI 3', '80040', 'POGGIOMARINO');
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('45678901234', 'OSTERIA BUONAIUTO', '3456789012', 'VIA TORINO 4', '80036', 'PALMA CAMPANIA');
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('67890123456', 'SUSHI BAR SAKURA', '5678901234', 'VIA BOLOGNA 6', '80044', 'OTTAVIANO');
INSERT INTO LOCALE (P_IVA, NOME_LOCALE, N_TELEFONO_LOCALE, VIA_LOCALE, CAP_LOCALE, COMUNE_SEDE)
VALUES ('89012345678', 'SEAFOOD RESTAURANT', '7890123456', 'VIA GENOVA 8', '84010', 'SAN VALENTINO TORIO');

-- Cliente
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('GIULIA', 'VERDI', 'GIULIA@EMAIL.COM', 'STRIANO', 'a');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('PAOLA', 'GIALLI', 'PAOLA@EMAIL.COM', 'SARNO', 'b');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('ALESSANDRO', 'MARRONI', 'ALESSANDRO@EMAIL.COM', 'PALMA CAMPANIA', 'c');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('FEDERICA', 'ROSA', 'FEDERICA@EMAIL.COM', 'SARNO', 'd');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('GIOVANNI', 'ARANCIO', 'GIOVANNI@EMAIL.COM', 'POGGIOMARINO', 'e');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('STEFANIA', 'VIOLA', 'STEFANIA@EMAIL.COM', 'SAN GIUSEPPE VSV.', 'f');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('MARTINA', 'AZZURRO', 'MARTINA@EMAIL.COM', 'PALMA CAMPANIA', 'g');
INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, COMUNE_RES, PASSWORD)
VALUES ('MARIO', 'ROSSI', 'MARIO@EMAIL.COM', 'STRIANO', 'h');

-- Pagamento
INSERT INTO PAGAMENTO (SCONTRINO, IMPORTO, METODO_PAY)
VALUES ('6', 55, 'CARTA DI CREDITO/DEBITO');
INSERT INTO PAGAMENTO (SCONTRINO, IMPORTO, METODO_PAY)
VALUES ('7', 12, 'CONTANTI');
INSERT INTO PAGAMENTO (SCONTRINO, IMPORTO, METODO_PAY)
VALUES ('8', 18, 'CARTA DI CREDITO/DEBITO');
INSERT INTO PAGAMENTO (SCONTRINO, IMPORTO, METODO_PAY)
VALUES ('2', 28, 'CARTA DI CREDITO/DEBITO');

-- Informazioni consegna
INSERT INTO INFORMAZIONI_CONSEGNA (VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, EMAIL_CLIENTE)
VALUES ('VIA ROMA 8', 'SAN VALENTINO TORIO', '84010', 'STEFANIA@EMAIL.COM');
INSERT INTO INFORMAZIONI_CONSEGNA (VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, EMAIL_CLIENTE)
VALUES ('VIA TORINO 1', 'SARNO', '84087', 'PAOLA@EMAIL.COM');
INSERT INTO INFORMAZIONI_CONSEGNA (VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, EMAIL_CLIENTE)
VALUES ('VIA PASSANTI 8', 'POGGIOMARINO', '80040', 'GIOVANNI@EMAIL.COM');

--Ordine
INSERT INTO ORDINE (N_ORDINE, STATO, P_IVALOCALE, CF_CONSEGNATORE, EMAIL_DESTINATARIO, SCONTRINO_ORDINE, DATA_E_ORA)
VALUES (1, 'CONSEGNATO', '45678901234', 'CF001', 'ALESSANDRO@EMAIL.COM ', '8 ', CURRENT_TIMESTAMP);
INSERT INTO ORDINE (N_ORDINE, STATO, P_IVALOCALE, CF_CONSEGNATORE, EMAIL_DESTINATARIO, SCONTRINO_ORDINE, DATA_E_ORA)
VALUES (2, 'IN CONSEGNA', '34567890123', 'CF003', 'GIOVANNI@EMAIL.COM ', '2 ', CURRENT_TIMESTAMP);
INSERT INTO ORDINE (N_ORDINE, STATO, P_IVALOCALE, CF_CONSEGNATORE, EMAIL_DESTINATARIO, SCONTRINO_ORDINE, DATA_E_ORA)
VALUES (3, 'IN LAVORAZIONE', '45678901234', 'CF001', 'ALESSANDRO@EMAIL.COM ', '6', CURRENT_TIMESTAMP);
INSERT INTO ORDINE (N_ORDINE, STATO, P_IVALOCALE, CF_CONSEGNATORE, EMAIL_DESTINATARIO, SCONTRINO_ORDINE, DATA_E_ORA)
VALUES (4, 'IN CONSEGNA', '12345678901', 'CF005', 'PAOLA@EMAIL.COM ', '7 ', CURRENT_TIMESTAMP);

--Prodotto
INSERT INTO PRODOTTO (ID_PRODOTTO, NOME_PRODOTTO, TIPO_PRODOTTO, P_IVA_LOCALE)
VALUES (1, 'PIZZA', 'DIAVOLA', '34567890123');
INSERT INTO PRODOTTO (ID_PRODOTTO, NOME_PRODOTTO, TIPO_PRODOTTO, P_IVA_LOCALE)
VALUES (2, 'PIZZA', 'DIAVOLA', '34567890123');
INSERT INTO PRODOTTO (ID_PRODOTTO, NOME_PRODOTTO, TIPO_PRODOTTO, P_IVA_LOCALE)
VALUES (3, 'PIZZA', 'MARINARA', '34567890123');
INSERT INTO PRODOTTO (ID_PRODOTTO, NOME_PRODOTTO, TIPO_PRODOTTO, P_IVA_LOCALE)
VALUES (4, 'PASTA', 'PENNETTE AL POMODORO', '12345678901');
INSERT INTO PRODOTTO (ID_PRODOTTO, NOME_PRODOTTO, TIPO_PRODOTTO, P_IVA_LOCALE)
VALUES (5, 'PASTA', 'CARBONARA', '12345678901');

--Presenti
INSERT INTO PRESENTI(IDPRODOTTO, NORDINE, QUANTITA)
VALUES (2, 1, 3);
INSERT INTO PRESENTI(IDPRODOTTO, NORDINE, QUANTITA)
VALUES (1, 3, 3);

-- Effettuano
INSERT INTO EFFETTUANO (CODF_RIDER, ANNO1, DATAPRENOTAZIONE, GIORNO_LAVORATIVO)
VALUES ('CF001', 2023, '2023-07-15', 'SABATO');
INSERT INTO EFFETTUANO (CODF_RIDER, ANNO1, DATAPRENOTAZIONE, GIORNO_LAVORATIVO)
VALUES ('CF003', 2023, '2023-07-10', 'LUNEDI');
INSERT INTO EFFETTUANO (CODF_RIDER, ANNO1, DATAPRENOTAZIONE, GIORNO_LAVORATIVO)
VALUES ('CF005', 2023, '2023-07-10', 'LUNEDI');
*/
