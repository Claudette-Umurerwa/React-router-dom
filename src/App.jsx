import { Route, Routes } from "react-router";
import { Nav } from "./Nav/nav";
import Shop from "./Shop/shop";
import About from "./About us/about";
import Contact from "./Contact/contact";
import Categories from "./Categories/categories";



function EntryPage() {
  return (
    <>
    <h1>Entry page</h1>
    </>
  )
}

export default function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  )
}
