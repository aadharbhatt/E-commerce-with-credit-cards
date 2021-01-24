import Cart from './Cart/Cart.routes'
import Inventory from './Inventory/Inventory.routes'

const portalRoutes = [
    ...Cart,
    ...Inventory
]
export default portalRoutes;
