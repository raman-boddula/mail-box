import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/atoms/private-route/PrivateRoute";
import { ViewPage } from "../components/pages/view-page/view-page";
import { BodyPage } from "../components/atoms/body/Body";
const RouterWrapper = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute ><ViewPage /></PrivateRoute>}></Route>
            <Route path='/:type' element={
                <ViewPage />
            }></Route>
            <Route path='/:type/body/:id' element={<BodyPage />}></Route>
            <Route path='*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    )
}
export default RouterWrapper;