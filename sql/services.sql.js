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
        categoria_servizio.id=servizi.id_categoria_servizio \
        AND \
        categoria_servizio.nome = 'Analisi Chimico-Fisiche' \
        LIMIT 5;";
  }
};
