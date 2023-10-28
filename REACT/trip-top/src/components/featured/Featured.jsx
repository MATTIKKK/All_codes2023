import { useNavigate } from "react-router-dom";
import "./featured.css"

const Featured = () => {
    let navigate= useNavigate();
  return (
    <div className="featured">
        <div className="featuredItem" onClick={() => {navigate("/stays")}}>
            <img src="https://www.aljazeera.com/wp-content/uploads/2022/03/000_9VB6LK.jpg?resize=770%2C513&quality=80" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Tokaev Zhomart</h1>
                <h2>Kazakhstan President</h2>
            </div>
        </div>
        <div className="featuredItem" onClick={() => {navigate("/stays")}}>
            <img src="https://cdn.britannica.com/70/145070-050-B810D3E1/Justin-Bieber.jpg?w=300&h=169&c=crop" alt="gate" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Justin Bieber</h1>
                <h2>Handsome boy</h2>
            </div>
        </div>
        <div className="featuredItem" onClick={() => {navigate("/stays")}}>
            <img src="https://s.abcnews.com/images/GMA/ariana-grande-gty-jt-220516_1652723943485_hpMain_16x9_1600.jpg" alt="beach" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ariana Grande</h1>
                <h2>Singer</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured