// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Cookies from 'js-cookie'
import store from './store'
import VueParticles from 'vue-particles'
import 'font-awesome/less/font-awesome.less'
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Card,
    Rate,
    Collapse,
    CollapseItem,
    Cascader,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$axios = axios;
Vue.use(VueParticles)

// Vue 的全局配置
Vue.config.productionTip = false

// 上线全局请求配置
axios.defaults.baseURL = 'api/v1/'

// http request 拦截器
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.headers['X-CSRF-TOKEN'] = Cookies.get('XSRF-TOKEN'); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
}, error => {
    console.log(error); // for debug
    Promise.reject(error);
})

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                // 如果后端返回没有权限
                case 401:
                    // 清除token信息并跳转到登录页面
                    Cookies.set('isLogin','0')
                    router.replace('login')
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
