<template>
    <div v-title="'关于作者'">
        关于作者
        <contact-card></contact-card>
    </div>
</template>
<script>
import ContactCard from '@/components/ContactCard'
export default {
    name: 'about',
    components: {
        ContactCard,
    }
};
</script>
<style scoped lang="less">

</style>
