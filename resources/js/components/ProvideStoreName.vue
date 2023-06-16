<template>

    <div>
        <slot />
    </div>

</template>

<script>
export default {

    props: {
        storeName: {
            type: String
        },
    },

    provide() {
        return {
            storeName: this.storeName
        }
    },

}
</script>
