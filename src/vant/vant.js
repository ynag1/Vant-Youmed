import Vue from 'vue'
import {
  Button,
  Icon,
  NavBar,
  Toast,
  Tabbar,
  TabbarItem,
  Panel,
  Form,
  Field,
  divider,
  checkbox
} from 'vant'
const components = [
  Button,
  Icon,
  NavBar,
  Toast,
  Tabbar,
  TabbarItem,
  Panel,
  Form,
  Field,
  divider,
  checkbox
]
components.forEach((component) => {
  Vue.use(component)
})
