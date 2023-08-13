import { Route } from "react-router-dom";
import navigation from "./Navigation/navigation.js"
import AdoptForm1 from "./Components/Adoptpage/Adoptform/adoptform1.jsx"

<Route>
    <Route exact path="./Navigation/navigation.js" component={navigation} />
    <Route exact path="./Components/Adoptpage/Adoptform/adoptform1.jsx" Component={AdoptForm1} />
</Route>