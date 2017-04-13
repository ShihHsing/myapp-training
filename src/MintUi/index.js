import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { Header, Button, Swipe, SwipeItem, Loadmore, Spinner, InfiniteScroll } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)
