const OpenDrawer = () => ({
  type: 'OPEN_DRAWER'
});

const CloseDrawer = () => ({
  type: 'CLOSE_DRAWER'
});

const SetDrawerRoute = (route) => ({
  type: 'SET_DRAWER_ROUTE',
  rote: route
});

export { OpenDrawer, CloseDrawer, SetDrawerRoute }
