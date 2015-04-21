// sql/services.sql.js
// ===================
module.exports = {
  services: function () {
    return "SELECT \
        categoria_servizio.nome, servizi.descrizione, laboratorio.nome,  laboratorio.id_laboratorio \
        FROM \
        servizi,laboratorio,categoria_servizio \
        WHERE  servizi.id_laboratorio = laboratorio.id_laboratorio \
        AND \
        categoria_servizio.id = servizi.id_categoria_servizio \
        AND  \
        categoria_servizio.nome = 'Analisi Chimico-Fisiche' \
        AND \
        laboratorio.nome = 'Laboratorio di Chimica Analitica' \
    ";
  }
};
