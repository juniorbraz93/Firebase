const RegistroFirebase = use("App/Models/RegistroFirebase");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with registrofirebases
 */
class RegistroFirebaseController {
  async store({ request, response }) {
    const body = request.only(["email", "password"]);

    await RegistroFirebase.create(body);

    return response.status(200).send({
      success: true,
      data: { data: body, message: "Cadastrado" },
    });
  }
}

module.exports = RegistroFirebaseController;
