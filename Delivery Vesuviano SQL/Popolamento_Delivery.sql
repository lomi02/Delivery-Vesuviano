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
  ('12345678901', 'Pizza Margherita', 'Pomodoro, mozzarella, basilico, olio di oliva.', 9.99, 'https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/fdl_content_import_it/margherita-50kalo.jpg'),
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
  ('45678901234', 'Spaghetti Carbonara', 'Pasta con uova, guanciale, pecorino e pepe nero.', 11.99, 'https://www.giallozafferano.it/images/219-21928/Spaghetti-alla-Carbonara_650x433_wm.jpg'),
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
