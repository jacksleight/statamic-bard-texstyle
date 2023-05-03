<template>

    <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value !== '' ? $event.target.value : null)"
    />

</template>

<script>
export default {
    props: {
        value: null,
    },
}
</script>
