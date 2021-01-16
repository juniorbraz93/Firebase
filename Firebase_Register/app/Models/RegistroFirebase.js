"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class RegistroFirebase extends Model {
  static get table() {
    return "registro_firebases";
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeCreate", "RegistroFirebaseHook.method");
  }
}

module.exports = RegistroFirebase;
