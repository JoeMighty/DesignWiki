<script setup>
import { ref } from 'vue'

const props = defineProps({
  collection: { type: Object, required: true },
})
const emit = defineEmits(['close'])

const shareUrl = ref('')
const isLoading = ref(false)
const error = ref('')
const copied = ref(false)

async function generateShare() {
  isLoading.value = true
  error.value = ''
  try {
    const payload = {
      description: `DesignWiki Collection: ${props.collection.name}`,
      public: true,
      files: {
        'designwiki-collection.json': {
          content: JSON.stringify({
            name: props.collection.name,
            entries: props.collection.entries,
            exportedAt: new Date().toISOString(),
          }, null, 2),
        },
      },
    }
    const res = await fetch('https://api.github.com/gists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Failed to create Gist')
    const base = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/')
    shareUrl.value = `${window.location.origin}${import.meta.env.BASE_URL}?c=${data.id}`
  } catch (e) {
    error.value = e.message
  } finally {
    isLoading.value = false
  }
}

async function copyUrl() {
  await navigator.clipboard.writeText(shareUrl.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="dw-modal-backdrop" @click.self="emit('close')">
    <div class="dw-modal">
      <div class="dw-modal-header">
        <h3>Share "{{ collection.name }}"</h3>
        <button class="dw-close-btn" @click="emit('close')">✕</button>
      </div>

      <p class="dw-modal-meta">{{ collection.entries.length }} entr{{ collection.entries.length === 1 ? 'y' : 'ies' }}</p>

      <div v-if="!shareUrl">
        <p class="dw-modal-desc">This creates an anonymous public Gist with your collection. Anyone with the link can import it.</p>
        <button class="dw-btn-primary" @click="generateShare" :disabled="isLoading">
          {{ isLoading ? 'Generating link…' : 'Generate Share Link' }}
        </button>
        <p v-if="error" class="dw-error">{{ error }}</p>
      </div>

      <div v-else class="dw-share-url-block">
        <input class="dw-input" readonly :value="shareUrl" />
        <button class="dw-btn-primary" @click="copyUrl">
          {{ copied ? '✓ Copied!' : 'Copy Link' }}
        </button>
      </div>
    </div>
  </div>
</template>
