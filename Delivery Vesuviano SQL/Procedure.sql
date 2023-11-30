CREATE OR REPLACE PROCEDURE NUMERO_CONSEGNE_RIDER (CF_RIDER IN CHAR)
IS
 CONT INTEGER;
 BEGIN
 SELECT COUNT(*) INTO CONT
 FROM ordine
 WHERE cf_consegnatore = CF_RIDER;
 DBMS_OUTPUT.PUT_LINE('Il rider con CF ' || CF_RIDER || ' ha effettuato ' || CONT || '    consegne.');
END;
----------------------------------------------
CREATE OR REPLACE PROCEDURE NUMERO_ORDINI_PER_COMUNE
IS
BEGIN
  FOR rec IN (SELECT comune.nome_comune, COUNT(*) AS num_ordini
              FROM comune
              INNER JOIN cliente ON comune.nome_comune = cliente.comune_res
    INNER JOIN ordine on cliente.email= ordine.email_destinatario
              GROUP BY comune.nome_comune)
  LOOP
    DBMS_OUTPUT.PUT_LINE('Comune: ' || rec.nome_comune || ', Numero ordini: ' || rec.num_ordini);
  END LOOP;
END;
----------------------------------------------
CREATE OR REPLACE PROCEDURE CalcolaGuadagni
IS 
BEGIN 
    FOR rec IN (SELECT SUM (importo) AS totale_pagamenti 
                FROM pagamento 
                INNER JOIN ordine ON ordine.scontrino_ordine = pagamento.scontrino 
                GROUP BY ordine.scontrino_ordine) 
    LOOP 
        DBMS_OUTPUT.PUT_LINE('Totale pagamenti: ' || rec.totale_pagamenti); 
    END LOOP; 
END;
------------------------------------------------
CREATE OR REPLACE PROCEDURE RIDER_PRENOTATI  
IS  
BEGIN  
  FOR rec IN (  
    SELECT effettuano.codf_rider, COUNT(*) AS num_prenotazioni  
    FROM effettuano  
    INNER JOIN rider ON effettuano.codf_rider=rider.cf_rider  
    GROUP BY effettuano.codf_rider  
  ) LOOP  
    DBMS_OUTPUT.PUT_LINE('Rider:' || rec.codf_rider || ', Numero di prenotazioni: ' || rec.num_prenotazioni);  
  END LOOP;  
END;
------------------------------------------------
