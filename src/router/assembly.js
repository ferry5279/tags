import Loadable from '@@/Loadable'
const Home = Loadable(() =>
    import ('@/pages/home'))
const Login = Loadable(() =>
    import ('@/pages/login'))
const Reg = Loadable(() =>
    import ('@/pages/reg'))
const Charts = Loadable(() =>
    import ('@/pages/charts'))
const List = Loadable(() =>
    import ('@/pages/list'))
const Public = Loadable(() =>
    import ('@/layout/public'))
export {
    Home,
    Login,
    Reg,
    List,
    Charts,
    Public
}