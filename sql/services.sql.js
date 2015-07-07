// sql/services.sql.js
// ===================
module.exports = {
    services: function () {
        return "SELECT \
            categoria_servizio.nome as category, \
            servizi.id as id, \
            servizi.nome as service_name, \
            servizi.descrizione as service_description, \
            laboratorio.nome as laboratory_name, \
            laboratorio.id_laboratorio as laboratory_id, \
            laboratorio.parole_chiave as laboratory_keywords, \
            servizi.parole_chiave as service_keywords, \
            laboratorio.descrizione as laboratory_description \
            FROM \
            servizi,laboratorio,categoria_servizio \
            WHERE servizi.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            categoria_servizio.id=servizi.id_categoria_servizio \
            ORDER BY category";
    },
    instruments: function () {
        return "SELECT \
            strumenti.id as id, \
            categoria_strumento.nome as category, \
            strumenti.nome as instrument_name, \
            strumenti.descrizione_dello_strumento as instrument_description, \
            laboratorio.nome as laboratory_name,  \
            laboratorio.id_laboratorio as laboratory_id, \
            laboratorio.descrizione as laboratory_description, \
            laboratorio.parole_chiave as laboratory_keywords \
            FROM \
            strumenti,laboratorio,categoria_strumento \
            WHERE strumenti.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            categoria_strumento.id=strumenti.id_categoria \
            ORDER BY category";
    },
    laboratories: function () {
        return "SELECT \
            laboratorio.id_laboratorio as id, \
            laboratorio.nome as name, \
            laboratorio.descrizione as description, \
            laboratorio.parole_chiave as laboratory_keywords, \
            laboratorio.gps_latitudine as lat, \
            laboratorio.gps_longitudine as lng, \
            provincia.nome as provincia_name, \
            servizi.parole_chiave as service_keywords, \
            servizi.descrizione as service_description, \
            strumenti.nome as instrument_name, \
            strumenti.descrizione_dello_strumento as instrument_description, \
            ente.nome as ente_name, \
            area.nome as area_name, \
            laboratorio.sede as sede, \
            laboratorio.sitoweb as web_site, \
            laboratorio.telefono as telephone, \
            concat(laboratorio.indirizzo, ', ', laboratorio.numero_civico, ' - ', comune.nome) as address, \
            concat(laboratorio_responsabile.nome, ' ', laboratorio_responsabile.cognome) as responsabile \
            FROM \
            laboratorio, provincia, ente, area, comune, laboratorio_responsabile, servizi, strumenti \
            WHERE \
            servizi.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            strumenti.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            area.id_area = laboratorio.id_area \
            AND \
            laboratorio.id_provincia = provincia.id \
            AND \
            ente.id = laboratorio.id_ente \
            AND \
            laboratorio_responsabile.id_laboratorio = laboratorio.id_laboratorio \
            AND \
            comune.id = laboratorio.id_comune \
            AND \
            laboratorio.id_laboratorio <> 289";
    },
    macroarea: function () {
        return "SELECT \
            DISTINCT macroarea.nome as macroarea_name, \
            laboratorio_has_macroarea.id_laboratorio as id, \
            laboratorio.gps_latitudine as lat, laboratorio.gps_longitudine as lng \
            FROM \
            ( \
                laboratorio_has_macroarea \
                LEFT JOIN macroarea ON laboratorio_has_macroarea.id_macroarea=macroarea.id \
                LEFT JOIN laboratorio ON laboratorio_has_macroarea.id_laboratorio=laboratorio.id_laboratorio \
            );"
    },
    create_table_provincia: function () {
        return "CREATE TABLE IF NOT EXISTS `provincia`(id INT, `nome` VARCHAR(200)); \
            INSERT INTO provincia (id, nome) VALUES (90, 'Sassari'), (91, 'Nuoro'), (92, 'Cagliari');";
    }
};
