import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../pages/partials/NavBar'
import { About } from '../pages/shared/About'
import { Blog } from '../pages/shared/Blog'
import { ContactUs } from '../pages/shared/ContactUs'
import { FAQ } from '../pages/shared/FAQ'
import { Welcome } from '../pages/shared/Welcome'
import { Register } from '../pages/auth/Register';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="about" element={<About />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="FAQ" element={<FAQ />} />
                    <Route path="blog" element={<Blog />} />
                </Routes>
            </div>
        </>
    )
}
