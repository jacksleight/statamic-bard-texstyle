<script>
export default {

    methods: {
        
        updatePinMeta(id, meta) {
            this.bard.updateMeta({
                ...this.bard.meta,
                btsPins: {
                    ...this.bard.meta.btsPins,
                    existing: {
                        ...this.bard.meta.btsPins.existing,
                        [id]: meta
                    }
                },
            });
        },

    },

}
</script>
