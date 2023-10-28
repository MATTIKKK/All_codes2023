import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1>Follow your favourites</h1>
                <Featured />
                <hr />
                <hr />
                <h1 className="homeTitle">Find Your Friends</h1>
                
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>

            
        </div>
    )
}

export default Home