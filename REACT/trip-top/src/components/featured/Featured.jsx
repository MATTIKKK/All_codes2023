import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://assets.editorial.aetnd.com/uploads/2009/12/gettyimages-858637934.jpg" alt="canyon" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Las Vegas</h1>
                <h2>Red Rock Canyon</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg" alt="gate" className="featuredImg" />
            <div className="featuredTitles">
                <h1>San Francisco</h1>
                <h2>Golden Gate</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.miamibeachfl.gov/wp-content/uploads/2023/01/miamibeachsouthpointe.jpg" alt="beach" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Miami</h1>
                <h2>Miami Beach</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured