CREATE VIEW prenotazionerider AS
SELECT rider.cf_rider,prenotazione.data_prenotazione
FROM rider
INNER JOIN effettuano on rider.cf_rider=effettuano.codf_rider
INNER JOIN prenotazione on effettuano.dataPrenotazione=prenotazione.data_prenotazione;
-------------------------------------------------
CREATE VIEW cliente_view AS 
SELECT locale.nome_locale,ordine.n_ordine,ordine.stato,pagamento.importo 
FROM locale 
    inner join ordine on locale.p_iva=ordine.p_ivalocale 
    inner join pagamento on ordine.scontrino_ordine=pagamento.scontrino
-------------------------------------------------
