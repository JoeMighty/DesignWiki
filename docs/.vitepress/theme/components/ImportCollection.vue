<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  gistId: { type: String, required: true },
})
const emit = defineEmits(['close'])

const preview = ref(null)
const isLoading = ref(true)
const error = ref('')
const imported = ref(false)

async function fetchGist() {
  try {
    const res = await fetch(`https://api.github.com/gists/${props.gistId}`)
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Gist not found')
    const file = data.files['designwiki-collection.json']
    if (!file) throw new Error('This Gist does not contain a DesignWiki collection.')
    preview.value = JSON.parse(file.content)
  } catch (e) {
    error.value = e.message
  } finally {
    isLoading.value = false
  }
}

function importCollection() {
  const stored = localStorage.getItem('dw_collections')
  const existing = stored ? JSON.parse(stored) : { Default: [] }
  const name = preview.value.name
  const key = existing[name] ? `${name} (imported)` : name
  existing[key] = preview.value.entries
  localStorage.setItem('dw_collections', JSON.stringify(existing))
  imported.value = true
}

onMounted(fetchGist)
</script>

<template>
  <div class="dw-modal-backdrop" @click.self="emit('close')">
    <div class="dw-modal">
      <div class="dw-modal-header">
        <h3>Import Collection</h3>
        <button class="dw-close-btn" @click="emit('close')">✕</button>
      </div>

      <div v-if="isLoading" class="dw-loading">Fetching collection…</div>

      <div v-else-if="error" class="dw-error">{{ error }}</div>

      <div v-else-if="imported" class="dw-success">
        ✓ "{{ preview.name }}" imported successfully!
        <button class="dw-btn-primary" style="margin-top:12px" @click="emit('close')">Done</button>
      </div>

      <div v-else>
        <p class="dw-modal-desc">
          You've been shared a collection: <strong>{{ preview.name }}</strong>
          — {{ preview.entries.length }} entr{{ preview.entries.length === 1 ? 'y' : 'ies' }}.
        </p>
        <ul class="dw-import-preview">
          <li v-for="(e, i) in preview.entries.slice(0, 8)" :key="i">{{ e.title }} <span class="dw-entry-tag">{{ e.discipline }}</span></li>
          <li v-if="preview.entries.length > 8">…and {{ preview.entries.length - 8 }} more</li>
        </ul>
        <button class="dw-btn-primary" @click="importCollection">Import into My Collections</button>
      </div>
    </div>
  </div>
</template>
