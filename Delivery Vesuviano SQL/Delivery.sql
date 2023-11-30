—-Zona
create table zona( 
     id_zona char(4), 
    constraint pk_zona primary key(id_zona) 
);
—-Comune
create table comune( 
    nome_comune char(20), 
    provincia char(2), 
    zona_associata char(4), 
    constraint pk_comune primary key(nome_comune), 
    constraint fk_comune foreign key (zona_associata) references zona(id_zona) 
);
—-Locale
create table locale( 
    p_iva char(11), 
    nome_locale varchar(20) unique not null, 
    n_telefono_locale char(10) unique not null, 
    via_locale varchar(20) not null, 
    cap_locale varchar(20) not null, 
    comune_sede char(20), 
    constraint pk_locale primary key(p_iva), 
    constraint fk_locale foreign key (comune_sede) references comune(nome_comune) 
    );

—-Rider
create table rider( 
    cf_rider char(16), 
    nome_rider varchar(20) not null, 
    cognome_rider varchar(20) not null, 
    rider_id number(4,0) not null unique, 
    telefono_rider char(10) unique, 
    comune_lavorativo char(20), 
    constraint pk_rider primary key(cf_rider), 
    constraint fk_rider foreign key (comune_lavorativo) references comune(nome_comune));
—-Prenotazione
CREATE TABLE prenotazione (
    anno number(4,0) not null,
    data_prenotazione date,
    giorno varchar(20) not null,
    ora_inizio timestamp not null,
    ora_fine timestamp not null,
    constraint pk_prenotazione primary key (data_prenotazione, anno, giorno),
    constraint ck_orario_prenotazione check (
        (EXTRACT(hour FROM ora_inizio) >= 19 AND EXTRACT(hour from ora_fine) <= 24)
        AND
        (EXTRACT(hour FROM ora_inizio) < EXTRACT(hour FROM ora_fine))),
    constraint check_giorno check (giorno in ('lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato', 'domenica'))
);



—-Cliente
create table cliente( 
    nome_cliente varchar(20) not null, 
    cognome_cliente varchar(20), 
    email char(30) not null, 
    comune_res char(20), 
    constraint pk_cliente primary key(email), 
    constraint fk_cliente1 foreign key(comune_res) references comune(nome_comune),
);

—-Informazioni consegna
create table informazioni_Consegna(     
    via_cliente char(20) not null,     
    citta_cliente char(20) not null,     
    cap_cliente char(10) not null,     
    citofono varchar(20),     
    note_per_rider varchar(30), 
    email_cliente char(30), 
    constraint pk_info primary key(via_cliente,citta_cliente,cap_cliente), 
    constraint fk_info foreign key(email_cliente) references cliente(email)
) ;
—-Pagamento
create table pagamento( 
    scontrino char(10), 
    importo number(2,0), 
    metodo_pay varchar(30), 
    constraint pk_pagamento primary key(scontrino), 
    constraint chk_metodo check( 
    metodo_pay='contanti' 
    or metodo_pay='Carta di credito/debito') 
);


—-Ordine
create table ordine(  
    n_ordine number(3,0) not null,  
    stato varchar(20) not null,  
    p_ivalocale char(11),  
    cf_consegnatore char(16),  
    email_destinatario char(30),  
    scontrino_ordine char(10),  
    data_e_ora timestamp,
    constraint pk_ordine primary key(n_ordine),  
    constraint fk_ordine_locale foreign key(p_ivalocale) references locale(p_iva),  
    constraint fk_ordine_rider foreign key(cf_consegnatore) references rider(cf_rider),  
    constraint fk_ordine_cliente foreign key (email_destinatario) references cliente(email),  
    constraint fk_ordine_scontrino foreign key(scontrino_ordine) references pagamento(scontrino),  
    constraint chk_stato check(  
    stato in('in lavorazione','ritirato','in consegna','consegnato'))  
    );



—-Prodotto
create table prodotto( 
    id_prodotto number not null, 
    nome_prodotto varchar(20) not null, 
    tipo_prodotto varchar(20), 
    p_iva_locale char(11), 
    constraint pk_prodotto primary key(id_prodotto), 
    constraint fk_prdotto foreign key (p_iva_locale) references locale(p_iva) 
);

—-Presenti 
create table presenti(  
    idProdotto number,  
    nOrdine number,  
    quantità number(2,0),  
    constraint pk_presenti primary key(idProdotto,nOrdine),  
    constraint fk_presenti1 foreign key(idProdotto) references prodotto(id_prodotto),  
    constraint fk_presenti2 foreign key(nOrdine) references ordine(n_ordine)  
);
—-Effettuano
create table effettuano( 
    codf_rider char(16), 
    anno1 number(4,0), 
    dataPrenotazione date,
giorno_lavorativo varchar(20), 
    constraint pk_effettuano primary key(codf_rider,anno1,dataPrenotazione,giorno_lavorativo), 
    constraint fk_effettuano1 foreign key (codf_rider) references rider(cf_rider), 
    constraint fk_effettuano2 foreign key (anno1,dataPrenotazione,giorno_lavorativo) references prenotazione(anno,data_prenotazione,giorno)
);

