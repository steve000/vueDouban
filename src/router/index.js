import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const BaseHeader = () => import('../components/common/BaseHeader.vue')

const BookTag = () => import('../components/book/BookTag.vue')
const BookTagContent = () => import('../components/book/BookTagContent.vue')
const BookTagMoreContent = () => import('../components/book/BookTagMoreContent.vue')
const BookTypeContent = () => import('../components/book/BookTypeContent.vue')

const MovieTimeTypeContent = () => import('../components/movie/MovieTimeTypeContent.vue')
const MovieTag = () => import('../components/movie/MovieTag.vue')
const MovieTagContent = () => import('../components/movie/MovieTagContent.vue')

const MusicTagContent = () => import('../components/music/MusicTagContent.vue')

const CityTag = () => import('../components/city/CityTag.vue')
const CityTagContent = () => import('../components/city/CityTagContent.vue')

export default new Router({
  routes: [{
    path: '/',
    redirect: '/book-tag'
  }, {
    path: '/book-tag',
    name: 'bookTag',
    components: {
      default: BaseHeader,
      aside: BookTag,
      content: BookTagContent
    }
  }, {
    path: '/book-tag-more-info',
    name: 'bookTagMoreInfo',
    components: {
      default: BaseHeader,
      aside: BookTag,
      content: BookTagMoreContent
    }
  }, {
    path: '/book-type',
    name: 'bookType',
    components: {
      default: BaseHeader,
      content: BookTypeContent
    }
  }, {
    path: '/movie-show-time',
    name: 'movieShowTime',
    components: {
      default: BaseHeader,
      content: MovieTimeTypeContent
    }
  }, {
    path: '/movie-tag',
    name: 'movieTag',
    components: {
      default: BaseHeader,
      aside: MovieTag,
      content: MovieTagContent
    }
  }, {
    path: '/music-tag',
    name: 'musicTag',
    components: {
      default: BaseHeader,
      content: MusicTagContent
    }
  }, {
    path: '/city-tag',
    name: 'cityTag',
    components: {
      default: BaseHeader,
      aside: CityTag,
      content: CityTagContent
    }
  }
  ]
})
