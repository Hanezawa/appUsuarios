<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-success text-white">
                <h3 class="text-center">Registro</h3>
            </div>
            <div class="card-body bg-light">
                <form @submit.prevent="submitForm">
                    <div class="form-group mt-2">
                        <label for="user">Tipo documento:</label>
                        <input type="number" class="form-control" name="typeDocument">
                    </div>
                    <div class="form-group mt-2">
                        <label for="user">Documento</label>
                        <input type="number" class="form-control" name="document">
                    </div>
                    <div class="form-group mt-2">
                        <label for="user">Nombre</label>
                        <input type="text" class="form-control" name="firtsName">
                    </div>
                    <div class="form-group mt-2">
                        <label for="email">Apellido</label>
                        <input type="text" class="form-control" name="lastName">
                    </div>
                    <div class="form-group mt-2">
                        <label for="user">correo</label>
                        <input type="mail" class="form-control" name="email">
                    </div>
                    <div class="form-group mt-2">
                        <label for="user">telefono</label>
                        <input type="phone" class="form-control" name="phone">
                    </div>
                    <div class="form-group mt-2">
                        <label for="pass">Contrase&ntilde;a</label>
                        <input type="password" class="form-control" name="pass">
                    </div>
                    <div class="form-group mt-2">
                        <label for="passConfirm">Confirmar contrase&ntilde;a</label>
                        <input type="password" class="form-control" name="passConfirm">
                    </div>
                    <div class="form-group mt-4 text-center">
                        <button type="submit" class="btn btn-success">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            typeDocument: null,
            document: null,
            firtsName: null,
            lastName: null,
            email: null,
            phone: null,
            pass: null,
            passConfirm: null
        }
    },
    methods: {
        async submitForm() {
            if (this.pass !== this.passConfirm) {
                alert("Las contraseñas no coinciden");
                return;
            }

            const response = await axios.post('http://localhost:8080/api/personas/', {
                tipo_doc: this.typeDocument,
                documento: this.document,
                nombre: this.firtsName,
                apellido: this.lastName,
                correo: this.email,
                telefono: this.phone,
                pass: this.pass
            });

            if (response.status === 201) {
                alert("Persona registrada correctamente");
            } else {
                alert("Error al insertar los datos");
            }
        }
    }
}
</script>


<style scoped>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.card {
    max-width: 400px;
    width: 100%;
    margin: 20px;
}
</style>


