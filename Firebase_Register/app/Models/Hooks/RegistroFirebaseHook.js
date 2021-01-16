"use strict";

const RegistroFirebaseHook = (exports = module.exports = {});
const firebaseAdmin = use("User/Firebase");

RegistroFirebaseHook.method = async (modelInstance) => {
  try {
    /**
     * Cria o usuário no firebase...
     */

    await firebaseAdmin.auth().createUser({
      email: modelInstance.email,
      password: modelInstance.password,
    });

    console.log("Cadastrado no Firebase");

    // No user is signed in.
  } catch (error) {
    // throw new Error('Não foi possível criar o usuário no Firebase');
    console.log(error, "Não foi possível criar o usuário no Firebase");
  }
};
