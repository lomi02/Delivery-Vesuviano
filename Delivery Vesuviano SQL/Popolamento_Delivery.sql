--Zona
insert into zona(id_zona)
values(1);
insert into zona(id_zona)
values(2);
insert into zona(id_zona)
values(3);
insert into zona(id_zona)
values(4);
--Comune
insert into comune(nome_comune,provincia,zona_associata) 
values('striano','na',1);
insert into comune(nome_comune,provincia,zona_associata) 
values('sarno','sa',2);
insert into comune(nome_comune,provincia,zona_associata) 
values('palma campania','na',1);
insert into comune(nome_comune,provincia,zona_associata) 
values('poggiomarino','na',1);
insert into comune(nome_comune,provincia,zona_associata) 
values('ottaviano','na',3);
insert into comune(nome_comune,provincia,zona_associata) 
values('san giuseppe vsv.','na',3);
insert into comune(nome_comune,provincia,zona_associata) 
values('san valentino torio','sa',4);
--Prenotazione
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-10','YYYY-MM-DD'), 'lunedi', TO_TIMESTAMP('2023-07-10 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-10 23:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-11', 'YYYY-MM-DD'), 'martedi', TO_TIMESTAMP('2023-07-11 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-11 23:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-12','YYYY-MM-DD'), 'mercoledi', TO_TIMESTAMP('2023-07-12 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-12 23:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-13','YYYY-MM-DD'), 'giovedi', TO_TIMESTAMP('2023-07-13 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-13 23:00:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-14', 'YYYY-MM-DD'), 'venerdi', TO_TIMESTAMP('2023-07-14 19:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-14 23:45:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-15', 'YYYY-MM-DD'), 'sabato', TO_TIMESTAMP('2023-07-15 19:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-15 23:45:00', 'YYYY-MM-DD HH24:MI:SS'));
INSERT INTO prenotazione (anno, data_prenotazione, giorno, ora_inizio, ora_fine)
VALUES (2023, TO_DATE('2023-07-16', 'YYYY-MM-DD'), 'domenica', TO_TIMESTAMP('2023-07-16 19:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-16 23:45:00', 'YYYY-MM-DD HH24:MI:SS'));
--Rider
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF001', 'Massimo', 'Verdi', '1234567890', 'palma campania');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF002','Nello','Gallo','0987654321','terzigno');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF003','Pasquale','Piccolo','4563738901','poggiomarino');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF004','Maria','Nappi','4123998800','ottaviano');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF005','Carlo','De Filippo','1230987444','sarno');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo) 
VALUES ('CF006','Alberto','Ammirati','0932177250','san giuseppe vsv.');
INSERT INTO rider (cf_rider, nome_rider, cognome_rider, telefono_rider, comune_lavorativo)
VALUES ('CF007','Michele','Annunziata','0817720112','san valentino torio');
--Locale
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale,cap_locale,comune_sede) 
VALUES ('12345678901', 'Ristorante Bella','0123456789', 'Via Roma 1','84047','sarno');
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale, cap_locale,comune_sede) 
VALUES ('23456789012', 'Bar La Piazzetta', '1234567890', 'Via Milano 2', '80047','san giuseppe vsv.');
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale, cap_locale,comune_sede) 
VALUES ('34567890123', 'Pizzeria Da Giovanni', '2345678901', 'Via Napoli 3', '80040', 'poggiomarino');
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale, cap_locale,comune_sede)
VALUES ('45678901234', 'Osteria Buonaiuto', '3456789012', 'Via Torino 4','80036','palma campania');
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale, cap_locale,comune_sede) 
VALUES ('67890123456', 'Sushi Bar Sakura', '5678901234', 'Via Bologna 6', '80044','ottaviano');
INSERT INTO locale (p_iva, nome_locale, n_telefono_locale, via_locale, cap_locale,comune_sede)
VALUES ('89012345678', 'Seafood Restaurant', '7890123456', 'Via Genova 8', '84010' ,'san valentino torio');
--Cliente
 INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Giulia', 'Verdi', 'giulia@email.com', 'striano');
    INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Paola', 'Gialli', 'paola@email.com', 'sarno');
    INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES('Alessandro', 'Marroni', 'alessandro@email.com', 'palma campania');
    INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Federica', 'Rosa', 'federica@email.com', 'sarno');
    INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Giovanni', 'Arancio', 'giovanni@email.com', 'poggiomarino');
    INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Stefania', 'Viola', 'stefania@email.com', 'san giuseppe vsv.'); 
INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Martina', 'Azzurro', 'martina@email.com', 'palma campania');
INSERT INTO cliente (nome_cliente, cognome_cliente, email, comune_res) 
VALUES ('Mario', 'Rossi', 'mario@email.com', 'striano');
--Pagamento
INSERT INTO pagamento (scontrino, importo, metodo_pay)  
VALUES ('6', 55, 'Carta di credito/debito');
INSERT INTO pagamento (scontrino, importo, metodo_pay)  
VALUES ('7', 12, 'contanti');
INSERT INTO pagamento (scontrino, importo, metodo_pay)  
VALUES  ('8', 18, 'Carta di credito/debito');
INSERT INTO pagamento (scontrino, importo, metodo_pay)  
VALUES  ('2', 28, 'Carta di credito/debito');
--Informazioni consegna
INSERT INTO informazioni_Consegna (via_cliente, citta_cliente, cap_cliente, email_cliente) 
VALUES ('via roma,8', 'san valentino torio', '84010', 'luca@email.com');
INSERT INTO informazioni_Consegna (via_cliente, citta_cliente, cap_cliente, email_cliente) 
VALUES ('Via Torino 1 ', 'sarno', '84087', 'paola@email.com');
INSERT INTO informazioni_Consegna (via_cliente, citta_cliente, cap_cliente, email_cliente) 
VALUES ('via passanti 8', 'poggiomarino', '80040', 'giovanni@email.com');
--Ordine
INSERT INTO ordine (n_ordine, stato, p_ivalocale, cf_consegnatore, email_destinatario, scontrino_ordine, data_e_ora)
VALUES (1, 'consegnato', '45678901234', 'CF001', 'alessandro@email.com ', '8 ', CURRENT_TIMESTAMP);
INSERT INTO ordine (n_ordine, stato, p_ivalocale, cf_consegnatore, email_destinatario, scontrino_ordine, data_e_ora)
VALUES (2, 'in consegna', '2345678901', 'CF003, 'giovanni@email.com ', '2 ', CURRENT_TIMESTAMP);
INSERT INTO ordine (n_ordine, stato, p_ivalocale, cf_consegnatore, email_destinatario, scontrino_ordine, data_e_ora)
VALUES (3, 'in lavorazione', '3456789012', 'CF001', 'alessandro@email.com ', '6', CURRENT_TIMESTAMP);
INSERT INTO ordine (n_ordine, stato, p_ivalocale, cf_consegnatore, email_destinatario, scontrino_ordine, data_e_ora)
VALUES (4, 'in consegna, '0123456789', 'CF005', 'paola@email.com ', '7 ', CURRENT_TIMESTAMP);
--Prodotto
INSERT INTO prodotto (nome_prodotto, tipo_prodotto, p_iva_locale) 
VALUES('pizza','diavola','34567890123');
INSERT INTO prodotto (nome_prodotto, tipo_prodotto, p_iva_locale) 
VALUES('pizza','diavola','34567890123');
INSERT INTO prodotto (nome_prodotto, tipo_prodotto, p_iva_locale) 
VALUES('pizza','marinara','34567890123');
INSERT INTO prodotto (nome_prodotto, tipo_prodotto, p_iva_locale) 
VALUES('pasta','pennette al pomodoro','12345678901');
INSERT INTO prodotto (nome_prodotto, tipo_prodotto, p_iva_locale) 
VALUES('pasta','carbonara','12345678901');
--Presenti
Insert into presenti(idProdotto,nOrdine,quantità) 
values(2,1,3)
insert into presenti(idProdotto,nOrdine,quantità) 
values(4,2,3)
--Effettuano
INSERT INTO effettuano (codf_rider, anno1, dataPrenotazione,giorno_lavorativo)
VALUES ('CF001', 2023, TO_DATE('2023-07-15, 'YYYY-MM-DD'),'sabato');
INSERT INTO effettuano (codf_rider, anno1, dataPrenotazione,giorno_lavorativo)
VALUES ('CF003', 2023, TO_DATE('2023-07-10', 'YYYY-MM-DD'),'lunedi');
INSERT INTO effettuano (codf_rider, anno1, dataPrenotazione,giorno_lavorativo)
VALUES ('CF005', 2023, TO_DATE('2023-07-10', 'YYYY-MM-DD'),'lunedi');
