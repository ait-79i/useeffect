import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompMaster from './CompMaster';
import Display from './Display';
import Home from './Home';
import App from './App'
import Form from './Form';
import Product from './Product';
export default function App4(){


    return(
        <BrowserRouter>      
        <Routes> 
                   
            <Route path='/' element={<CompMaster />}>  
                <Route index element={<Home />} />        
                <Route path='app' element={<App />}>
                    <Route path='produit/:productId/:name' element={<Product />} />
                    <Route path='produits' element={<Display />} />
                    <Route path='AjouterPr' element={<Form />} />

                </Route>
               
            
            </Route>

            {/* <Route path='*' element={<Error />} />       */}
        </Routes>
        +
        </BrowserRouter>
    )
}