const { model, Schema } = require("mongoose");


const placeSchema = new Schema(
  {
    id: String,
    nom_estab: String,
    nombre_act:String,
    tipo_vial: String,
    nom_vial: String,
    tipo_asent: String,
    nomb_asent: String,
    cod_postal: String,
    entidad: String,
    localidad: String,
    latitud: String,
    longitud: String
  },
  {
    collection: 'Comercios_clean'
  }
);

module.exports = model("Place", placeSchema);