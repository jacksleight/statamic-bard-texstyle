<script>
export default {

    methods: {
        
        updateSpotMeta(id, meta) {
            this.bard.updateMeta({
                ...this.bard.meta,
                btsSpots: {
                    ...this.bard.meta.btsSpots,
                    existing: {
                        ...this.bard.meta.btsSpots.existing,
                        [id]: meta
                    }
                },
            });
        },

    },

}
</script>
