// sql/services.sql.js
// ===================
module.exports = {
    services: function () {
        return "SELECT \
            categoria_servizio.nome as name, \
            servizi.nome as service_name, servizi.descrizione as service_description, \
            laboratorio.nome as laboratory_name,  laboratorio.id_laboratorio as laboratory_id \
            FROM \
            servizi,laboratorio,categoria_servizio \
            WHERE  servizi.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            categoria_servizio.id=servizi.id_categoria_servizio";
    },
    instruments: function () {
        return "SELECT \
            categoria_strumento.nome as name, strumenti.nome as instrument_name, \
            strumenti.descrizione_dello_strumento as instrument_description, \
            laboratorio.nome as laboratory_name,  laboratorio.id_laboratorio as laboratory_id \
            FROM \
            strumenti,laboratorio,categoria_strumento \
            WHERE  strumenti.id_laboratorio=laboratorio.id_laboratorio \
            AND \
            categoria_strumento.id=strumenti.id_categoria";
    },
    laboratories: function () {
        return "SELECT \
            laboratorio.nome as laboratory_name, laboratorio.descrizione as laboratory_description \
            FROM \
            laboratorio";
    }
};
