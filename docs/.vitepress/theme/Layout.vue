<script setup>
import DefaultTheme from 'vitepress/theme'
import CollectionsPanel from './components/CollectionsPanel.vue'
import ImportCollection from './components/ImportCollection.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()
const importGistId = ref(null)

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const gistId = params.get('c')
  if (gistId) {
    importGistId.value = gistId
  }
})
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <CollectionsPanel />
      <ImportCollection v-if="importGistId" :gist-id="importGistId" @close="importGistId = null" />
    </template>
  </Layout>
</template>
