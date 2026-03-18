<script setup>
import { ref, computed, onMounted } from 'vue'
import ShareModal from './ShareModal.vue'

const isOpen = ref(false)
const collections = ref({})
const activeCollection = ref('Default')
const newCollectionName = ref('')
const showShareModal = ref(false)
const sharingCollection = ref(null)

function loadCollections() {
  const stored = localStorage.getItem('dw_collections')
  collections.value = stored ? JSON.parse(stored) : { Default: [] }
}

function saveCollections() {
  localStorage.setItem('dw_collections', JSON.stringify(collections.value))
}

function createCollection() {
  const name = newCollectionName.value.trim()
  if (!name || collections.value[name]) return
  collections.value[name] = []
  saveCollections()
  activeCollection.value = name
  newCollectionName.value = ''
}

function removeEntry(collection, index) {
  collections.value[collection].splice(index, 1)
  saveCollections()
}

function deleteCollection(name) {
  if (name === 'Default') return
  delete collections.value[name]
  activeCollection.value = 'Default'
  saveCollections()
}

function openShare(name) {
  sharingCollection.value = { name, entries: collections.value[name] }
  showShareModal.value = true
}

const collectionNames = computed(() => Object.keys(collections.value))
const currentEntries = computed(() => collections.value[activeCollection.value] || [])

onMounted(loadCollections)
</script>

<template>
  <!-- Toggle Button -->
  <button class="dw-collections-toggle" @click="isOpen = !isOpen" :title="isOpen ? 'Close collections' : 'My collections'">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
    <span>Collections</span>
  </button>

  <!-- Slide-in Panel -->
  <transition name="panel-slide">
    <div v-if="isOpen" class="dw-collections-panel">
      <div class="dw-panel-header">
        <h3>My Collections</h3>
        <button class="dw-close-btn" @click="isOpen = false">✕</button>
      </div>

      <!-- Collection Tabs -->
      <div class="dw-collection-tabs">
        <button
          v-for="name in collectionNames"
          :key="name"
          class="dw-tab"
          :class="{ active: activeCollection === name }"
          @click="activeCollection = name"
        >{{ name }}</button>
      </div>

      <!-- Entries -->
      <div class="dw-entries">
        <p v-if="currentEntries.length === 0" class="dw-empty">No entries yet. Browse entries and click <strong>+ Save</strong> to add them.</p>
        <div v-for="(entry, i) in currentEntries" :key="i" class="dw-entry-row">
          <a :href="entry.url" class="dw-entry-link">{{ entry.title }}</a>
          <span class="dw-entry-tag">{{ entry.discipline }}</span>
          <button class="dw-remove-btn" @click="removeEntry(activeCollection, i)">✕</button>
        </div>
      </div>

      <!-- Actions -->
      <div class="dw-panel-actions">
        <button class="dw-btn-secondary" @click="openShare(activeCollection)" :disabled="currentEntries.length === 0">
          Share Collection
        </button>
        <button class="dw-btn-danger" v-if="activeCollection !== 'Default'" @click="deleteCollection(activeCollection)">
          Delete
        </button>
      </div>

      <!-- New Collection -->
      <div class="dw-new-collection">
        <input
          v-model="newCollectionName"
          placeholder="New collection name…"
          @keyup.enter="createCollection"
          class="dw-input"
        />
        <button class="dw-btn-primary" @click="createCollection">Create</button>
      </div>
    </div>
  </transition>

  <!-- Overlay -->
  <div v-if="isOpen" class="dw-overlay" @click="isOpen = false" />

  <ShareModal v-if="showShareModal" :collection="sharingCollection" @close="showShareModal = false" />
</template>
