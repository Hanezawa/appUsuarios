<template>
    <div class="container">
        <div class="card">
            <div class="card-header bg-success text-white">
                <h3 class="text-center">Iniciar Sesión</h3>
            </div>
            <div class="card-body bg-light">
                <form @submit.prevent="submitForm">
                    <div class="form-group mt-2">
                        <label for="user_correo">Usuario</label>
                        <input type="text" class="form-control" v-model="user_correo" required>
                    </div>
                    <div class="form-group mt-2">
                        <label for="password">Contrase&ntilde;a</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                    <div class="form-group text-center mt-4">
                        <router-link to="/dashboard" class="btn btn-success btn-block">Iniciar Sesión</router-link>
                    </div>
                </form>

                <div class="text-center mt-2">
                    <router-link to="/register">Registrarse</router-link>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style scoped></style>
<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.card {
    max-width: 400px;
    width: 300px;
}
</style>