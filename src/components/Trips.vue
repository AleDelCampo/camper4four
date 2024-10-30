<template>
    <div>
        <h1>Lista di Elementi</h1>
        <ul>
            <li v-for="trip in trips" :key="trip.id">
                <h2>{{ trip.name }}</h2>
                <p>{{ trip.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            trips: []
        };
    },
    mounted() {
        this.fetchTrips();
    },
    methods: {
        async fetchTrips() {
            try {
                const response = await axios.get('https://camper4fourdev-38684757747e.herokuapp.com/api/trips');
                this.trips = response.data;
            } catch (error) {
                console.error("Si è verificato un errore nel caricamento degli elementi:", error);
            }
        }
    }
};
</script>