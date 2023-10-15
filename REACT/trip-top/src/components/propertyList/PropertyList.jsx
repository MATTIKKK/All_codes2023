import { useNavigate } from "react-router-dom"
import "./propertyList.css"

const PropertyList = () => {
    let navigate = useNavigate()
  return (
    <div className="pList">
        <div className="pListItem" onClick={() => {navigate("/stays")}}>
            <img src="https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem" onClick={() => {navigate("/stays")}}>
            <img src="https://images1.apartments.com/i2/qdnoYaDmFh0RK2vj-0yqVCB_11FhW51wQNU1t1AB2j4/111/parkmerced-san-francisco-ca-building-photo.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>2987 apartments</h2>
            </div>
        </div>
        <div className="pListItem" onClick={() => {navigate("/stays")}}>
            <img src="https://ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>1112 resorts</h2>
            </div>
        </div>
        <div className="pListItem" onClick={() => {navigate("/stays")}}>
            <img src="https://uat-magazine.elitehavens.com/wp-content/uploads/2021/05/Header.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>447 villas</h2>
            </div>
        </div>
        <div className="pListItem" onClick={() => {navigate("/stays")}}>
            <img src="https://static.wixstatic.com/media/3ffa1d_54089e5082b448c49c4e803543841971~mv2.jpg/v1/fit/w_479,h_320,q_90/3ffa1d_54089e5082b448c49c4e803543841971~mv2.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>165 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList