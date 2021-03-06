import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import listenersPlugin from 'router5-plugin-listeners'
import browserPlugin from 'router5-plugin-browser'
import routes from './routes'


export default function configureRouter(useListenersPlugin = false) {
  const router = createRouter(routes, {
    defaultRoute: routes[0].name,
  })

  router.usePlugin(loggerPlugin)
  router.usePlugin(browserPlugin({ useHash: true }))
  if (useListenersPlugin) {
    router.usePlugin(listenersPlugin())
  }

  return router
}
