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
                        [id]: meta,
                    }
                },
            });
        },   
        
        pastePin(attrs) {
            const old_id = attrs.id;
            const id = uniqid();
            const values = attrs.values;
            const meta = this.bard.meta.btsPins?.existing[old_id] || this.bard.meta.btsPins?.defaults[values.type] || {};
            
            setTimeout(() => {
                this.updatePinMeta(id, meta);
            }, 0);

            return { id, values };
        },

    },

}
</script>
