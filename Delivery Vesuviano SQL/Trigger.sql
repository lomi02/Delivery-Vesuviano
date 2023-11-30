CREATE OR REPLACE TRIGGER limita_prenotazioni
BEFORE INSERT ON effettuano
FOR EACH ROW
DECLARE
    lunedi_count number;
    martedi_count number;
    mercoledi_count number;
    giovedi_count number;
    venerdi_count number;
    sabato_count number;
    domenica_count number;
BEGIN
    IF :NEW.giorno_lavorativo = 'lunedi' THEN
        SELECT COUNT(*)
        INTO lunedi_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'lunedi';

        IF lunedi_count >= 5 THEN
            RAISE_APPLICATION_ERROR(-20001, 'È stato raggiunto il limite massimo di prenotazioni per il lunedì.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'martedi' THEN
        SELECT COUNT(*)
        INTO martedi_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'martedi';

        IF martedi_count >= 5 THEN
            RAISE_APPLICATION_ERROR(-20002, 'È stato raggiunto il limite massimo di prenotazioni per il martedì.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'mercoledi' THEN
        SELECT COUNT(*)
        INTO mercoledi_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'mercoledi';

        IF mercoledi_count >= 5 THEN
            RAISE_APPLICATION_ERROR(-20003, 'È stato raggiunto il limite massimo di prenotazioni per il mercoledì.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'giovedi' THEN
        SELECT COUNT(*)
        INTO giovedi_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'giovedi';

        IF giovedi_count >= 5 THEN
            RAISE_APPLICATION_ERROR(-20004, 'È stato raggiunto il limite massimo di prenotazioni per il giovedì.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'venerdi' THEN
        SELECT COUNT(*)
        INTO venerdi_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'venerdi';

        IF venerdi_count >= 10 THEN
            RAISE_APPLICATION_ERROR(-20005, 'È stato raggiunto il limite massimo di prenotazioni per il venerdì.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'sabato' THEN
        SELECT COUNT(*)
        INTO sabato_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'sabato';

        IF sabato_count >= 10 THEN
            RAISE_APPLICATION_ERROR(-20006, 'È stato raggiunto il limite massimo di prenotazioni per il sabato.');
        END IF;
    ELSIF :NEW.giorno_lavorativo = 'domenica' THEN
        SELECT COUNT(*)
        INTO domenica_count
        FROM effettuano
        WHERE anno1 = EXTRACT(YEAR FROM :NEW.dataPrenotazione)
            AND giorno_lavorativo = 'domenica';

        IF domenica_count >= 10 THEN
            RAISE_APPLICATION_ERROR(-20007, 'È stato raggiunto il limite massimo di prenotazioni per la domenica.');
        END IF;
    END IF;
END;
---------------------------------------------

CREATE SEQUENCE seq_rider_id START WITH 1 INCREMENT BY 1;
CREATE OR REPLACE TRIGGER Trg_IncrementaRiderId
BEFORE INSERT ON rider
FOR EACH ROW
BEGIN
    SELECT seq_rider_id.NEXTVAL INTO :new.rider_id FROM dual;
END;
------------------------------------------------
CREATE OR REPLACE TRIGGER obbliga_pagamento_carta
BEFORE INSERT ON pagamento
FOR EACH ROW
BEGIN
IF :NEW.metodo_pay != 'Carta di credito/debito' AND :NEW.importo > 35 THEN
        RAISE_APPLICATION_ERROR(-20008, 'L''importo supera i 35 euro. È obbligatorio pagare con carta di credito/debito.');
    END IF;
END;
-----------------------------------------------
CREATE OR REPLACE TRIGGER Trg_RitiraConsegna
BEFORE INSERT ON ordine
FOR EACH ROW
DECLARE
    v_comune_rider comune.nome_comune%TYPE;
    v_comune_locale locale.comune_sede%TYPE;
    v_comune_destinatario cliente.comune_res%TYPE;
BEGIN
 SELECT comune_lavorativo INTO v_comune_rider FROM rider WHERE cf_rider = :new.cf_consegnatore;
    SELECT comune_sede INTO v_comune_locale FROM locale WHERE p_iva = :new.p_ivalocale;
    SELECT comune_res INTO v_comune_destinatario FROM cliente WHERE email = :new.email_destinatario;
IF v_comune_rider <> v_comune_locale OR v_comune_rider <> v_comune_destinatario THEN
        raise_application_error(-20009, 'Il rider può ritirare al locale e consegnare al cliente solo nello STESSO comune.');
    END IF;
END;
-----------------------------------------------
CREATE OR REPLACE TRIGGER Trg_ControlloImportoMinimo
BEFORE INSERT ON pagamento
FOR EACH ROW
BEGIN
   IF :new.importo <= 10 THEN
        raise_application_error(-20010, 'L''importo del pagamento deve essere maggiore di 10.');
    END IF;
EXCEPTION
    WHEN OTHERS THEN
       DBMS_OUTPUT.PUT_LINE('Errore: ' || SQLERRM)
        RAISE;
END;
--------------------------------------------
CREATE OR REPLACE TRIGGER trg_ordine_before_insert
BEFORE INSERT ON ordine
FOR EACH ROW
DECLARE
  v_rider_stato VARCHAR(20);
BEGIN
  SELECT stato
  INTO v_rider_stato
  FROM ordine
  WHERE cf_consegnatore = :NEW.cf_consegnatore
  ORDER BY data_e_ora DESC
  FETCH FIRST 1 ROW ONLY;
    IF v_rider_stato IN ('in lavorazione', 'ritirato', 'in consegna') THEN
    RAISE_APPLICATION_ERROR(-20011, 'Il rider è già occupato con la consegna di un altro ordine.');
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    NULL;
END;
