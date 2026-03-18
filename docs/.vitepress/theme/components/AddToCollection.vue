<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  discipline: { type: String, required: true },
})

const collections = ref({})
const selected = ref('Default')
const saved = ref(false)
const showDropdown = ref(false)

function loadCollections() {
  const stored = localStorage.getItem('dw_collections')
  collections.value = stored ? JSON.parse(stored) : { Default: [] }
}

function save() {
  loadCollections()
  const entry = {
    title: props.title,
    discipline: props.discipline,
    url: window.location.pathname,
    savedAt: new Date().toISOString(),
  }
  const col = collections.value[selected.value] || []
  const already = col.some(e => e.url === entry.url)
  if (!already) {
    col.push(entry)
    collections.value[selected.value] = col
    localStorage.setItem('dw_collections', JSON.stringify(collections.value))
  }
  saved.value = true
  showDropdown.value = false
  setTimeout(() => { saved.value = false }, 2500)
}

onMounted(loadCollections)
</script>

<template>
  <div class="dw-add-to-col">
    <button class="dw-save-btn" @click="showDropdown = !showDropdown">
      <span v-if="saved">✓ Saved</span>
      <span v-else>+ Save to Collection</span>
    </button>
    <div v-if="showDropdown" class="dw-save-dropdown">
      <label class="dw-dropdown-label">Choose collection:</label>
      <select v-model="selected" class="dw-select">
        <option v-for="name in Object.keys(collections)" :key="name" :value="name">{{ name }}</option>
      </select>
      <button class="dw-btn-primary" @click="save">Save</button>
    </div>
  </div>
</template>
