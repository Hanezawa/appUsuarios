<template>
    <div class="table-container">
        <table class="table-data">
            <thead>
                <th>Tipo Documento</th>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Telefono</th>
            </thead>
            <tbody>
                <tr v-for="persona in personas" :key="persona.id">
                    <td>{{ persona.tipo_documento }} </td>
                    <td>{{ persona.documento }}</td>
                    <td>{{ persona.nombre }}</td>
                    <td>{{ persona.apellido }}</td>
                    <td>{{ persona.correo }}</td>
                    <td>{{ persona.telefono }}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'dashboard',
    data() {
        return {
            users: []
        }
    },
    async consulta() {
        const response = await axios.get('http://localhost:8080/api/personas');
        this.users = response.data;
    }
}
</script>
<style>
.table-container {
    margin: 20px; 
    overflow: auto; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.table-data {
    width: 100%;
    border-collapse: collapse; 
}

.table-data th, .table-data td {
    border: 1px solid black; 
    padding: 8px;
    text-align: left;
}

.table-data th {
    background-color: orangered; 
    color: white; 
    font-weight: bold;
}

.table-data tbody tr:hover {
    background-color:gray
}
</style>