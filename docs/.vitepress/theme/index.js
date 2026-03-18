import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/vars.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout,
}
