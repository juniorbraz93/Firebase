"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RegistroFirebaseSchema extends Schema {
  up() {
    this.create("registro_firebases", (table) => {
      table.increments();
      table.string("email");
      table.string("password");
      table.timestamps();
    });
  }

  down() {
    this.drop("registro_firebases");
  }
}

module.exports = RegistroFirebaseSchema;
