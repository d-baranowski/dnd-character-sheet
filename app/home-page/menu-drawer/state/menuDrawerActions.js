const openDrawer = () => ({
  type: 'OPEN_DRAWER'
});
openDrawer.type = 'OPEN_DRAWER';

const closeDrawer = () => ({
  type: 'CLOSE_DRAWER'
});
closeDrawer.type = 'CLOSE_DRAWER';

const setDrawerRoute = (route, props) => ({
  type: 'SET_DRAWER_ROUTE',
  route,
  props
});
setDrawerRoute.type = 'SET_DRAWER_ROUTE';

export { openDrawer, closeDrawer, setDrawerRoute }
