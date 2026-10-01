import Navbar from "./components/Navbar";


function App(){

return(
<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/import" element={<import/>}/>

</Routes>

</BrowserRouter>
)

}

export default App;